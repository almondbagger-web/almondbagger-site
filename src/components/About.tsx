"use client";

import {
  AlgoDotGrid,
  AlgorithmNetwork,
  BounceArrow,
  FloatingEngagementBadges,
  ImpactStatsStrip,
  RisingArrowsDecor,
  RisingNeonGraph,
} from "@/components/GrowthVisuals";
import { Reveal } from "@/components/Motion";

export default function About() {
  return (
    <section
      id="about"
      className="algo-section relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <AlgoDotGrid className="opacity-55" />
      <AlgorithmNetwork className="opacity-25" />
      <RisingArrowsDecor className="opacity-50" />
      <FloatingEngagementBadges scope="hero" />
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-rose/15 pop-blob" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-cyan/15 pop-blob" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="neon-badge bg-rose text-white">
              ALGORITHM / GROWTH
            </span>
            <BounceArrow size="md" />
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            SNSアルゴリズムに
            <span className="text-cyan">刺さる映像</span>で、
            <br />
            数字を<span className="pop-gradient">爆発的に伸ばす。</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            視聴維持・拡散・急上昇を前提に設計。インプレッションとエンゲージメントが
            右肩上がりに伸び続けるクリエイティブと運用を、制作現場から伴走します。
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-soft/80 p-5 ring-1 ring-rose/10 md:p-8">
          <RisingNeonGraph
            loop
            className="pointer-events-none absolute inset-x-4 top-2 h-24 opacity-50 md:h-32"
          />
          <div className="relative">
            <ImpactStatsStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
