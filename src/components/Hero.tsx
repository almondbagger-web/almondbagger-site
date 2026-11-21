"use client";

import { motion } from "framer-motion";

const badges = [
  "制作部統括 20年超",
  "八王子フィルムコミッション公認連携",
  "商業映画・Netflix・地上波ドラマ対応",
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-[4.25rem] md:pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-center py-20 md:py-28">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-gold">
            FILM &amp; DRAMA PRODUCTION
          </p>

          <h1 className="mt-8 max-w-4xl font-serif text-[1.85rem] font-medium leading-[1.35] tracking-wide text-foreground sm:text-4xl md:text-5xl lg:text-[3.35rem]">
            現場を動かす、
            <br className="sm:hidden" />
            確かな統括力。
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="mt-8 h-px w-24 origin-left bg-gold"
          />

          <p className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-muted md:text-base">
            商業映画・地上波ドラマの制作部統括20年の実績と、八王子フィルムコミッション公認連携。企画設計から許認可・ロケーション管理・最新AI映像技術まで、作品の現場を一貫して支えます。
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {badges.map((label) => (
              <span
                key={label}
                className="gold-frame inline-flex items-center px-4 py-2.5 text-center text-[0.72rem] font-medium tracking-[0.04em] text-foreground sm:text-left sm:text-[0.78rem]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#contact" className="btn-dark">
              お問い合わせ
            </a>
            <a href="#works" className="btn-gold-outline">
              制作実績を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
