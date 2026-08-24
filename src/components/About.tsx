"use client";

import {
  AuroraLayer,
  GeometricGridLayer,
  GrowthInsightCards,
  ImpactStatsStrip,
  InsightChart,
} from "@/components/VelocityVisuals";
import { Reveal } from "@/components/Motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-surface/55 section-y"
    >
      <AuroraLayer className="opacity-40" />
      <GeometricGridLayer className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">制作部</span>
            <span className="tag-chip tag-chip--cyan">バックオフィス</span>
            <span className="tag-chip tag-chip--lime">現場統括</span>
          </div>
          <p className="eyebrow mt-5">強み · 制作部・バックオフィスファースト</p>
          <h2 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            20年の映画・ドラマ制作部統括が、
            <span className="mesh-text">信頼の柱</span>
            。
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            ロケハン、香盤管理、道路使用許可等の各種申請、安全管理、予算管理、権利処理。商業映画・地上波ドラマの最前線で培った制作部の規律が、すべての案件の基盤です。AI
            Previs / AI VFXは、その現場力をブーストする最新武器として現場に直結します。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={0.08} direction="left">
            <div className="lux-card geo-frame relative overflow-hidden p-6 md:p-8">
              <InsightChart className="pointer-events-none absolute inset-x-6 top-4 h-20 opacity-50 md:h-24" />
              <div className="relative mt-14 md:mt-16">
                <ImpactStatsStrip />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} direction="right">
            <div className="lux-card geo-frame flex h-full flex-col justify-center p-6 md:p-8">
              <p className="eyebrow">制作体制</p>
              <h3 className="mt-3 text-lg font-semibold">バックオフィスまで含めた現場統括</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  ロケハン・香盤・許認可・安全管理を一気通貫
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  予算配分・出演契約・権利処理まで可視化
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  AI Previs / VFXで企画とポスプロを現場に直結
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" className="mt-12">
          <GrowthInsightCards />
        </Reveal>
      </div>
    </section>
  );
}
