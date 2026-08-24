"use client";

import {
  ArrowUpRight,
  Clapperboard,
  MapPinned,
  Sparkles,
  Video,
} from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Clapperboard,
    title: "映画・ドラマ制作部 & バックオフィス統括",
    body: "商業映画、地上波ドラマ、大型CMの現場統括。ロケハン、香盤表作成、道路使用・撮影許認可申請、エキストラ管理、安全管理から、予算配分・出演契約・権利処理まで、プロの規律でスムーズな現場環境を構築します。",
    theme: "theme-card--red",
    chip: "tag-chip--red",
    label: "PRODUCTION DIVISION",
    badge: "主力",
    question: "制作部・バックオフィスのみの依頼も可能ですか？",
  },
  {
    icon: MapPinned,
    title: "八王子フィルムコミッション連携・ロケーション支援",
    body: "八王子エリアのロケ誘致・撮影支援。地域との深い信頼関係を活かし、自然・都市・歴史施設等の最適なロケ地選定から地元調整まで強力にバックアップします。",
    theme: "theme-card--cyan",
    chip: "tag-chip--cyan",
    label: "LOCATION SUPPORT",
    badge: "主力",
    question: "八王子でのロケや許認可は相談できますか？",
  },
  {
    icon: Sparkles,
    title: "制作部直結型 AI Previs & AI VFX",
    body: "ハリウッドでも導入が進む「動く絵コンテ（AI Previs）」で企画承認と現場共有を光速化。さらにロケ撮影で映り込んだ電柱・看板等の「AIバレ消し（不要物消去）」により、ポスプロコストと納期を劇的に圧縮します。",
    theme: "theme-card--purple",
    chip: "tag-chip--purple",
    label: "CINEMATIC AI PIPELINE",
    badge: "武器",
    question: "AIは制作部の現場とどう連携しますか？",
  },
  {
    icon: Video,
    title: "地場企業・PR動画制作",
    body: "映画・ドラマのクオリティを身近な企業へ。実写の熱量と最新AIの表現力を融合した、高コストパフォーマンスな採用・ブランディング映像を制作します。",
    theme: "theme-card--lime",
    chip: "tag-chip--lime",
    label: "PROMOTION & BRANDING",
    badge: "制作",
    question: "中小企業のPR・採用動画も相談できますか？",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-transparent section-y"
    >
      <GeometricGridLayer className="opacity-45" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">制作部統括</span>
            <span className="tag-chip tag-chip--cyan">バックオフィス</span>
            <span className="tag-chip tag-chip--lime">八王子FC連携</span>
            <span className="tag-chip tag-chip--purple">AI Previs / VFX</span>
          </div>
          <p className="eyebrow mt-5">事業内容 · 制作部ファースト</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            現場力・バックオフィス統括を
            <span className="mesh-text">最大の主力</span>
            に
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            20年以上の映画・ドラマ制作部実績と八王子フィルムコミッション公認連携が信頼の柱。AI
            Previs / AI VFXは、その現場力をブーストする最新の武器です。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06} direction="left">
              <article
                className={cn(
                  "lux-card card-lift geo-frame flex h-full flex-col p-6 md:p-7",
                  pillar.theme,
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="theme-icon">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <span className={cn("tag-chip", pillar.chip)}>
                      {pillar.badge}
                    </span>
                    <span className={cn("tag-chip", pillar.chip)}>
                      {pillar.label}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wide text-muted">
                  Q. {pillar.question}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} direction="left" className="mt-12">
          <Bounce>
            <article className="prism-panel relative overflow-hidden p-7 md:p-10">
              <div className="relative z-[1]">
                <div className="relative flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 lux-badge">
                    <MapPinned className="h-3.5 w-3.5" />
                    八王子フィルムコミッション公認連携
                  </span>
                  <span className="tag-chip tag-chip--red">制作部・ロケ支援</span>
                </div>
                <h3 className="relative mt-5 text-xl font-semibold md:text-2xl">
                  ロケハンから許認可・香盤・安全管理まで、制作部が現場を支え切る
                </h3>
                <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                  {companyInfo.partner}
                  との公認連携を活かし、映画・ドラマ・CM撮影のロケーション提案、道路使用等の許可申請、制作部としての現場進行までを一気通貫でサポート。制作部・ロケ手配のみのご依頼にも柔軟に対応します。
                </p>
                <a
                  href={companyInfo.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  {companyInfo.partner} 公式サイト
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Bounce>
        </Reveal>
      </div>
    </section>
  );
}
