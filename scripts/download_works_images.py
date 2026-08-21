#!/usr/bin/env python3
"""
公式HPの OGP / メイン画像を取得し、public/works/ に保存して
src/data/works.ts の thumbnail パスを自動更新する。

使い方:
  python3 scripts/download_works_images.py
  python3 scripts/download_works_images.py --dry-run
  python3 scripts/download_works_images.py --from-works-ts

依存:
  pip3 install requests beautifulsoup4
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Iterable, List, Optional, Tuple
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
WORKS_TS = ROOT / "src" / "data" / "works.ts"
OUT_DIR = ROOT / "public" / "works"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/122.0.0.0 Safari/537.36"
)

# 作品タイトル → 公式URL（必要に応じて追記）
# works.ts の externalUrl がある作品は --from-works-ts でも取得可能
WORKS_LIST: List[Tuple[str, str]] = [
    ("晩餐ブルース Special", "https://www.tv-tokyo.co.jp/bansanblues_sp/"),
    ("MAGI -天正遣欧少年使節-", "https://www.magi-boys.com/index.html"),
    ("浅草ラスボスおばあちゃん", "https://www.tokai-tv.com/asakusa-lastboss/"),
    ("アイシー～瞬間記憶捜査・柊班～", "https://www.fujitv.co.jp/eyesee/"),
    ("街並み照らすヤツら", "https://www.ntv.co.jp/machinami-ntv/story/01.html"),
    ("今日からヒットマン", "https://www.tv-asahi.co.jp/hitman/story/0008/"),
    ("東京彼女 クズ男製造女子篇", "https://www.youtube.com/watch?v=nvsvDVqyy9U"),
    ("STRANGERS", "https://strangers1102.studio.site"),
]


def sanitize_filename(title: str) -> str:
    """ファイル名に使えない文字を除去し、作品名.jpg 形式にする。"""
    name = title.strip()
    name = re.sub(r'[\\/:*?"<>|]+', "_", name)
    name = re.sub(r"\s+", " ", name).strip(" .")
    if not name:
        name = "untitled"
    return f"{name}.jpg"


def session() -> requests.Session:
    s = requests.Session()
    s.headers.update(
        {
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
        }
    )
    return s


def absolute_url(base: str, src: Optional[str]) -> Optional[str]:
    if not src:
        return None
    src = src.strip()
    if not src or src.startswith("data:"):
        return None
    return urljoin(base, src)


def extract_image_url(html: str, page_url: str) -> Optional[str]:
    """og:image / twitter:image / 代表的なメイン画像を抽出。"""
    soup = BeautifulSoup(html, "html.parser")

    meta_keys = [
        ("property", "og:image"),
        ("property", "og:image:url"),
        ("property", "og:image:secure_url"),
        ("name", "twitter:image"),
        ("name", "twitter:image:src"),
        ("itemprop", "image"),
    ]
    for attr, key in meta_keys:
        tag = soup.find("meta", attrs={attr: key})
        if tag and tag.get("content"):
            url = absolute_url(page_url, tag["content"])
            if url:
                return url

    # link rel=image_src
    link = soup.find("link", attrs={"rel": "image_src"})
    if link and link.get("href"):
        url = absolute_url(page_url, link["href"])
        if url:
            return url

    # YouTube フォールバック（maxres → hq）
    yt = re.search(
        r"(?:youtube\.com/watch\?v=|youtu\.be/)([A-Za-z0-9_-]{6,})",
        page_url,
    )
    if yt:
        vid = yt.group(1)
        return f"https://i.ytimg.com/vi/{vid}/maxresdefault.jpg"

    # 大きめの img をヒューリスティックに選ぶ
    candidates: List[Tuple[int, str]] = []
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or img.get("data-original")
        url = absolute_url(page_url, src)
        if not url:
            continue
        path = urlparse(url).path.lower()
        if any(x in path for x in ("logo", "icon", "sprite", "avatar", "1x1", "pixel")):
            continue
        w = int(img.get("width") or 0) if str(img.get("width") or "").isdigit() else 0
        h = int(img.get("height") or 0) if str(img.get("height") or "").isdigit() else 0
        score = w * h
        if score == 0:
            score = 1000 if any(x in path for x in ("hero", "main", "key", "visual", "poster")) else 100
        candidates.append((score, url))

    if candidates:
        candidates.sort(key=lambda x: x[0], reverse=True)
        return candidates[0][1]

    return None


def download_image(s: requests.Session, image_url: str, dest: Path) -> bool:
    """画像をダウンロードして dest(.jpg) に保存。"""
    # YouTube maxres が 404 の場合は hq にフォールバック
    urls = [image_url]
    if "maxresdefault.jpg" in image_url:
        urls.append(image_url.replace("maxresdefault.jpg", "hqdefault.jpg"))

    last_error: Optional[Exception] = None
    for url in urls:
        try:
            res = s.get(url, timeout=30, stream=True)
            if res.status_code == 404 and url != urls[-1]:
                continue
            res.raise_for_status()
            content_type = (res.headers.get("Content-Type") or "").lower()
            data = res.content
            if not data or len(data) < 1024:
                # 小さすぎる（プレースホルダ等）はスキップ
                if url != urls[-1]:
                    continue
                raise ValueError(f"image too small: {len(data)} bytes")

            # JPEG 以外でもファイル名は .jpg（実体はそのまま保存）
            # content-type チェックのみログ用途
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
            print(f"  saved: {dest.relative_to(ROOT)} ({len(data)} bytes, {content_type or 'unknown'})")
            return True
        except Exception as e:  # noqa: BLE001
            last_error = e
            continue

    print(f"  ERROR download failed: {last_error}")
    return False


def update_works_ts(title: str, public_path: str, dry_run: bool = False) -> bool:
    """
    works.ts 内で title が一致するエントリの thumbnail を置換。
    thumb(n) / "/works/..." の両方に対応。
    """
    text = WORKS_TS.read_text(encoding="utf-8")

    # title ブロック直後〜次のトップレベルキーまでの thumbnail を置換
    pattern = re.compile(
        rf'(title:\s*"{re.escape(title)}"[\s\S]*?thumbnail:\s*)'
        rf'(?:thumb\(\d+\)|"[^"]*")',
        re.MULTILINE,
    )
    replacement = rf'\1"{public_path}"'
    new_text, count = pattern.subn(replacement, text, count=1)

    if count == 0:
        print(f"  WARN: works.ts に title「{title}」が見つかりません")
        return False

    if dry_run:
        print(f"  dry-run: thumbnail → {public_path}")
        return True

    WORKS_TS.write_text(new_text, encoding="utf-8")
    print(f"  updated works.ts → thumbnail: \"{public_path}\"")
    return True


def parse_works_ts_pairs() -> List[Tuple[str, str]]:
    """works.ts から title + externalUrl の組を抽出。"""
    text = WORKS_TS.read_text(encoding="utf-8")
    pairs: List[Tuple[str, str]] = []
    # 各オブジェクトっぽい塊をざっくり探す
    for block in re.findall(r"\{[^{}]*title:\s*\"[^\"]+\"[^{}]*\}", text, re.DOTALL):
        title_m = re.search(r'title:\s*"([^"]+)"', block)
        url_m = re.search(r'(?:officialUrl|externalUrl):\s*"([^"]+)"', block)
        if title_m and url_m:
            pairs.append((title_m.group(1), url_m.group(1)))
    return pairs


def merge_lists(
    primary: Iterable[Tuple[str, str]],
    secondary: Iterable[Tuple[str, str]],
) -> List[Tuple[str, str]]:
    seen = set()
    out: List[Tuple[str, str]] = []
    for title, url in list(primary) + list(secondary):
        key = (title, url)
        if key in seen:
            continue
        seen.add(key)
        out.append((title, url))
    return out


def process_one(
    s: requests.Session,
    title: str,
    page_url: str,
    dry_run: bool,
) -> bool:
    print(f"\n[{title}]")
    print(f"  page: {page_url}")
    filename = sanitize_filename(title)
    dest = OUT_DIR / filename
    public_path = f"/works/{filename}"

    try:
        page = s.get(page_url, timeout=30)
        page.raise_for_status()
        # エンコーディング推定
        page.encoding = page.apparent_encoding or page.encoding or "utf-8"
        image_url = extract_image_url(page.text, page_url)
    except Exception as e:  # noqa: BLE001
        print(f"  ERROR fetch page: {e}")
        return False

    if not image_url:
        print("  ERROR: og:image / メイン画像が見つかりません")
        return False

    print(f"  image: {image_url}")

    if dry_run:
        print(f"  dry-run: would save → {dest.relative_to(ROOT)}")
        update_works_ts(title, public_path, dry_run=True)
        return True

    if not download_image(s, image_url, dest):
        return False

    return update_works_ts(title, public_path, dry_run=False)


def main() -> int:
    parser = argparse.ArgumentParser(description="公式OGP画像を取得して works.ts を更新")
    parser.add_argument(
        "--from-works-ts",
        action="store_true",
        help="works.ts の externalUrl からもタイトル/URLを追加取得",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="ダウンロード・ファイル更新を行わず結果のみ表示",
    )
    parser.add_argument(
        "--only",
        type=str,
        default="",
        help="タイトル部分一致で対象を絞る（カンマ区切り可）",
    )
    args = parser.parse_args()

    works = list(WORKS_LIST)
    if args.from_works_ts:
        works = merge_lists(works, parse_works_ts_pairs())

    if args.only:
        keys = [k.strip() for k in args.only.split(",") if k.strip()]
        works = [w for w in works if any(k in w[0] for k in keys)]

    if not works:
        print("対象作品がありません。WORKS_LIST か --from-works-ts を確認してください。")
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    s = session()

    ok = 0
    ng = 0
    for title, url in works:
        if process_one(s, title, url, dry_run=args.dry_run):
            ok += 1
        else:
            ng += 1

    print(f"\nDone. success={ok} failed={ng}")
    return 0 if ng == 0 else 2


if __name__ == "__main__":
    sys.exit(main())
