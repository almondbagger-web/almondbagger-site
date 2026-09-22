import type { Metadata } from "next";
import { companyInfo } from "@/data/works";
import PrintBar from "./PrintBar";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "弓田 悠太 PORTFOLIO & PRODUCTION WORKS",
  description:
    "映画・ドラマ現場統括20年の実績 × 先端AIクリエイティブ・自社IPプロデュース。弓田悠太（株式会社ALMONDBAGGER）のプロフェッショナル・ポートフォリオ。",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.almondbagger.com/portfolio" },
};

const filmWorks = [
  {
    year: "2026.05",
    title: "ソウルメイト",
    meta: "Netflix ／ 制作部・クラフト",
  },
  {
    year: "2025",
    title: "ラブ≠コメディ",
    meta: "劇場公開映画 / Storm Labels ／ 制作部現場統括",
  },
  {
    year: "2025",
    title: "BLドラマに女はいらない",
    meta: "FODショートドラマ ／ 制作部",
  },
  {
    year: "2025",
    title: "ジキ／ハイ～愛した男には別の顔があった～",
    meta: "FODショートドラマ ／ 制作部",
  },
  {
    year: "2024",
    title: "地面師たち",
    meta: "Netflixシリーズ ／ 制作部・ロケ支援",
  },
  {
    year: "2024",
    title: "厨房のありす",
    meta: "日本テレビ系日曜ドラマ ／ 制作部",
  },
  {
    year: "2023",
    title: "THE MYSTERY DAY",
    meta: "日本テレビ開局70年特番 ／ 制作部現場統括",
  },
  {
    year: "2023",
    title: "御手洗家、炎上する",
    meta: "Netflixシリーズ ／ 制作部バックオフィス",
  },
  {
    year: "2023",
    title: "往生際の意味を知れ！",
    meta: "MBS/TBSドラマイズム ／ 制作部ロケーション",
  },
  {
    year: "2023",
    title: "憧れの作家は人間じゃありませんでした",
    meta: "配信ドラマ ／ 制作部",
  },
  {
    year: "2022",
    title: "四角の人たち",
    meta: "短編映画 ／ 制作部ロケ協力",
  },
  {
    year: "2022",
    title: "そばかす",
    meta: "劇場公開映画 ／ 制作部ロケ支援",
  },
  {
    year: "2022",
    title: "ロマンティック・キラー",
    meta: "Netflix ／ 制作部",
  },
  {
    year: "2021",
    title: "かばん屋の相続",
    meta: "WOWOW 連続ドラマW ／ 制作部",
  },
  {
    year: "2021",
    title: "東京リベンジャーズ",
    meta: "劇場公開映画 ／ 制作部ロケ統括",
  },
  {
    year: "2021",
    title: "それでも愛を誓いますか？",
    meta: "ABC・テレビ朝日 ／ 制作部",
  },
  {
    year: "2020",
    title: "誰かが、見ている",
    meta: "Amazon Original ／ 制作部",
  },
] as const;

const expertise = [
  {
    num: "01",
    title: "現場統括・香盤編成（Line Management）",
    body: "撮影スケジュールの最適化、スタッフ・キャストの安全管理、トラブルゼロの運行管理。",
  },
  {
    num: "02",
    title: "ロケーション支援・許認可（Location & Permits）",
    body: "八王子フィルムコミッション公認連携。警察・道路使用・自治体・施設との強固な信頼関係によるスムーズな撮影申請。",
  },
  {
    num: "03",
    title: "予算・契約・バックオフィス（Budget & Legal）",
    body: "製作費の適正配分、出演・ロケ契約、権利処理、クラフト（ケータリング）体制の統括。",
  },
  {
    num: "04",
    title: "次世代AIパイプライン（AI Creative & Previs）",
    body: "現場のワークフローに即したAI Previs（動くコンテ）およびロケバレ消しAI VFXの実装。",
  },
] as const;

function SlideFooter({ page, total = 4 }: { page: number; total?: number }) {
  return (
    <footer className="pf-footer">
      <p className="pf-footer__brand">ALMONDBAGGER · YUTA YUMITA</p>
      <p className="pf-footer__page">
        {page} / {total}
      </p>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="portfolio-root">
      <PrintBar />

      <div className="portfolio-deck">
        {/* PAGE 1 — COVER */}
        <section className="portfolio-slide" aria-label="表紙">
          <div className="portfolio-slide__accent" aria-hidden />
          <div className="portfolio-slide__mark" aria-hidden>
            YY
          </div>
          <div className="portfolio-slide__inner">
            <p className="pf-kicker">EXECUTIVE PORTFOLIO</p>
            <h1 className="pf-title pf-title--hero">
              YUTA YUMITA
              <br />
              PORTFOLIO &amp; PRODUCTION WORKS
            </h1>
            <div className="pf-rule" />
            <p className="pf-subtitle">
              映画・ドラマ現場統括 20年の実績 × 先端AIクリエイティブ・自社IPプロデュース
            </p>
            <p className="pf-roles">
              代表取締役 / プロデューサー / 制作担当：{companyInfo.representative}
              <br />
              {companyInfo.name}（東京都八王子市）
            </p>

            <div className="pf-concept">
              <p>
                「20年培った堅牢な現場統括力と、業界の未来を切り拓くAIパイプラインの融合」
              </p>
            </div>

            <div className="pf-contact">
              <div className="pf-contact__item">
                <p className="pf-contact__label">Email</p>
                <p className="pf-contact__value">{companyInfo.email}</p>
              </div>
              <div className="pf-contact__item">
                <p className="pf-contact__label">Website</p>
                <p className="pf-contact__value">https://www.almondbagger.com</p>
              </div>
              <div className="pf-contact__item">
                <p className="pf-contact__label">Base</p>
                <p className="pf-contact__value">東京都八王子市</p>
              </div>
            </div>

            <SlideFooter page={1} />
          </div>
        </section>

        {/* PAGE 2 — PROFILE & EXPERTISE */}
        <section className="portfolio-slide" aria-label="プロフィールとスキル">
          <div className="portfolio-slide__accent" aria-hidden />
          <div className="portfolio-slide__inner">
            <p className="pf-kicker">PROFILE &amp; EXPERTISE</p>
            <h2 className="pf-title">弓田悠太 プロフィール ＆ 制作部コアスキル</h2>
            <div className="pf-rule" />
            <p className="pf-subtitle" style={{ fontSize: "11pt", fontWeight: 700 }}>
              商業映画、地上波プライム帯ドラマ、配信プラットフォーム超大作の制作部として20年以上の現場統括実績。
            </p>

            <div className="pf-grid-4">
              {expertise.map((item) => (
                <article key={item.num} className="pf-card">
                  <span className="pf-card__num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <SlideFooter page={2} />
          </div>
        </section>

        {/* PAGE 3 — FILM & DRAMA WORKS */}
        <section className="portfolio-slide" aria-label="商業作品 主要実績">
          <div className="portfolio-slide__accent" aria-hidden />
          <div className="portfolio-slide__inner">
            <p className="pf-kicker">FILM &amp; DRAMA WORKS</p>
            <h2 className="pf-title">商業作品 主要実績</h2>
            <div className="pf-rule" />
            <p className="pf-muted">
              これまで統括・参加した主要作品を年代順・プラットフォーム別に掲載
            </p>

            <div className="pf-works">
              {filmWorks.map((work) => (
                <article key={work.title} className="pf-work">
                  <p className="pf-work__year">{work.year}</p>
                  <div>
                    <h3 className="pf-work__title">{work.title}</h3>
                    <p className="pf-work__meta">{work.meta}</p>
                  </div>
                </article>
              ))}
            </div>

            <SlideFooter page={3} />
          </div>
        </section>

        {/* PAGE 4 — ORIGINAL IP & CREATIVE */}
        <section className="portfolio-slide" aria-label="自社オリジナルIPとクリエイティブ">
          <div className="portfolio-slide__accent" aria-hidden />
          <div className="portfolio-slide__inner">
            <p className="pf-kicker">ORIGINAL IP &amp; CREATIVE</p>
            <h2 className="pf-title">自社オリジナルIP ＆ 音楽・AIクリエイティブ</h2>
            <div className="pf-rule" />

            <div className="pf-ip-hero">
              <article className="pf-card">
                <span className="pf-badge">FLAGSHIP IP</span>
                <h3 style={{ marginTop: "2.5mm" }}>
                  オリジナルアニメMV『いいねの大盤振る舞い』
                </h3>
                <p>
                  Credit: 企画・作詞・作曲・アニメーション制作：YUMITA
                </p>
                <p>
                  「昔は槍で領地を奪取、今は親指で通知を連打ッシュ」。戦国侍が現代のSNS社会に切り込む自社最大IP。近日ストリーミング解禁。
                </p>
              </article>

              <article className="pf-card">
                <span className="pf-badge">PRODUCED / SUPPORT</span>
                <h3 style={{ marginTop: "2.5mm" }}>制作協力・プロデュースMV</h3>
                <div className="pf-ip-list">
                  <div>
                    <p style={{ margin: 0, fontWeight: 900, color: "#0f172a", fontSize: "9.5pt" }}>
                      AKBB『aiを持て』
                    </p>
                    <p style={{ margin: "1mm 0 0" }}>
                      「AIの時代だからこそ愛（AI）を持って走る」。中華ダンスロック×クラブEDMアンセム。
                    </p>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 900, color: "#0f172a", fontSize: "9.5pt" }}>
                      AKBB feat. Waterman『WATERMAN』
                    </p>
                    <p style={{ margin: "1mm 0 0" }}>
                      AI×口パク×エアーギターの最新型ロックバンド。
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="pf-policy">
              <h3>クリエイティブ方針</h3>
              <p>
                「現場の泥臭い実写制作力」と「最先端の生成AI表現」を融合し、唯一無二のエンターテインメントを生み出す。
              </p>
            </div>

            <SlideFooter page={4} />
          </div>
        </section>
      </div>
    </div>
  );
}
