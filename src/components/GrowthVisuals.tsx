"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Dot grid ─── */
export function AlgoDotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 algo-dot-grid", className)}
    />
  );
}

/* ─── Looping neon rising charts ─── */
const CHART_A =
  "M 8 188 L 48 172 L 88 160 L 128 128 L 168 118 L 208 92 L 248 78 L 288 52 L 328 44 L 368 28 L 408 22 L 448 10 L 488 4";
const CHART_B =
  "M 8 192 L 52 180 L 96 168 L 140 150 L 184 142 L 228 110 L 272 98 L 316 70 L 360 58 L 404 36 L 448 24 L 488 12";

export function RisingNeonGraph({
  className,
  variant = "hero",
  loop = false,
}: {
  className?: string;
  variant?: "hero" | "card";
  loop?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const isHero = variant === "hero";
  const lineId = `neon-line-${uid}`;
  const fillId = `neon-fill-${uid}`;
  const glowId = `neon-glow-${uid}`;

  return (
    <svg
      aria-hidden
      viewBox="0 0 500 200"
      className={cn("overflow-visible", className)}
      fill="none"
    >
      <defs>
        <linearGradient id={lineId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={isHero ? 3.5 : 2} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={`${CHART_A} L 488 200 L 8 200 Z`}
        fill={`url(#${fillId})`}
        initial={{ opacity: 0 }}
        animate={
          loop
            ? { opacity: [0, 0.9, 0.9, 0] }
            : { opacity: 1 }
        }
        transition={
          loop
            ? { duration: 5.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.7, 1] }
            : { duration: 1.1, delay: 0.35 }
        }
      />

      <motion.path
        d={CHART_A}
        stroke={`url(#${lineId})`}
        strokeWidth={isHero ? 3.5 : 2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glowId})`}
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={
          loop
            ? { pathLength: [0, 1, 1, 0], opacity: [0.5, 1, 1, 0.35] }
            : { pathLength: 1, opacity: 1 }
        }
        transition={
          loop
            ? {
                duration: 5.5,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.45, 0.72, 1],
              }
            : { duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }
        }
      />

      <motion.path
        d={CHART_B}
        stroke="#06b6d4"
        strokeWidth={isHero ? 2.2 : 1.6}
        strokeLinecap="round"
        strokeOpacity={0.55}
        filter={`url(#${glowId})`}
        initial={{ pathLength: 0 }}
        animate={
          loop
            ? { pathLength: [0, 1, 1, 0] }
            : { pathLength: 1 }
        }
        transition={
          loop
            ? {
                duration: 5.5,
                repeat: Infinity,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.45, 0.72, 1],
              }
            : { duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.45 }
        }
      />

      <motion.circle
        cx="488"
        cy="4"
        r={isHero ? 6 : 4}
        fill="#f43f5e"
        filter={`url(#${glowId})`}
        animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ─── Algorithm node network ─── */
const NODES = [
  { x: 12, y: 22 },
  { x: 28, y: 48 },
  { x: 18, y: 72 },
  { x: 42, y: 18 },
  { x: 55, y: 42 },
  { x: 68, y: 28 },
  { x: 78, y: 58 },
  { x: 88, y: 38 },
  { x: 35, y: 65 },
  { x: 62, y: 78 },
  { x: 8, y: 55 },
  { x: 92, y: 72 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 4],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
  [2, 8],
  [8, 9],
  [4, 9],
  [1, 10],
  [6, 11],
  [7, 11],
];

export function AlgorithmNetwork({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      {EDGES.map(([a, b], i) => {
        const n1 = NODES[a];
        const n2 = NODES[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={`${n1.x}%`}
            y1={`${n1.y}%`}
            x2={`${n2.x}%`}
            y2={`${n2.y}%`}
            stroke={i % 2 === 0 ? "#f43f5e" : "#06b6d4"}
            strokeWidth="0.15"
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.35, 0.08] }}
            transition={{
              duration: 3.2 + (i % 5) * 0.4,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <motion.circle
          key={`${n.x}-${n.y}`}
          cx={`${n.x}%`}
          cy={`${n.y}%`}
          r="0.55"
          fill={i % 3 === 0 ? "#f43f5e" : i % 3 === 1 ? "#06b6d4" : "#a855f7"}
          initial={{ opacity: 0.35 }}
          animate={{
            opacity: [0.35, 0.95, 0.35],
            r: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 2.4 + (i % 4) * 0.35,
            repeat: Infinity,
            delay: i * 0.22,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

/* ─── Site-wide / hero atmosphere ─── */
export function GrowthGridBackground({
  className,
  intensity = "hero",
}: {
  className?: string;
  intensity?: "hero" | "page";
}) {
  const isHero = intensity === "hero";
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <AlgoDotGrid className={isHero ? "opacity-100" : "opacity-70"} />
      <AlgorithmNetwork className={isHero ? "opacity-50" : "opacity-30"} />
      <RisingNeonGraph
        loop
        className={cn(
          "absolute opacity-80",
          isHero
            ? "-right-8 bottom-6 h-[44%] w-[72%] max-w-3xl md:right-[2%] md:bottom-[10%] md:h-[50%] md:w-[58%]"
            : "right-0 top-1/4 h-40 w-[min(520px,55%)] opacity-40",
        )}
      />
      {isHero && (
        <RisingNeonGraph
          loop
          className="absolute -left-16 top-[18%] h-28 w-[42%] rotate-[-8deg] opacity-35 md:h-36 md:w-[32%]"
        />
      )}
    </div>
  );
}

/** Fixed subtle atmosphere behind the whole page */
export function SiteAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <AlgoDotGrid className="opacity-60" />
      <AlgorithmNetwork className="opacity-25" />
      <RisingNeonGraph
        loop
        className="absolute -right-10 top-[12%] h-36 w-[min(480px,50vw)] opacity-25"
      />
      <RisingNeonGraph
        loop
        className="absolute -left-20 bottom-[18%] h-32 w-[min(420px,48vw)] -scale-x-100 opacity-20"
      />
    </div>
  );
}

/* ─── Floating engagement badges ─── */
const ENGAGEMENT_BADGES = [
  {
    label: "🔥 ALGORITHM HIT!",
    className: "bg-rose text-white",
    style: { top: "14%", left: "2%" },
    delay: 0,
  },
  {
    label: "❤️ +128.4K LIKES",
    className: "bg-purple text-white",
    style: { top: "22%", right: "3%" },
    delay: 0.25,
  },
  {
    label: "🚀 RETENTION 84.6%",
    className: "bg-lime text-white",
    style: { top: "48%", left: "1.5%" },
    delay: 0.5,
  },
  {
    label: "📈 IMPRESSION +450% ↗",
    className: "bg-yellow text-foreground",
    style: { top: "58%", right: "2%" },
    delay: 0.75,
  },
  {
    label: "🔁 12.8K SHARES",
    className: "bg-cyan text-white",
    style: { bottom: "18%", left: "4%" },
    delay: 1,
  },
] as const;

export function FloatingEngagementBadges({
  scope = "hero",
}: {
  scope?: "hero" | "page";
}) {
  const isPage = scope === "page";
  return (
    <div
      aria-hidden
      className={cn(
        "z-[6] overflow-visible",
        isPage
          ? "pointer-events-none fixed inset-0 hidden md:block"
          : "pointer-events-none absolute inset-0",
      )}
    >
      {ENGAGEMENT_BADGES.map((b) => (
        <motion.button
          key={b.label}
          type="button"
          tabIndex={-1}
          className={cn(
            "absolute cursor-default rounded-full px-3 py-1.5 text-[10px] font-black tracking-wide shadow-lg ring-2 ring-white/50",
            "pointer-events-auto select-none",
            isPage ? "inline-flex" : "hidden md:inline-flex",
            b.className,
          )}
          style={b.style}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -14, 0],
          }}
          whileHover={{
            scale: 1.12,
            rotate: [0, -4, 4, -3, 0],
            transition: { duration: 0.45, type: "tween" },
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { delay: 0.6 + b.delay, duration: 0.45 },
            scale: { delay: 0.6 + b.delay, duration: 0.45 },
            y: {
              delay: 1 + b.delay,
              duration: 3.6 + b.delay * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {b.label}
        </motion.button>
      ))}
    </div>
  );
}

/** @deprecated alias */
export const FloatingMetricBadges = FloatingEngagementBadges;

/* ─── Count-up ─── */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.55,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      const v = to * eased;
      setDisplay(
        decimals > 0
          ? v.toFixed(decimals)
          : Math.round(v).toLocaleString("en-US"),
      );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const IMPACT_STATS = [
  {
    label: "総再生回数",
    to: 1000000,
    suffix: "+",
    prefix: "",
    accent: "text-rose",
    hint: "Views",
  },
  {
    label: "インプレッション向上率",
    to: 450,
    suffix: "%",
    prefix: "+",
    accent: "text-cyan",
    hint: "Impressions",
  },
  {
    label: "現場稼働率",
    to: 99,
    suffix: "%",
    prefix: "",
    accent: "text-lime",
    hint: "On-set",
  },
] as const;

export function ImpactStatsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-3",
        className,
      )}
    >
      {IMPACT_STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-[0_14px_36px_rgba(31,18,53,0.07)] ring-1 ring-black/5"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted">
            {s.hint}
          </p>
          <p className={cn("mt-2 font-display text-3xl font-bold md:text-4xl", s.accent)}>
            <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} duration={1.55} />
          </p>
          <p className="mt-1 text-sm font-bold text-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Growth insight cards ─── */
const growthCards = [
  {
    title: "視聴維持率が伸びる編集",
    body: "冒頭3秒の掴みからテンポ設計まで。離脱されにくい縦型構成で再生完了率を押し上げます。",
    metric: "+48% Retention",
    color: "from-rose to-pink",
    chart: [28, 36, 42, 55, 68, 82],
  },
  {
    title: "インプレッション急上昇設計",
    body: "トレンド音源・テロップ・フックを最適化。拡散前提のフォーマットで露出を最大化します。",
    metric: "+320% Reach",
    color: "from-cyan to-purple",
    chart: [18, 24, 33, 49, 71, 96],
  },
  {
    title: "エンゲージメントが回る運用",
    body: "単なる納品で終わらない。コメント・保存・シェアを誘発する企画と投稿リズムまで伴走します。",
    metric: "×3.2 Engagement",
    color: "from-lime to-cyan",
    chart: [22, 30, 38, 52, 64, 88],
  },
] as const;

export function GrowthInsightCards() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {growthCards.map((card, i) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.1, duration: 0.55 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="overflow-hidden rounded-3xl bg-white p-5 shadow-[0_16px_40px_rgba(31,18,53,0.08)] ring-1 ring-black/5"
        >
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-black text-white",
              card.color,
            )}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            {card.metric}
          </div>
          <h3 className="mt-4 font-display text-lg font-bold text-foreground">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>

          <div className="mt-5 flex h-16 items-end gap-1.5">
            {card.chart.map((h, idx) => (
              <motion.span
                key={idx}
                className={cn(
                  "flex-1 rounded-t-md bg-gradient-to-t",
                  card.color,
                )}
                initial={{ height: 0, opacity: 0.4 }}
                whileInView={{ height: `${h}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + idx * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function MiniGrowthSpark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-rose/15",
        className,
      )}
    >
      <RisingNeonGraph variant="card" loop className="h-8 w-24" />
      <span className="text-[10px] font-black tracking-wide text-rose">
        GROWING
      </span>
    </div>
  );
}
