"use client";

import { Bot, Clapperboard, Sparkles, Timer, Wallet, Zap } from "lucide-react";
import { AuroraLayer, GeometricGridLayer, InsightChart } from "@/components/VelocityVisuals";
/* AuroraLayer = prismatic glow backdrop */
import { Reveal } from "@/components/Motion";

const STILLS = [
  {
    title: "現場ロケ × 企業PR",
    tag: "On-Location PV",
    chip: "tag-chip--red",
    grad: "linear-gradient(145deg, #fff1f2 0%, #fce7f3 45%, #ede9fe 100%)",
  },
  {
    title: "3D空間キャプチャ",
    tag: "Spatial Capture",
    chip: "tag-chip--cyan",
    grad: "linear-gradient(160deg, #ecfeff 0%, #e0f2fe 50%, #f0fdf4 100%)",
  },
  {
    title: "生成AI合成",
    tag: "AI Composite",
    chip: "tag-chip--purple",
    grad: "linear-gradient(125deg, #faf5ff 0%, #fdf2f8 40%, #fff7ed 100%)",
  },
] as const;

const legacyPoints = [
  { icon: Wallet, text: "スタジオ維持費・大規模セット組み立てによる固定費の上乗せ" },
  { icon: Timer, text: "箱物スタジオに閉じた撮影スケジュールの制約" },
  { icon: Clapperboard, text: "セット構築に時間とコストがかかり、表現の柔軟性が低下" },
] as const;

const aiPoints = [
  { icon: Sparkles, text: "現地ロケ素材をベースに、生成AIでスケール感を拡張" },
  { icon: Bot, text: "3D空間キャプチャとAI合成で、セット不要の大規模表現" },
  { icon: Zap, text: "スタジオ固定費ゼロのロケーション特化型パイプライン" },
] as const;

const features = [
  {
    icon: Sparkles,
    title: "実写ロケ",
    body: "クライアント現場や八王子・多摩のロケーションで撮影。リアルな質感と説得力を確保します。",
    tone: "tag-chip--red",
  },
  {
    icon: Bot,
    title: "3D × AI合成",
    body: "3D空間キャプチャと生成AIを融合。大がかりなセットを組まず、スタジオ以上のスケール感を創出。",
    tone: "tag-chip--purple",
  },
  {
    icon: Clapperboard,
    title: "適正コスト",
    body: "固定スタジオを持たない機動型プロダクションだから、映像品質へ予算を集中投下できます。",
    tone: "tag-chip--lime",
  },
] as const;

export default function AIFeature() {
  return (
    <section
      id="ai"
      className="relative scroll-mt-24 overflow-hidden bg-surface/55 section-y"
    >
      <AuroraLayer className="opacity-60" />
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="lux-badge">ロケーション特化型パイプライン</span>
            <span className="tag-chip tag-chip--yellow">3Dキャプチャ</span>
            <span className="tag-chip tag-chip--purple">AI合成</span>
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            実写ロケ × 3D空間キャプチャ ×
            <br />
            <span className="mesh-text">生成AI合成</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted md:text-lg">
            大がかりなセットや固定スタジオに頼らず、現地で撮影した素材に3D空間キャプチャと生成AIを融合。スタジオ撮影以上のスケール感を、適正コストと短納期で具現化する次世代制作プロダクションのクリエイティブパイプラインです。
          </p>
        </Reveal>

        <Reveal delay={0.06} direction="left" className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {STILLS.map((s) => (
              <article
                key={s.title}
                className="lux-card card-lift group relative aspect-[2.35/1] overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-105"
                  style={{ background: s.grad }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className={`tag-chip ${s.chip}`}>{s.tag}</span>
                  <p className="mt-2 text-sm font-semibold">{s.title}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="lux-card geo-frame p-6 md:p-8">
              <p className="eyebrow">従来のスタジオセット制作</p>
              <h3 className="mt-3 text-lg font-semibold">固定スタジオ型アプローチ</h3>
              <ul className="mt-6 space-y-4">
                {legacyPoints.map((p) => (
                  <li key={p.text} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-2">
                      <p.icon className="h-3.5 w-3.5 text-slate" />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </article>

            <article className="prism-panel relative p-6 md:p-8">
              <div className="relative z-[1]">
                <InsightChart className="pointer-events-none absolute -right-2 top-0 h-20 w-44 opacity-30" />
                <p className="eyebrow">ALMONDBAGGER Pipeline</p>
                <h3 className="mt-3 text-lg font-semibold">
                  <span className="mesh-text">ロケーション特化型 × AI</span>
                </h3>
                <ul className="mt-6 space-y-4">
                  {aiPoints.map((p) => (
                    <li
                      key={p.text}
                      className="flex items-start gap-3 text-sm text-foreground/85"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                        <p.icon className="h-3.5 w-3.5 text-brand" />
                      </span>
                      {p.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.06 + i * 0.05} direction="left">
              <article className="lux-card card-lift h-full p-6">
                <span className={`tag-chip ${f.tone}`}>{f.title}</span>
                <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <f.icon className="h-4 w-4" />
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
