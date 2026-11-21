"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "映画・ドラマ制作部 ＆ バックオフィス統括",
    body: "ロケハン、香盤表作成、道路使用許可、予算管理、権利処理まで。商業映画・地上波ドラマの現場を、制作部として一貫して統括します。",
  },
  {
    number: "02",
    title: "八王子フィルムコミッション公認連携・ロケーション支援",
    body: "公認連携のもと、ロケ地選定から許認可申請、地元施設との撮影調整まで。地域に根ざしたロケーションコーディネートを提供します。",
  },
  {
    number: "03",
    title: "制作部直結型 AI Previs / VFX ＆ 企業PR映像制作",
    body: "企画段階のAI Previs、現場連携のVFX、企業向けPR映像まで。制作部の進行管理と直結した映像技術で、作品づくりを支えます。",
  },
] as const;

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative scroll-mt-24 bg-surface section-y md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            STRENGTHS &amp; SERVICES
          </p>
          <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl">
            事業内容・三つの信頼の柱
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            現場統括の知見と、地域連携・映像技術を組み合わせ、作品の企画から撮影までを静かに、確実に支えます。
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
              className="flex h-full flex-col border border-border bg-white p-7 md:p-8"
            >
              <span className="font-serif text-sm tracking-[0.2em] text-gold">
                {pillar.number}
              </span>
              <h3 className="mt-6 font-serif text-lg font-medium leading-snug tracking-wide text-foreground md:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
