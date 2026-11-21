"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "映画・ドラマ制作部 ＆ バックオフィス統括",
    body: "ロケハン、香盤表作成、道路使用許可、予算管理、権利処理まで。商業映画・地上波ドラマの現場を、制作部として一貫して統括します。",
    meta: "PRODUCTION · BACK OFFICE",
  },
  {
    number: "02",
    title: "八王子フィルムコミッション公認連携・ロケーション支援",
    body: "公認連携のもと、ロケ地選定から許認可申請、地元施設との撮影調整まで。地域に根ざしたロケーションコーディネートを提供します。",
    meta: "LOCATION · PERMITS",
  },
  {
    number: "03",
    title: "制作部直結型 AI Previs / VFX ＆ SNS戦略映像",
    body: "AI Previs、AI VFX、オープンゲート縦横同時制作まで。制作部の進行管理と直結した映像技術で、作品と拡散を支えます。",
    meta: "AI · SOCIAL STRATEGY",
  },
] as const;

export default function Strengths() {
  return (
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="relative scroll-mt-24 overflow-hidden bg-surface section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-45" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            STRENGTHS &amp; SERVICES
          </p>
          <h2
            id="strengths-heading"
            className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
          >
            三つの信頼の柱
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            制作部統括力、地域連携、最先端AI／SNS戦略。一流クリエイティブプロダクションとして、企画から拡散までを一本で支えます。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel relative flex h-full flex-col p-7 md:p-8"
            >
              <div className="hud-corners absolute inset-0" aria-hidden>
                <span className="tl" />
                <span className="tr" />
                <span className="bl" />
                <span className="br" />
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-serif text-sm tracking-[0.2em] text-gold">
                  {pillar.number}
                </span>
                <span className="font-mono text-[0.58rem] tracking-[0.12em] text-muted">
                  {pillar.meta}
                </span>
              </div>
              <h3 className="relative z-10 mt-6 font-serif text-lg font-medium leading-snug tracking-wide text-foreground md:text-xl">
                {pillar.title}
              </h3>
              <p className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
