"use client";

import { motion } from "framer-motion";

const badges = [
  "制作部統括 20年超",
  "八王子FC公認連携",
  "AI Previs / VFX",
  "縦横同時制作",
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="ALMONDBAGGER ヒーロー"
      className="relative overflow-hidden bg-background pt-[4.25rem] md:pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-center py-16 md:py-24">
          <div className="hud-frame glass-panel relative overflow-hidden p-6 sm:p-8 md:p-12">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.62rem] tracking-[0.16em] text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="cyan-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                REC STAND BY
              </span>
              <span className="text-gold">2.39:1 CINEMA · 9:16 SOCIAL</span>
              <span aria-hidden>TC 01:00:00:00</span>
            </div>

            <p className="relative z-10 mt-8 text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              GLOBAL CREATIVE PRODUCTION
            </p>

            <h1 className="relative z-10 mt-5 max-w-4xl font-serif text-[1.65rem] font-medium leading-[1.4] tracking-wide text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem]">
              制作部統括力 × AIクリエイティブ
              <br className="hidden sm:block" />
              <span className="text-ink"> × SNS戦略。</span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
              className="relative z-10 mt-7 h-px w-28 origin-left bg-gradient-to-r from-gold via-gold to-cyan/60"
            />

            <p className="relative z-10 mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-muted md:text-base">
              商業映画・地上波ドラマの制作部統括20年超と、八王子フィルムコミッション公認連携。最先端AIとオープンゲート縦横同時制作、SNS・アナリティクス戦略まで、一流プロダクション水準で現場を支えます。
            </p>

            <div className="relative z-10 mt-10 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {badges.map((label) => (
                <span
                  key={label}
                  className="gold-frame inline-flex items-center px-3.5 py-2 text-center text-[0.72rem] font-medium tracking-[0.04em] text-foreground"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="btn-dark">
                お問い合わせ
              </a>
              <a href="#works" className="btn-gold-outline">
                制作実績を見る
              </a>
              <a href="#strategy" className="btn-cyan-ghost">
                戦略・DXを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
