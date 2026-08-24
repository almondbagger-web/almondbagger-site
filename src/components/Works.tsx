"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
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

const WATERMAN_TIKTOK = "https://vt.tiktok.com/ZSVx84VPA/";

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

const posterGradients = [
  "from-[#1e1b4b] via-[#7f1d1d] to-[#0f172a]",
  "from-[#0c4a6e] via-[#831843] to-[#1e1b4b]",
  "from-[#14532d] via-[#7c2d12] to-[#0f172a]",
  "from-[#312e81] via-[#be123c] to-[#164e63]",
  "from-[#422006] via-[#9f1239] to-[#1e293b]",
  "from-[#1e3a5f] via-[#6b21a8] to-[#0f172a]",
] as const;

function workInitials(title: string) {
  const cleaned = title.replace(/[『』「」！!・\s]/g, "");
  if (!cleaned) return "AB";
  return cleaned.slice(0, 2);
}

function WorkPoster({ work, index }: { work: Work; index: number }) {
  const src = work.thumbnail?.trim() || "";
  const [failed, setFailed] = useState(!src);
  const gradient = posterGradients[index % posterGradients.length];
  const initials = workInitials(work.title);

  return (
    <div className="group relative aspect-[2.35/1] overflow-hidden bg-slate-900">
      <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
        {!failed && src ? (
          <Image
            src={src}
            alt={work.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={cn(
              "film-poster-frame absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br p-6 text-center",
              gradient,
            )}
          >
            <span className="font-cinema text-5xl tracking-widest text-white/90 drop-shadow-lg md:text-6xl">
              {initials}
            </span>
            <p className="mt-3 max-w-[90%] font-hero-ja text-sm font-black leading-snug text-white/95 md:text-base">
              {work.title}
            </p>
            <p className="mt-2 text-[0.65rem] font-bold tracking-[0.2em] text-white/55">
              FILM POSTER FRAME
            </p>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <span className="absolute left-3 top-3 z-[2] rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-wide text-slate-900 shadow-sm">
        {work.category}
      </span>
      <span className="absolute right-3 top-3 z-[2] rounded-full bg-black/55 px-2.5 py-1 text-[0.65rem] font-bold text-white backdrop-blur-sm">
        {work.year}
      </span>
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
              href={WATERMAN_TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold text-brand shadow-lg backdrop-blur-sm transition hover:scale-[1.03]"
            >
              <Play className="h-3.5 w-3.5 fill-brand" />
              TikTokで観る
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
                  href={WATERMAN_TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-release text-sm md:text-base"
                >
                  TikTokでMV・動画をチェック
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

  const filtered = useMemo(() => {
    const list =
      filter === "すべて"
        ? works
        : works.filter((w) => w.category === (filter as WorkCategory));
    return list.filter((w) => w.id !== "w-waterman");
  }, [filter]);

  return (
    <section
      id="works"
      className="relative scroll-mt-44 md:scroll-mt-48 overflow-hidden bg-transparent section-y"
    >
      <AuroraLayer className="opacity-35" />
      <GeometricGridLayer className="opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">Cinema</span>
            <span className="tag-chip tag-chip--cyan">Drama</span>
            <span className="tag-chip tag-chip--purple">Streaming</span>
          </div>
          <p className="eyebrow mt-5">制作実績</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
              <span className="mesh-text">Works</span>
            </h2>
            <MiniGrowthSpark />
          </div>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Netflix・劇場映画・地上波ドラマなど、超大作・話題作の制作部実績をシネマティックカードでご覧ください。
          </p>
        </Reveal>

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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <div className="lux-card col-span-full flex items-center justify-center px-6 py-16 text-center">
                <p className="text-muted">このカテゴリの公開実績は準備中です</p>
              </div>
            ) : (
              filtered.map((work, i) => (
                <motion.article
                  layout
                  key={work.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.min(i, 8) * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="lux-card card-lift group flex h-full flex-col overflow-hidden"
                >
                  <WorkPoster work={work} index={i} />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-hero-ja text-base font-black leading-snug tracking-tight md:text-lg">
                      {work.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-muted">
                      {work.client}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand/15 bg-brand/5 px-2.5 py-1 text-[0.65rem] font-bold text-brand"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {work.description}
                    </p>
                    {work.officialUrl ? (
                      <a
                        href={work.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-5 !px-4 !py-2.5 text-xs"
                      >
                        公式サイト / 配信ページを見る
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
