"use client";

import { motion } from "framer-motion";

const badges = [
  "制作部統括 20年超",
  "八王子FC公認連携",
  "AI Previs / VFX",
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="ALMONDBAGGER ヒーロー"
      className="relative overflow-hidden bg-cinema pt-[4.25rem] text-white md:pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-80" />
      <div className="aurora-layer" aria-hidden>
        <div className="aurora-blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-gold/20" />
        <div className="aurora-blob right-[-8%] top-[20%] h-[22rem] w-[22rem] bg-cyan/20" />
        <div className="aurora-blob bottom-[-10%] left-[30%] h-[18rem] w-[18rem] bg-gold/10" />
      </div>

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.62rem] tracking-[0.14em] text-white/50">
              <span className="inline-flex items-center gap-2 text-cyan">
                <span className="cyan-dot h-1.5 w-1.5 rounded-full bg-cyan" />
                REC ● 4K OPEN GATE 3:2
              </span>
              <span className="text-gold">TC 01:00:00:00</span>
            </div>

            <p className="mt-8 text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              CINEMATIC · AI · ANALYTICS
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-[1.85rem] font-medium leading-[1.35] tracking-wide sm:text-4xl md:text-[2.75rem]">
              現場を動かす、
              <br />
              確かな統括力。
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="mt-7 h-px w-28 origin-left bg-gradient-to-r from-gold via-gold to-cyan/60"
            />

            <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-white/70 md:text-base">
              20年の商業映画・ドラマ制作部統括 ×
              最先端AIクリエイティブパイプライン。オープンゲート縦横同時制作、SNSインプレッション設計、プロダクションDXまで一貫して支えます。
            </p>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {badges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center border border-gold/50 px-3.5 py-2 text-[0.72rem] font-medium tracking-[0.04em] text-white"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#analytics" className="btn-on-dark">
                戦略・アナリティクス
              </a>
              <a href="#works" className="btn-on-dark-outline">
                制作実績を見る
              </a>
              <a href="#ecosystem" className="btn-on-dark-outline border-cyan/50 hover:bg-cyan/15">
                制作部DX
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[0.62rem] tracking-[0.14em] text-white/45">
              <span>2.39:1 CINEMA</span>
              <span className="text-gold">FLAGSHIP IP</span>
            </div>
            <div className="cinema-player border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="hud-corners absolute inset-0 z-10" aria-hidden>
                <span className="tl" />
                <span className="tr" />
                <span className="bl" />
                <span className="br" />
              </div>
              <iframe
                src="https://www.youtube.com/embed/D2lvekhImOI"
                title="いいねの大盤振る舞い — ALMONDBAGGER オリジナルアニメMV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="mt-3 font-serif text-sm tracking-wide text-white">
              いいねの大盤振る舞い
              <span className="ml-2 font-sans text-xs text-white/50">
                自社フラッグシップIP / 2026
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
