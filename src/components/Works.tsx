"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  getWorksSorted,
  workCategories,
  type Work,
  type WorkCategory,
} from "@/data/works";
import { cn } from "@/lib/utils";

type Filter = "すべて" | WorkCategory;

const allWorks = getWorksSorted();

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
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.03 }}
      className="cinema-card overflow-hidden bg-ink"
    >
      <div
        className={cn(
          "cinema-preview hud-frame",
          isPortrait
            ? "cinema-preview--portrait my-5"
            : "cinema-preview--landscape",
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
          <span className="hud-meta">{work.year}</span>
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
          <div className="cinema-preview-media absolute inset-0 flex items-end bg-gradient-to-br from-[#0b0c0e] via-[#16181e] to-[#2c2618] p-5">
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-gold/80">
                {work.category}
              </p>
              <span className="mt-1 block font-serif text-lg tracking-wide text-white/92">
                {work.title}
              </span>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col border-t border-white/10 bg-[#0b0c0e] p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] tracking-[0.08em] text-white/45">
          <span>{work.periodLabel}</span>
          <span className="text-white/20">/</span>
          <span>{work.client}</span>
        </div>
        <h3 className="mt-2.5 font-serif text-lg font-medium tracking-wide text-white md:text-xl">
          {work.title}
        </h3>
        <p className="mt-2 text-[0.78rem] font-medium tracking-wide text-gold">
          {work.roleCredit}
        </p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/55">
          {work.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-white/12 px-2 py-1 text-[0.65rem] tracking-wide text-white/50"
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
            className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-white/85 transition-colors hover:text-gold"
            aria-label={`${work.title} の公式情報を見る`}
          >
            公式情報を見る
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<Filter>("すべて");

  const filtered = useMemo(() => {
    if (filter === "すべて") return allWorks;
    return allWorks.filter((w) => w.category === filter);
  }, [filter]);

  const years = useMemo(() => {
    const set = new Set(filtered.map((w) => w.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [filtered]);

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative scroll-mt-24 overflow-hidden bg-ink text-white section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-70" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              WORKS / PORTFOLIO
            </p>
            <h2
              id="works-heading"
              className="mt-4 font-serif text-2xl font-medium tracking-wide md:text-3xl lg:text-4xl"
            >
              制作実績
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
              2026年〜2020年。劇場公開・配信・地上波・自社IPまで、公開・配信の新しい順で掲載しています。
            </p>
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-white/40">
            {filtered.length.toString().padStart(2, "0")} TITLES
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="制作実績カテゴリー"
        >
          {workCategories.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={filter === tab}
              className={cn(
                "border px-3.5 py-2 text-[0.75rem] font-medium tracking-wide transition-colors",
                filter === tab
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-white/15 text-white/55 hover:border-white/35 hover:text-white",
              )}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {years.map((year) => {
            const yearWorks = filtered.filter((w) => w.year === year);
            if (!yearWorks.length) return null;
            return (
              <div key={year}>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-serif text-xl tracking-wide text-gold md:text-2xl">
                    {year}
                  </h3>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <motion.div
                  layout
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <AnimatePresence mode="popLayout">
                    {yearWorks.map((work, index) => (
                      <WorkCard key={work.id} work={work} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
