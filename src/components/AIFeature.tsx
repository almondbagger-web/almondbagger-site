"use client";

import { Bot, Clapperboard, Sparkles, Timer, Wallet, Zap } from "lucide-react";
import { AuroraLayer, GeometricGridLayer, InsightChart } from "@/components/VelocityVisuals";
/* AuroraLayer = prismatic glow backdrop */
import { Reveal } from "@/components/Motion";

const STILLS = [
  {
    title: "AI Previs（動くコンテ）",
    tag: "Moving Storyboard",
    chip: "tag-chip--red",
    grad: "linear-gradient(145deg, #fff1f2 0%, #fce7f3 45%, #ede9fe 100%)",
  },
  {
    title: "現場共有・企画可視化",
    tag: "On-Set Alignment",
    chip: "tag-chip--cyan",
    grad: "linear-gradient(160deg, #ecfeff 0%, #e0f2fe 50%, #f0fdf4 100%)",
  },
  {
    title: "AI VFX / バレ消し",
    tag: "Clean Plate",
    chip: "tag-chip--purple",
    grad: "linear-gradient(125deg, #faf5ff 0%, #fdf2f8 40%, #fff7ed 100%)",
  },
] as const;

const legacyPoints = [
  { icon: Timer, text: "静止コンテだけでは現場共有に時間がかかり、企画承認が遅れる" },
  { icon: Wallet, text: "ロケの映り込み修正を従来VFXに頼ると、ポスプロ費と納期が膨らむ" },
  { icon: Clapperboard, text: "現場を知らないAI提案は、香盤・許可・予算と噛み合わず破綻しやすい" },
] as const;

const aiPoints = [
  { icon: Sparkles, text: "AI Previsで動くコンテを光速化し、企画承認と現場共有を一気に前進" },
  { icon: Bot, text: "電柱・看板などのロケバレをAI VFXで消去し、ポスプロコストを圧縮" },
  { icon: Zap, text: "制作部が現場を熟知しているからこそ、破綻のない実用的なAIを提供" },
] as const;

const features = [
  {
    icon: Sparkles,
    title: "AI Previs",
    body: "ハリウッドでも導入が進む動く絵コンテ。企画の意図を映像で可視化し、監督・制作部・クライアントの合意形成を加速します。",
    tone: "tag-chip--red",
  },
  {
    icon: Bot,
    title: "AI VFX / バレ消し",
    body: "ロケ撮影で映り込んだ不要物をAIで消去。現場の制約をポスプロで吸収し、納期と予算を最適化します。",
    tone: "tag-chip--purple",
  },
  {
    icon: Clapperboard,
    title: "現場直結",
    body: "20年の制作部統括があるから、香盤・許認可・安全管理と矛盾しないAI活用だけを現場に投入します。",
    tone: "tag-chip--lime",
  },
] as const;

export default function AIFeature() {
  return (
    <section
      id="ai"
      className="relative scroll-mt-44 md:scroll-mt-48 overflow-hidden bg-surface/55 section-y"
    >
      <AuroraLayer className="opacity-60" />
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="lux-badge">現場力をブーストする最新武器</span>
            <span className="tag-chip tag-chip--yellow">AI Previs</span>
            <span className="tag-chip tag-chip--purple">AI VFX</span>
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            制作部の現場力に直結する
            <br />
            <span className="mesh-text">AI Previs & AI VFX</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted md:text-lg">
            AIは主役ではなく、20年の制作部統括を加速させる武器です。動く絵コンテで企画を可視化し、ロケ後のバレ消しでポスプロを圧縮。現場を知り尽くしているからこそ、破綻のない実用的なAIソリューションを提供します。
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
              <p className="eyebrow">従来の企画〜ポスプロ</p>
              <h3 className="mt-3 text-lg font-semibold">現場と分断されたアプローチ</h3>
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
                <p className="eyebrow">制作部直結型</p>
                <h3 className="mt-3 text-lg font-semibold">
                  <span className="mesh-text">AI Previs × AI VFX</span>
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
