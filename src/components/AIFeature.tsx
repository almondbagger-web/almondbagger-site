"use client";

import { motion } from "framer-motion";
import { Bot, Clapperboard, Sparkles, Zap } from "lucide-react";
import {
  AlgoDotGrid,
  BounceArrow,
  RisingNeonGraph,
} from "@/components/GrowthVisuals";
import { Bounce, Reveal } from "@/components/Motion";

const features = [
  {
    icon: Sparkles,
    title: "ハイエンドAIビジュアル生成",
    body: "実写と見紛う高精細な映像世界をAIで即座に具現化。クオリティを落とさず、表現の幅を一気に広げます。",
    accent: "from-rose to-purple",
    badge: "✨ Visual",
  },
  {
    icon: Zap,
    title: "アルゴリズム最適化された高速PDCA",
    body: "視聴維持率を高めるAIクリエイティブを最短納期で量産。伸びる仮説を、スピードで検証します。",
    accent: "from-cyan to-lime",
    badge: "🚀 Speed",
  },
  {
    icon: Clapperboard,
    title: "次世代の映像体験",
    body: "従来の制作コスト・期間の常識を覆す最高峰の表現力。プロの現場知見と生成AIを融合した新体制です。",
    accent: "from-purple to-rose",
    badge: "🎬 Next-Gen",
  },
] as const;

export default function AIFeature() {
  return (
    <section
      id="ai"
      className="algo-section relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <AlgoDotGrid className="opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple/20 pop-blob" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-64 w-64 rounded-full bg-cyan/20 pop-blob" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="neon-badge ai-neon-badge bg-gradient-to-r from-purple via-rose to-cyan text-white">
              ✨ Next-Gen AI Production
            </span>
            <span className="neon-badge bg-foreground text-white">
              🤖 Prompt & Cine Magic
            </span>
            <BounceArrow size="sm" />
          </div>

          <p className="mt-5 text-[11px] font-black uppercase tracking-[0.22em] text-purple">
            TOP-TIER AI CREATOR JOINED
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            一流AIクリエイター参画。
            <br />
            <span className="pop-gradient">他社を圧倒する映像美とスピード。</span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            最新生成AI × 映像制作のプロ。一流AIクリエイターの参画により、
            他社に負けない圧倒的クオリティと制作スピードを実現。
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Bounce>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-foreground via-[#2a1848] to-[#0e3a4a] p-7 text-white shadow-[0_28px_70px_rgba(139,92,246,0.35)] md:p-10">
              <RisingNeonGraph
                loop
                className="pointer-events-none absolute -right-4 top-4 h-28 w-56 opacity-60 md:h-40 md:w-80"
              />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-rose/40 blur-3xl" />
              <div className="relative flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                  <Bot className="h-3.5 w-3.5" />
                  AI Creator Unit
                </span>
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-foreground">
                  NOW JOINED
                </span>
              </div>
              <h3 className="relative mt-5 max-w-2xl font-display text-2xl font-bold leading-snug md:text-3xl">
                プロの演出眼 × 生成AIの瞬発力。
                <br />
                届く映像を、これまで以上の速さで。
              </h3>
              <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                企画・絵作り・縦型最適化まで一気通貫。アルゴリズムに刺さるフック設計と、
                ハイエンドなビジュアル生成を同時に回せるのが新体制の強みです。
              </p>
            </div>
          </Bounce>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.08}>
              <Bounce>
                <article className="relative h-full overflow-hidden rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(31,18,53,0.08)] ring-1 ring-black/5">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${f.accent} px-3 py-1 text-[11px] font-black text-white`}
                  >
                    <f.icon className="h-3.5 w-3.5" />
                    {f.badge}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
                  <motion.div
                    className="mt-5 h-1.5 overflow-hidden rounded-full bg-soft"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${f.accent}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                </article>
              </Bounce>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
