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
      className="relative scroll-mt-24 overflow-hidden bg-surface/55 section-y"
    >
      <AuroraLayer className="opacity-40" />
      <GeometricGridLayer className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">On-Location</span>
            <span className="tag-chip tag-chip--cyan">Field-First</span>
            <span className="tag-chip tag-chip--lime">Production</span>
          </div>
          <p className="eyebrow mt-5">強み · 機動制作プロダクション</p>
          <h2 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            20年の現場統括力と、
            <span className="mesh-text">完全現場主義</span>
            の制作管理。
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            固定スタジオに閉じこもらず、八王子・多摩のロケーションやクライアント現場へ直接駆けつける機動型プロダクション。現場で培った統括力とデータ分析を組み合わせ、企画から撮影・合成・配信まで一貫して伴走します。
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
              <h3 className="mt-3 text-lg font-semibold">一貫したプロジェクト管理</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  企画段階からKPIとターゲットを明確化
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  撮影・編集・配信まで進行を可視化
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  公開後の数値をもとに改善サイクルを設計
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
