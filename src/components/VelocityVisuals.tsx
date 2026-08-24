"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const CHART_RED =
  "M 8 188 L 52 168 L 96 152 L 140 128 L 184 108 L 228 82 L 272 62 L 316 42 L 360 28 L 404 16 L 448 8 L 488 2";
const CHART_CYAN =
  "M 8 170 L 60 158 L 110 140 L 160 132 L 210 110 L 260 98 L 310 78 L 360 70 L 410 48 L 460 36 L 488 28";
const CHART_LIME =
  "M 8 160 L 70 150 L 130 145 L 190 120 L 250 115 L 310 95 L 370 88 L 430 60 L 488 42";

export function GeometricGridLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="geo-grid absolute inset-0" />
      <div className="dot-matrix absolute inset-0 opacity-50" />
    </div>
  );
}

export function AuroraLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("aurora-mesh", className)}>
      <span className="aurora-blob aurora-blob--1" />
      <span className="aurora-blob aurora-blob--2" />
      <span className="aurora-blob aurora-blob--3" />
      <span className="aurora-blob aurora-blob--4" />
      <span className="aurora-blob aurora-blob--5" />
    </div>
  );
}

export function LightTrailLayer({ className }: { className?: string }) {
  return <GeometricGridLayer className={className} />;
}

export function SiteAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white"
    >
      <AuroraLayer />
      <GeometricGridLayer className="opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(225,29,72,0.05), transparent 60%)",
        }}
      />
    </div>
  );
}

export function GrowthGridBackground({
  className,
  intensity = "hero",
}: {
  className?: string;
  intensity?: "hero" | "page";
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <AuroraLayer className={intensity === "hero" ? "opacity-100" : "opacity-50"} />
      <GeometricGridLayer className={intensity === "hero" ? "opacity-55" : "opacity-35"} />
      {intensity === "hero" ? (
        <InsightChart
          className="absolute -right-4 bottom-6 h-[34%] w-[58%] opacity-75 md:right-[3%] md:h-[40%] md:w-[48%]"
        />
      ) : null}
    </div>
  );
}

export function InsightChart({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "card";
}) {
  const uid = useId().replace(/:/g, "");
  const fillId = `insight-fill-${uid}`;
  const w = variant === "hero" ? 2.6 : 2;

  return (
    <svg
      aria-hidden
      viewBox="0 0 500 200"
      className={cn("overflow-visible gpu-layer", className)}
      fill="none"
    >
      <defs>
        <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${CHART_RED} L 488 200 L 8 200 Z`} fill={`url(#${fillId})`} />
      <path
        className="geo-chart-stroke"
        d={CHART_LIME}
        stroke="#84cc16"
        strokeWidth={w * 0.7}
        strokeLinecap="round"
        strokeOpacity={0.75}
        pathLength={1}
      />
      <path
        className="geo-chart-stroke"
        d={CHART_CYAN}
        stroke="#06b6d4"
        strokeWidth={w * 0.85}
        strokeLinecap="round"
        strokeOpacity={0.9}
        pathLength={1}
        style={{ animationDelay: "0.12s" }}
      />
      <path
        className="geo-chart-stroke"
        d={CHART_RED}
        stroke="#e11d48"
        strokeWidth={w}
        strokeLinecap="round"
        pathLength={1}
        style={{ animationDelay: "0.2s" }}
      />
      <circle cx="488" cy="2" r={variant === "hero" ? 4.5 : 3.5} fill="#e11d48" />
      <circle cx="488" cy="28" r={3} fill="#06b6d4" />
      <circle cx="488" cy="42" r={2.5} fill="#84cc16" />
    </svg>
  );
}

export const VelocityGraph = InsightChart;

export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
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
          : Math.round(v).toLocaleString("ja-JP"),
      );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, decimals, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    label: "総再生 / インプレッション",
    to: 1.2,
    dec: 1,
    suffix: "億+",
    note: "累計リーチ実績",
  },
  {
    label: "平均エンゲージメント改善率",
    to: 380,
    dec: 0,
    suffix: "%",
    prefix: "+",
    note: "運用前後の比較平均",
  },
  {
    label: "アルゴリズム最適化率",
    to: 94.8,
    dec: 1,
    suffix: "%",
    note: "分析に基づく改善適用率",
  },
] as const;

export function ImpactStatsStrip({
  className,
  layout = "horizontal",
}: {
  className?: string;
  layout?: "horizontal" | "vertical" | "panel";
}) {
  const items = STATS.map((s, i) => (
    <motion.div
      key={s.label}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        layout === "panel" ? "py-4 first:pt-0 last:pb-0" : "metric-card geo-frame",
      )}
    >
      <p className="text-xs font-medium text-muted">{s.label}</p>
      <p className="metric-value mt-2">
        {"prefix" in s ? s.prefix : ""}
        <CountUp to={s.to} decimals={s.dec} suffix={s.suffix} />
      </p>
      <p className="mt-1.5 text-[11px] text-muted">{s.note}</p>
    </motion.div>
  ));

  if (layout === "panel") {
    return (
      <div className={cn("lux-card geo-frame glow-ring p-6 md:p-7", className)}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="eyebrow">実績データ</p>
          <span className="tag-chip tag-chip--red">Verified</span>
          <span className="tag-chip tag-chip--purple">AI × Data</span>
        </div>
        <p className="mt-2 text-sm font-semibold text-foreground">
          数字に基づく制作・運用の成果
        </p>
        <div className="mt-5 divide-y divide-border">{items}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        layout === "vertical" ? "grid-cols-1" : "sm:grid-cols-3",
        className,
      )}
    >
      {items}
    </div>
  );
}

export function ProductionFlowPanel({ className }: { className?: string }) {
  const steps = [
    { phase: "01", label: "企画・分析", desc: "目的とKPIを整理", tone: "tag-chip--red" },
    { phase: "02", label: "制作", desc: "撮影・編集・AI活用", tone: "tag-chip--purple" },
    { phase: "03", label: "配信・改善", desc: "数値に基づくPDCA", tone: "tag-chip--cyan" },
  ] as const;

  return (
    <div className={cn("lux-card geo-frame p-6 md:p-7", className)}>
      <p className="eyebrow">制作フロー</p>
      <p className="mt-2 font-display text-base font-semibold text-foreground">
        企画から改善まで、一貫した進行管理
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.phase} className="border-l-2 border-brand/30 pl-4">
            <span className={cn("tag-chip", step.tone)}>{step.phase}</span>
            <p className="mt-2 text-sm font-semibold">{step.label}</p>
            <p className="mt-0.5 text-xs text-muted">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const RapidDeliveryPanel = ProductionFlowPanel;

export function MiniGrowthSpark({ className }: { className?: string }) {
  return <span className={cn("lux-badge", className)}>数値改善実績あり</span>;
}

export const RisingNeonGraph = InsightChart;
export const AlgoDotGrid = GeometricGridLayer;
export const AlgorithmNetwork = GeometricGridLayer;
export const AiCyberBackdrop = GeometricGridLayer;
export const BounceArrow = () => null;
export const FloatingEngagementBadges = () => null;
export const FloatingMetricBadges = () => null;
export const RisingArrowsDecor = () => null;

const growthCards = [
  {
    title: "視聴維持率の改善",
    body: "冒頭の訴求設計とテンポ管理により、離脱を抑え再生完了率を高めます。",
    metric: "再生完了率 +48%",
    chip: "tag-chip--red",
    chart: [28, 36, 42, 55, 68, 82],
    bar: "bg-brand/75",
  },
  {
    title: "リーチの拡大",
    body: "アルゴリズムの動向を踏まえ、露出を最大化するフォーマットで制作します。",
    metric: "インプレッション +320%",
    chip: "tag-chip--cyan",
    chart: [18, 24, 33, 49, 71, 96],
    bar: "bg-cyan/75",
  },
  {
    title: "エンゲージメント向上",
    body: "保存・シェア・コメントを促す企画設計と、継続的な運用改善を行います。",
    metric: "エンゲージメント ×3.2",
    chip: "tag-chip--purple",
    chart: [22, 30, 38, 52, 64, 88],
    bar: "bg-violet/75",
  },
] as const;

export function GrowthInsightCards() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {growthCards.map((card, i) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lux-card card-lift p-5"
        >
          <span className={cn("tag-chip", card.chip)}>{card.metric}</span>
          <h3 className="mt-4 text-base font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
          <div className="mt-5 flex h-14 items-end gap-1">
            {card.chart.map((h, idx) => (
              <motion.span
                key={idx}
                className={cn("flex-1 rounded-t-sm", card.bar)}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.06, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
