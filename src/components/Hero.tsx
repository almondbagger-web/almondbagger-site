"use client";

import { motion } from "framer-motion";

const badges = [
  "制作部統括 20年超",
  "八王子FC公認連携",
  "Netflix・地上波・劇場公開",
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="ALMONDBAGGER ヒーロー"
      className="relative overflow-hidden bg-ink pt-[4.25rem] text-white md:pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-80" />
      <div className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-center py-16 md:py-24">
          <div className="hud-frame relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8 md:p-12">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.62rem] tracking-[0.16em] text-white/45">
              <span className="inline-flex items-center gap-2">
                <span className="cyan-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                PRODUCTION HOUSE
              </span>
              <span className="text-gold">2.39:1 CINEMA · 9:16 SOCIAL</span>
              <span aria-hidden>TC 01:00:00:00</span>
            </div>

            {/* Cinema frame preview strip */}
            <div
              className="relative z-10 mt-8 hidden overflow-hidden border border-white/10 md:block"
              aria-hidden
            >
              <div className="aspect-[2.39/1] bg-gradient-to-r from-[#12141a] via-[#1a1c24] to-[#2a2418]">
                <div className="flex h-full items-end justify-between px-6 py-4">
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/35">
                    SCREEN · REFERENCE
                  </span>
                  <span className="font-serif text-sm tracking-[0.2em] text-white/50">
                    ALMONDBAGGER
                  </span>
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-8 text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              FILM · DRAMA · AI · SOCIAL
            </p>

            <h1 className="relative z-10 mt-5 max-w-4xl font-serif text-[1.7rem] font-medium leading-[1.4] tracking-wide sm:text-4xl md:text-[2.75rem] lg:text-[3.2rem]">
              現場を動かす、
              <br />
              確かな統括力。
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
              className="relative z-10 mt-7 h-px w-28 origin-left bg-gradient-to-r from-gold via-gold to-cyan/50"
            />

            <p className="relative z-10 mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-white/65 md:text-base">
              商業映画・地上波ドラマの制作部統括20年超と、八王子フィルムコミッション公認連携。オープンゲート縦横同時制作、AI Previs / VFX、プロダクションDXまで、一流映像制作プロダクションとして支えます。
            </p>

            <div className="relative z-10 mt-10 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {badges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center border border-gold/45 px-3.5 py-2 text-center text-[0.72rem] font-medium tracking-[0.04em] text-white/90"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-3">
              <a href="#services" className="btn-gold-outline border-gold/70 text-white hover:bg-gold/15 hover:text-white">
                事業領域を見る
              </a>
              <a href="#works" className="btn-dark border-white/20 bg-white text-ink hover:bg-gold hover:border-gold hover:text-ink">
                制作実績を見る
              </a>
              <a href="#contact" className="btn-cyan-ghost border-white/20 text-white hover:bg-cyan/10 hover:text-white">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
