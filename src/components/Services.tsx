"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPinned } from "lucide-react";
import {
  AlgoDotGrid,
  AlgorithmNetwork,
  BounceArrow,
  GrowthInsightCards,
  RisingNeonGraph,
} from "@/components/GrowthVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import { companyInfo, serviceCards } from "@/data/works";

export default function Services() {
  return (
    <section
      id="services"
      className="algo-section relative scroll-mt-24 overflow-hidden bg-white/90 py-20 md:py-28"
    >
      <AlgoDotGrid className="opacity-50" />
      <AlgorithmNetwork className="opacity-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-purple/12 pop-blob" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="neon-badge bg-cyan text-white">ABOUT / SERVICES</span>
            <BounceArrow size="sm" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            エンタメを、
            <span className="text-rose">カラフルに支える。</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            映画・ドラマからMV・CM、YouTube・TikTok縦型ショートまで。
            制作現場の進行を、ポップに、確実に。数字が伸びる映像まで伴走します。
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Bounce>
            <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose via-pink to-purple p-7 text-white shadow-[0_24px_60px_rgba(244,63,94,0.32)] md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow/30 blur-2xl" />
              <div className="relative flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">
                  <MapPinned className="h-3.5 w-3.5" />
                  最大の強み
                </span>
                <span className="rounded-full bg-yellow px-3 py-1 text-xs font-bold text-foreground">
                  八王子FC 公式連携
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-2xl font-bold leading-snug md:text-4xl">
                八王子FC連携による
                <br />
                圧倒的ロケーション対応力
              </h3>
              <p className="relative mt-5 max-w-4xl text-sm leading-relaxed text-white/90 md:text-base">
                八王子フィルムコミッションとの緊密な連携体制により、都心からアクセスの良い八王子・多摩エリアの豊富なロケーション（大自然・街並み・公共施設・廃墟・空き家など）を迅速にご提案。複雑な道路使用許可や公共施設・私有地の撮影許可申請、地域密着のロケ弁・宿泊・車両手配までワンストップで全面サポート。他社には真似できないスピード感と調整力で、撮影現場を全力でバックアップします。
              </p>
              <a
                href={companyInfo.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-rose shadow-lg transition hover:scale-[1.03]"
              >
                八王子フィルムコミッション公式サイトへ
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </Bounce>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <Bounce>
                <article
                  className={`relative overflow-hidden rounded-3xl p-6 shadow-[0_18px_40px_rgba(31,18,53,0.08)] ${card.color}`}
                >
                  <motion.span
                    className="absolute -right-4 -top-4 text-7xl font-black opacity-20"
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <p className="text-xs font-bold tracking-[0.2em] opacity-80">
                    {card.en}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">
                    {card.body}
                  </p>
                </article>
              </Bounce>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-soft/90 p-6 ring-1 ring-rose/10 md:p-10">
            <AlgoDotGrid className="opacity-40" />
            <RisingNeonGraph
              loop
              className="pointer-events-none absolute -right-4 top-2 h-28 w-56 opacity-65 md:h-36 md:w-72"
            />
            <div className="relative">
              <span className="neon-badge bg-rose text-white">GROWTH / SNS</span>
              <h3 className="mt-4 font-display text-2xl font-bold md:text-4xl">
                届く映像、
                <span className="text-cyan">伸びる数字。</span>
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
                単なる映像制作にとどまらず、視聴維持・インプレッション・エンゲージメントを伸ばす制作体制。
                マーケティング成果につながる縦型ショート／プロモーションを設計します。
              </p>
              <GrowthInsightCards />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
