"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Bounce, Reveal } from "@/components/Motion";
import { MiniGrowthSpark } from "@/components/GrowthVisuals";
import {
  workCategories,
  works,
  type Work,
  type WorkCategory,
} from "@/data/works";
import { cn } from "@/lib/utils";

type Filter = (typeof workCategories)[number];

const fallbackGradients = [
  "from-rose via-pink to-purple",
  "from-cyan via-purple to-pink",
  "from-lime via-cyan to-purple",
  "from-yellow via-rose to-pink",
];

function WorkThumbnail({ work, index }: { work: Work; index: number }) {
  const src = work.thumbnail?.trim() || "";
  const [failed, setFailed] = useState(!src);
  const gradient = fallbackGradients[index % fallbackGradients.length];

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        work.aspect === "portrait" ? "aspect-[9/16]" : "aspect-video",
      )}
    >
      {!failed && src ? (
        <Image
          src={src}
          alt={work.title}
          fill
          sizes="400px"
          className="object-cover transition duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br p-6 text-center",
            gradient,
          )}
        >
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase">
            ALMONDBAGGER
          </p>
          <p className="mt-3 font-display text-lg font-bold leading-snug text-white drop-shadow md:text-xl">
            {work.title}
          </p>
          <p className="mt-2 text-xs font-bold text-white/75">{work.year}</p>
        </div>
      )}

      <span className="absolute left-3 top-3 max-w-[70%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-pink shadow">
        [{work.category}]
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-foreground/80 px-2.5 py-1 text-[11px] font-bold text-white">
        {work.year}
      </span>
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
      className="relative scroll-mt-24 overflow-hidden bg-soft py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-yellow/30 pop-blob" />
      <div className="mx-auto max-w-6xl section-pad">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="neon-badge bg-pink text-white">WORKS</span>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                制作実績
              </h2>
              <MiniGrowthSpark />
            </div>
            <p className="mt-3 max-w-xl text-muted">
              著作権保護のため、サイト上での動画再生は行いません。
              サムネイルと概要をご覧いただき、公式情報は外部リンクからご確認ください。
            </p>
          </Reveal>

          <Reveal direction="right" className="flex gap-2">
            <button
              type="button"
              aria-label="左へ"
              onClick={() => scrollRail(-1)}
              className="rounded-full bg-white p-3 shadow ring-1 ring-black/5"
            >
              <ChevronLeft className="h-5 w-5 text-pink" />
            </button>
            <button
              type="button"
              aria-label="右へ"
              onClick={() => scrollRail(1)}
              className="rounded-full bg-white p-3 shadow ring-1 ring-black/5"
            >
              <ChevronRight className="h-5 w-5 text-pink" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {workCategories.map((cat) => (
            <Bounce key={cat}>
              <button
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition",
                  filter === cat
                    ? "bg-gradient-to-r from-rose to-pink text-white shadow-md"
                    : "bg-white text-foreground/70 ring-1 ring-black/5 hover:text-pink",
                )}
              >
                {cat}
              </button>
            </Bounce>
          ))}
        </Reveal>

        <div
          ref={railRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.length === 0 ? (
            <div className="flex w-full items-center justify-center rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-black/5">
              <div>
                <p className="font-display text-lg font-bold text-foreground">
                  このカテゴリの公開実績は準備中です
                </p>
                <p className="mt-2 text-sm text-muted">
                  WebCM・MV 等も含め、随時アップデートします。ご相談は Contact へ。
                </p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filtered.map((work, i) => {
                const officialUrl = work.officialUrl?.trim();
                return (
                  <motion.article
                    layout
                    key={work.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: Math.min(i, 8) * 0.04 }}
                    whileHover={{ scale: 1.03, rotate: 0.6 }}
                    className={cn(
                      "group flex shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_rgba(31,18,53,0.1)] ring-1 ring-black/5",
                      work.aspect === "portrait"
                        ? "w-[260px] md:w-[280px]"
                        : "w-[320px] md:w-[380px]",
                    )}
                  >
                    <WorkThumbnail work={work} index={i} />

                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                        {work.title}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-cyan">
                        Client · {work.client}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                        {work.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {work.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full bg-soft px-2.5 py-1 text-[11px] font-bold text-purple ring-1 ring-purple/15"
                          >
                            [{role}]
                          </span>
                        ))}
                      </div>

                      {officialUrl ? (
                        <a
                          href={officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose to-pink px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:brightness-105"
                        >
                          公式サイト / 公式動画を見る
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <p className="mt-4 rounded-full bg-soft px-4 py-2.5 text-center text-xs font-bold text-muted">
                          公式公開情報は準備中です
                        </p>
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
