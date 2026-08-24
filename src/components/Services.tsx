"use client";

import {
  ArrowUpRight,
  Camera,
  MapPinned,
  Sparkles,
  Wallet,
} from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Wallet,
    title: "固定スタジオを持たないからこそ実現する適正コスト",
    body: "スタジオ維持費などの余計な固定費を制作費に上乗せせず、映像のクオリティそのものに予算を集中投下。機動型プロダクションだからこそ、圧倒的なコストパフォーマンスを実現します。",
    theme: "theme-card--red",
    chip: "tag-chip--red",
    label: "Cost Performance",
    question: "なぜ他社より予算を映像品質に回せるのですか？",
  },
  {
    icon: MapPinned,
    title: "八王子・多摩を舞台にした完全現場主義",
    body: "箱物のスタジオに閉じこもらず、八王子フィルムコミッションと連携したリアルなロケーション（山林、都市、工場、歴史施設）やクライアントの現場へ直接駆けつける、ロケーション特化型の機動制作チームです。",
    theme: "theme-card--cyan",
    chip: "tag-chip--cyan",
    label: "On-Location",
    question: "八王子でのロケや許認可は相談できますか？",
  },
  {
    icon: Camera,
    title: "実写ロケ × 3D空間キャプチャ・AI合成",
    body: "大がかりなセットを組まなくても、現地で撮影した素材や3D空間キャプチャ・生成AIを融合させることで、スタジオ撮影以上のスケール感と表現力を創出します。",
    theme: "theme-card--purple",
    chip: "tag-chip--purple",
    label: "Hybrid Pipeline",
    question: "セットを組まずに大規模な映像表現は可能ですか？",
  },
  {
    icon: Sparkles,
    title: "20年の現場統括力 × 次世代AIパイプライン",
    body: "商業映画・連続ドラマの制作部現場を熟知した統括力と、生成AI・3Dキャプチャを組み合わせたロケーション特化型パイプライン。企画から撮影・合成・納品までワンストップで伴走します。",
    theme: "theme-card--lime",
    chip: "tag-chip--lime",
    label: "Production",
    question: "どのような制作体制で進行しますか？",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-transparent section-y"
    >
      <GeometricGridLayer className="opacity-45" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">完全現場主義</span>
            <span className="tag-chip tag-chip--cyan">ロケーション特化</span>
            <span className="tag-chip tag-chip--purple">AI合成</span>
            <span className="tag-chip tag-chip--lime">適正コスト</span>
          </div>
          <p className="eyebrow mt-5">強み · 機動制作プロダクション</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            スタジオに依存しない
            <span className="mesh-text">ロケーション特化型</span>
            の制作力
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            固定スタジオを持たない機動型プロダクションとして、適正コスト・完全現場主義・実写×AI合成の3つの強みで、八王子・多摩から全国の現場へ。
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
                  <span className={cn("tag-chip", pillar.chip)}>
                    {pillar.label}
                  </span>
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
                    八王子フィルムコミッション連携
                  </span>
                  <span className="tag-chip tag-chip--lime">
                    ロケーション特化型パイプライン
                  </span>
                </div>
                <h3 className="relative mt-5 text-xl font-semibold md:text-2xl">
                  八王子のロケ地から許認可・現場進行まで、完全現場主義で伴走
                </h3>
                <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                  {companyInfo.partner}
                  との連携実績を活かし、映画・ドラマ・CM撮影のロケーション提案、許可申請、制作部としての現場進行までを一気通貫でサポート。スタジオに閉じこもらず、八王子・多摩のリアルな舞台で撮影を進めます。
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
