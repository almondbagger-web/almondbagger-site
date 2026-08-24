"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
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

const WATERMAN_YOUTUBE = "https://youtu.be/7wWeWsUuzdI";

const credits = [
  { label: "Artist", value: "AKBB（A.I. Kuchipaku Band Brothers）" },
  { label: "Vocal", value: "TOSHI" },
  { label: "Rap", value: "WaterMan (feat.)" },
  { label: "Guitar", value: "KURO" },
  { label: "Written & Composed by", value: "YUDAI" },
] as const;

const roleTags = [
  "制作部 / 現場統括",
  "ロケーション支援",
  "実写 ✕ AI映像制作協力",
] as const;

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

function FeaturedWaterman() {
  return (
    <Reveal direction="left" className="mb-12">
      <article className="prism-frame relative overflow-hidden p-1.5 md:p-2">
        <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-lime/25 blur-3xl" />

        <div className="relative grid gap-0 overflow-hidden rounded-[1.05rem] bg-white/90 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative aspect-square overflow-hidden border-b border-border/60 lg:aspect-auto lg:min-h-[520px] lg:border-b-0 lg:border-r">
            <Image
              src="/mv-waterman.jpg"
              alt="AKBB feat. Waterman『WATERMAN』メインビジュアル"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="tag-chip tag-chip--red font-extrabold">
                FEATURED PROJECT
              </span>
              <span className="tag-chip tag-chip--lime font-extrabold">
                NEW RELEASE
              </span>
            </div>
            <a
              href={WATERMAN_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold text-brand shadow-lg backdrop-blur-sm transition hover:scale-[1.03]"
            >
              <Play className="h-3.5 w-3.5 fill-brand" />
              本編を再生
            </a>
          </div>

          <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <p className="eyebrow">FEATURED PROJECT · 最新注目作品</p>
            <h3 className="mt-3 font-display text-2xl font-black tracking-tight md:text-3xl">
              『WATERMAN』
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted md:text-base">
              AKBB feat. Waterman
            </p>

            <p className="mt-5 text-sm font-bold leading-relaxed text-foreground md:text-base">
              AI ✖️ 口パク ✖️
              エアーギターの最新型ロックバンド🔥
              本気で目指すぜ武道館...いやMSG🇺🇸
            </p>

            <dl className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {credits.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/70 bg-white/70 px-3 py-2.5"
                >
                  <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
                担当領域
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {roleTags.map((tag) => (
                  <span key={tag} className="tag-chip tag-chip--red">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              夢を諦めないオジさんたちの熱い挑戦を見届けてくれ！現場の熱気と最先端AI・エアーパフォーマンスを融合したシネマティックな話題作。ロケーション手配から現場進行までワンストップで制作協力いたしました。
            </p>

            <div className="mt-7">
              <Bounce>
                <a
                  href={WATERMAN_YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-release text-sm md:text-base"
                >
                  YouTubeで本編MVを視聴する
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Bounce>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<Filter>("すべて");
  const railRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const list =
      filter === "すべて"
        ? works
        : works.filter((w) => w.category === (filter as WorkCategory));
    // Featured WATERMAN is shown above; keep it out of the rail to avoid double emphasis
    return list.filter((w) => w.id !== "w-waterman");
  }, [filter]);

  const scrollRail = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="works"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-transparent section-y"
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
              最新注目作品から、シネマスコープ比率の制作実績をご覧ください。
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

        <div className="mt-10">
          <FeaturedWaterman />
        </div>

        <Reveal delay={0.08} direction="left" className="mt-2 flex flex-wrap gap-2">
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
                    transition={{
                      delay: Math.min(i, 6) * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
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
                        <p className="mt-4 text-center text-xs text-muted">
                          準備中
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
