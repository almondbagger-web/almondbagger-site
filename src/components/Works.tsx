"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Bounce, Reveal } from "@/components/Motion";
import {
  AuroraLayer,
  GeometricGridLayer,
  MiniGrowthSpark,
} from "@/components/VelocityVisuals";
import {
  workCategories,
  works,
  type Work,
  type WorkCategory,
} from "@/data/works";
import { cn } from "@/lib/utils";

type Filter = (typeof workCategories)[number];

const fallbackGradients = [
  "from-lime/30 via-cyan/30 to-violet/30",
  "from-pink/30 via-violet/30 to-cyan/30",
  "from-cyan/30 via-lime/30 to-pink/30",
];

function WorkThumbnail({ work, index }: { work: Work; index: number }) {
  const src = work.thumbnail?.trim() || "";
  const [failed, setFailed] = useState(!src);
  const gradient = fallbackGradients[index % fallbackGradients.length];

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-opal",
        work.aspect === "portrait" ? "aspect-[9/16]" : "aspect-[2.35/1]",
      )}
    >
      <div className="absolute inset-0 transition duration-700 group-hover:scale-110 group-hover:blur-[1px]">
        {!failed && src ? (
          <Image
            src={src}
            alt={work.title}
            fill
            sizes="400px"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br p-6 text-center",
              gradient,
            )}
          >
            <p className="eyebrow">ALMONDBAGGER</p>
            <p className="mt-3 font-display text-lg font-bold leading-snug normal-case tracking-normal">
              {work.title}
            </p>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-80 transition group-hover:opacity-40" />
      <span className="absolute left-3 top-3 z-[2] lux-badge">{work.category}</span>
      <span className="absolute right-3 top-3 z-[2] lux-badge">{work.year}</span>
    </div>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<Filter>("すべて");
  const railRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (filter === "すべて") return works;
    return works.filter((w) => w.category === (filter as WorkCategory));
  }, [filter]);

  const scrollRail = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="works"
      className="relative scroll-mt-24 overflow-hidden bg-transparent section-y"
    >
      <AuroraLayer className="opacity-35" />
      <GeometricGridLayer className="opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal direction="left">
            <div className="flex flex-wrap gap-2">
              <span className="tag-chip tag-chip--red">Cinema</span>
              <span className="tag-chip tag-chip--cyan">SNS</span>
              <span className="tag-chip tag-chip--purple">AI</span>
            </div>
            <p className="eyebrow mt-5">制作実績</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                <span className="mesh-text">Works</span>
              </h2>
              <MiniGrowthSpark />
            </div>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              シネマスコープ比率のフレームで、制作実績をご覧ください。
            </p>
          </Reveal>

          <Reveal direction="right" className="flex gap-2">
            <button
              type="button"
              aria-label="左へ"
              onClick={() => scrollRail(-1)}
                className="rounded-full lux-glass p-3 transition hover:border-brand/30 hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="右へ"
              onClick={() => scrollRail(1)}
                className="rounded-full lux-glass p-3 transition hover:border-brand/30 hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.08} direction="left" className="mt-8 flex flex-wrap gap-2">
          {workCategories.map((cat, i) => {
            const tones = [
              "tag-chip--red",
              "tag-chip--cyan",
              "tag-chip--purple",
              "tag-chip--lime",
              "tag-chip--pink",
              "tag-chip--yellow",
            ] as const;
            const tone = tones[i % tones.length];
            return (
              <Bounce key={cat}>
                <button
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-bold tracking-wider transition",
                    filter === cat
                      ? "btn-primary !rounded-full !px-4 !py-2 !text-xs"
                      : cn("tag-chip", tone),
                  )}
                >
                  {cat}
                </button>
              </Bounce>
            );
          })}
        </Reveal>

        <div
          ref={railRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.length === 0 ? (
            <div className="lux-card flex w-full items-center justify-center px-6 py-16 text-center">
              <p className="text-muted">このカテゴリの公開実績は準備中です</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filtered.map((work, i) => {
                const officialUrl = work.officialUrl?.trim();
                return (
                  <motion.article
                    layout
                    key={work.id}
                    initial={{ opacity: 0, x: 48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i, 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "lux-card card-lift group flex shrink-0 snap-start flex-col overflow-hidden",
                      work.aspect === "portrait"
                        ? "w-[260px] md:w-[280px]"
                        : "w-[340px] md:w-[420px]",
                    )}
                  >
                    <WorkThumbnail work={work} index={i} />
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-sm font-bold tracking-wide normal-case">
                        {work.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">{work.client}</p>
                      <p className="mt-3 line-clamp-2 text-sm text-muted">
                        {work.description}
                      </p>
                      {officialUrl ? (
                        <a
                          href={officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary mt-4 !px-4 !py-2 text-xs"
                        >
                          Official
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <p className="mt-4 text-center text-xs text-muted">準備中</p>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
