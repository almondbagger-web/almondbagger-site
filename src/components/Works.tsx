"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  portfolioFilters,
  portfolioWorkIds,
  type PortfolioFilter,
  type Work,
  works,
} from "@/data/works";
import { cn } from "@/lib/utils";

const portfolioWorks = portfolioWorkIds
  .map((id) => works.find((w) => w.id === id))
  .filter((w): w is Work => Boolean(w));

function aspectLabel(aspect: Work["aspect"]) {
  return aspect === "portrait" ? "9:16 SOCIAL" : "2.39:1 CINEMA";
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  const isPortrait = work.aspect === "portrait";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={cn("cinema-card", isPortrait && "sm:row-span-1")}
    >
      <div
        className={cn(
          "cinema-preview hud-frame",
          isPortrait ? "cinema-preview--portrait my-4" : "cinema-preview--landscape",
        )}
      >
        <div className="hud-corners absolute inset-0" aria-hidden>
          <span className="tl" />
          <span className="tr" />
          <span className="bl" />
          <span className="br" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 py-2">
          <span className="hud-meta">{aspectLabel(work.aspect)}</span>
          <span className="hud-meta">TC {String(work.year).slice(2)}:00:00:00</span>
        </div>

        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={`${work.title} プレビュー`}
            fill
            sizes={
              isPortrait
                ? "(max-width:640px) 60vw, 220px"
                : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            }
            className="cinema-preview-media object-cover"
          />
        ) : (
          <div className="cinema-preview-media absolute inset-0 flex items-end bg-gradient-to-br from-[#12141a] via-[#1c1f28] to-[#3a3224] p-5">
            <span className="font-serif text-lg tracking-wide text-white/90">
              {work.title}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] tracking-[0.08em] text-muted">
          <span>{work.year}</span>
          <span className="text-border">/</span>
          <span>{work.client}</span>
        </div>
        <h3 className="mt-2.5 font-serif text-lg font-medium tracking-wide text-foreground md:text-xl">
          {work.title}
        </h3>
        {work.roleCredit ? (
          <p className="mt-2 text-[0.78rem] font-medium tracking-wide text-gold-deep">
            {work.roleCredit}
          </p>
        ) : null}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {work.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-border px-2 py-1 text-[0.65rem] tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {work.officialUrl ? (
          <a
            href={work.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-foreground transition-colors hover:text-gold-deep"
            aria-label={`${work.title} の詳細を見る`}
          >
            詳細を見る
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<PortfolioFilter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return portfolioWorks;
    return portfolioWorks.filter((w) => w.filters?.includes(filter));
  }, [filter]);

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative scroll-mt-24 overflow-hidden bg-background section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              WORKS / PORTFOLIO
            </p>
            <h2
              id="works-heading"
              className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
            >
              制作実績
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              Netflix映画から劇場公開・配信ドラマ、自社AIアニメMV、SNS展開まで。シネマとソーシャル両輪のポートフォリオです。
            </p>
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted">
            FILTER · {filtered.length.toString().padStart(2, "0")} CLIPS
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="制作実績カテゴリー"
        >
          {portfolioFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              className="filter-tab"
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((work, index) => (
              <WorkCard key={work.id} work={work} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
