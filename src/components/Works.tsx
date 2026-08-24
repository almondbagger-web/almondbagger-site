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

const featuredRoleTags = [
  "制作部 / 現場統括",
  "ロケーション支援",
  "実写 ✕ AI映像制作協力",
] as const;

/** 作品固有のシネマティック・ビジュアル（著作権フリーの純デザイン） */
type CinemaTheme = {
  gradient: string;
  accent: string;
  platform: string;
  timecode: string;
  english?: string;
};

const CINEMA_THEMES: Record<string, CinemaTheme> = {
  "w-luvntcom": {
    gradient: "cinema-grad--luvntcom",
    accent: "#f43f5e",
    platform: "Storm Labels",
    timecode: "TC 01:02:18:07",
    english: "LOVE ≠ COMEDY",
  },
  "w-bl-drama": {
    gradient: "cinema-grad--fod-bl",
    accent: "#a78bfa",
    platform: "FOD SHORT",
    timecode: "TC 00:00:45:12",
    english: "NO GIRLS IN BL",
  },
  "w-jikihai": {
    gradient: "cinema-grad--fod-jiki",
    accent: "#f472b6",
    platform: "FOD SHORT",
    timecode: "TC 00:00:38:04",
    english: "JIKI / HAI",
  },
  "w-jimenshi": {
    gradient: "cinema-grad--jimenshi",
    accent: "#c9a227",
    platform: "Netflix",
    timecode: "TC 01:14:27:08",
    english: "THE LAND SWINDLERS",
  },
  "w-tokrev": {
    gradient: "cinema-grad--tokrev",
    accent: "#ef4444",
    platform: "Warner Bros.",
    timecode: "TC 00:42:11:03",
    english: "TOKYO REVENGERS",
  },
  "w-mitarai": {
    gradient: "cinema-grad--mitarai",
    accent: "#e11d48",
    platform: "Netflix",
    timecode: "TC 00:58:03:19",
    english: "BURN THE HOUSE DOWN",
  },
  "w-alice": {
    gradient: "cinema-grad--alice",
    accent: "#f97316",
    platform: "日テレ",
    timecode: "TC 00:21:44:12",
    english: "ALICE IN WONDER KITCHEN",
  },
  "w-mysteryday": {
    gradient: "cinema-grad--mystery",
    accent: "#38bdf8",
    platform: "日テレ",
    timecode: "TC 02:03:55:01",
    english: "THE MYSTERY DAY",
  },
  "w-kabanya": {
    gradient: "cinema-grad--kabanya",
    accent: "#a78bfa",
    platform: "WOWOW",
    timecode: "TC 01:07:18:22",
    english: "THE BAG SHOP HEIR",
  },
  "w-dareka": {
    gradient: "cinema-grad--dareka",
    accent: "#22d3ee",
    platform: "Amazon Prime",
    timecode: "TC 00:33:09:07",
    english: "SOMEONE IS WATCHING",
  },
  "w-oujou": {
    gradient: "cinema-grad--oujou",
    accent: "#f472b6",
    platform: "TBS / MBS",
    timecode: "TC 00:16:52:14",
    english: "KNOW THE MEANING",
  },
  "w-soreai": {
    gradient: "cinema-grad--soreai",
    accent: "#fb7185",
    platform: "テレビ朝日",
    timecode: "TC 00:29:41:05",
    english: "WILL YOU STILL VOW?",
  },
  "w-sobakasu": {
    gradient: "cinema-grad--sobakasu",
    accent: "#fbbf24",
    platform: "劇場公開",
    timecode: "TC 00:51:26:18",
    english: "SOBAKASU",
  },
  "w-romakira": {
    gradient: "cinema-grad--romakira",
    accent: "#f43f5e",
    platform: "Netflix",
    timecode: "TC 00:38:02:11",
    english: "ROMANTIC KILLER",
  },
  "w-akogare": {
    gradient: "cinema-grad--akogare",
    accent: "#818cf8",
    platform: "配信ドラマ",
    timecode: "TC 00:47:33:09",
    english: "MY IDOL IS NOT HUMAN",
  },
  "w-shikaku": {
    gradient: "cinema-grad--shikaku",
    accent: "#94a3b8",
    platform: "短編映画",
    timecode: "TC 00:12:08:00",
    english: "THE SQUARE PEOPLE",
  },
};

function isShortDrama(work: Work) {
  return work.tags.some((tag) => tag.includes("ショートドラマ"));
}

function formatTagsOf(work: Work) {
  return work.tags.filter(
    (tag) =>
      /ショート|劇場|Netflix|WOWOW|Amazon|地上波|配信|短編|大型特別|オリジナル/i.test(
        tag,
      ) && !/制作|ロケ|現場|バックオフィス|ロケーション/.test(tag),
  );
}

function roleTagsOf(work: Work) {
  return work.tags.filter((tag) =>
    /制作|ロケ|現場|バックオフィス|ロケーション/.test(tag),
  );
}

function CinemaFilmFrame({ work }: { work: Work }) {
  const theme = CINEMA_THEMES[work.id] ?? {
    gradient: "cinema-grad--default",
    accent: "#ef4444",
    platform: work.client,
    timecode: `TC 00:${String(work.year % 100).padStart(2, "0")}:00:00`,
  };

  const displayTitle = work.title
    .replace(/^連続ドラマW 池井戸潤スペシャル/, "")
    .trim();
  const short = isShortDrama(work);

  return (
    <div className={cn("cinema-frame group/frame", short && "cinema-frame--short")}>
      <div className="cinema-frame__sprocket cinema-frame__sprocket--left" aria-hidden />
      <div className="cinema-frame__sprocket cinema-frame__sprocket--right" aria-hidden />

      <div className={cn("cinema-frame__stage", theme.gradient, short && "cinema-frame__stage--short")}>
        <div className="cinema-frame__grain" aria-hidden />
        <div className="cinema-frame__vignette" aria-hidden />

        <div className="cinema-frame__meta">
          <span className="cinema-frame__ratio">{short ? "9:16 VERTICAL" : "2.39:1"}</span>
          <span className="cinema-frame__tc">{theme.timecode}</span>
        </div>

        <div className="cinema-frame__platform" style={{ borderColor: theme.accent }}>
          {theme.platform}
        </div>

        {short ? (
          <span className="cinema-frame__short-badge">SHORT DRAMA</span>
        ) : null}

        <div className="cinema-frame__title-block">
          {theme.english ? (
            <p className="cinema-frame__english">{theme.english}</p>
          ) : null}
          <h3 className="cinema-frame__title">{displayTitle}</h3>
          <div
            className="cinema-frame__rule"
            style={{ background: theme.accent }}
            aria-hidden
          />
          <p className="cinema-frame__year">{work.year}</p>
        </div>

        <div className="cinema-frame__footer-meta">
          <span>{short ? "VERTICAL" : "SCOPE"}</span>
          <span>ALMONDBAGGER PROD.</span>
        </div>
      </div>
    </div>
  );
}

function CinemaWorkCard({ work, index }: { work: Work; index: number }) {
  const roles = roleTagsOf(work);
  const formats = formatTagsOf(work);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: Math.min(index, 8) * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="cinema-card group flex h-full flex-col overflow-hidden"
    >
      <CinemaFilmFrame work={work} />

      <div className="flex flex-1 flex-col bg-white/95 p-5">
        <p className="text-xs font-semibold tracking-wide text-muted">
          {work.client}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {formats.map((tag) => (
            <span
              key={tag}
              className={cn(
                "cinema-format-tag",
                tag.includes("ショート") && "cinema-format-tag--short",
              )}
            >
              {tag}
            </span>
          ))}
          {roles.map((tag) => (
            <span key={tag} className="cinema-role-tag">
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
            className="cinema-cta mt-5"
          >
            公式サイト / 配信で観る
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
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
                {featuredRoleTags.map((tag) => (
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
    return list
      .filter((w) => w.id !== "w-waterman")
      .slice()
      .sort((a, b) => b.year - a.year);
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
            <span className="tag-chip tag-chip--red">Cinema Frame</span>
            <span className="tag-chip tag-chip--cyan">2.39:1</span>
            <span className="tag-chip tag-chip--purple">Production Credit</span>
          </div>
          <p className="eyebrow mt-5">制作実績</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
              <span className="mesh-text">Works</span>
            </h2>
            <MiniGrowthSpark />
          </div>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            劇場映画からNetflix・FODショートドラマまで、最新作を先頭に制作部実績を年代順で掲載しています。
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
                <CinemaWorkCard key={work.id} work={work} index={i} />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
