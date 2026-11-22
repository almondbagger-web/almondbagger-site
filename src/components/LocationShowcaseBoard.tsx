"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import {
  AREA_REGIONS,
  LOCATION_CATEGORIES,
  type PublicLocationListing,
} from "@/lib/location-board/types";
import { cn } from "@/lib/utils";

type AreaFilter = "すべて" | (typeof AREA_REGIONS)[number];
type CategoryFilter = "すべて" | (typeof LOCATION_CATEGORIES)[number];

export default function LocationShowcaseBoard() {
  const [listings, setListings] = useState<PublicLocationListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [area, setArea] = useState<AreaFilter>("すべて");
  const [category, setCategory] = useState<CategoryFilter>("すべて");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/location-board", { cache: "no-store" });
        const data = (await res.json()) as {
          listings?: PublicLocationListing[];
        };
        if (!cancelled) setListings(data.listings ?? []);
      } catch {
        if (!cancelled) setListings([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (area !== "すべて" && l.areaRegion !== area) return false;
      if (category !== "すべて" && l.category !== category) return false;
      return true;
    });
  }, [listings, area, category]);

  return (
    <section
      id="location-showcase"
      aria-labelledby="location-showcase-heading"
      className="relative scroll-mt-24 bg-background/85 section-y md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="LOCATION SHOWCASE"
          japanese="提携ロケ地ギャラリー"
          id="location-showcase-heading"
          tone="gold"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          承認済みの提携物件のみを掲載しています。公開カードには管理ID・エリア（番地非公開）・カテゴリー・アピール文・写真のみ表示。オーナー様の本名・店舗名・連絡先は一切公開しません。
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="エリア絞り込み">
            {(["すべて", ...AREA_REGIONS] as AreaFilter[]).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setArea(opt)}
                className={cn(
                  "border px-3 py-1.5 text-[0.72rem] font-medium tracking-wide transition-colors",
                  area === opt
                    ? "border-gold bg-gold/10 text-gold-deep"
                    : "border-slate-300/70 text-muted hover:border-gold/50 hover:text-foreground",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="カテゴリー絞り込み"
          >
            {(["すべて", ...LOCATION_CATEGORIES] as CategoryFilter[]).map(
              (opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCategory(opt)}
                  className={cn(
                    "border px-3 py-1.5 text-[0.72rem] font-medium tracking-wide transition-colors",
                    category === opt
                      ? "border-[#C68B83] bg-[#C68B83]/10 text-[#8f5f58]"
                      : "border-slate-300/70 text-muted hover:border-[#C68B83]/50 hover:text-foreground",
                  )}
                >
                  {opt}
                </button>
              ),
            )}
          </div>
        </div>

        {loading ? (
          <p className="mt-12 text-sm text-muted">読み込み中…</p>
        ) : filtered.length === 0 ? (
          <p className="mt-12 text-sm text-muted">
            該当する公開物件がありません。条件を変更するか、投稿フォームからご応募ください。
          </p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {filtered.map((item) => (
              <article
                key={item.managementId}
                className="gold-frame overflow-hidden transition-shadow hover:shadow-[0_16px_40px_rgba(18,21,28,0.06)]"
              >
                <div className="relative aspect-[3/2] bg-surface">
                  {item.photos[0] ? (
                    <Image
                      src={item.photos[0]}
                      alt={`${item.managementId} の写真`}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                      unoptimized={
                        item.photos[0].endsWith(".svg") ||
                        item.photos[0].startsWith("/api/")
                      }
                    />
                  ) : null}
                  {item.isSample ? (
                    <span className="absolute left-3 top-3 border border-gold/60 bg-white/90 px-2 py-1 font-mono text-[0.6rem] font-bold tracking-[0.12em] text-gold-deep backdrop-blur-sm">
                      SAMPLE
                    </span>
                  ) : null}
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[0.68rem] font-bold tracking-[0.12em] text-gold">
                      {item.managementId}
                    </span>
                    <span className="border border-slate-300/70 px-2 py-0.5 text-[0.65rem] text-muted">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    {item.areaLabel}
                    <span className="ml-2 text-xs font-normal text-muted">
                      （{item.areaRegion}）
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.appealText}
                  </p>
                  <a
                    href={`#location-inquiry?loc=${encodeURIComponent(item.managementId)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("location-inquiry");
                      el?.scrollIntoView({ behavior: "smooth" });
                      window.dispatchEvent(
                        new CustomEvent("location-inquiry-id", {
                          detail: item.managementId,
                        }),
                      );
                    }}
                    className="btn-dark mt-6 inline-flex text-[0.75rem]"
                  >
                    このロケ地について撮影相談する
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
