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
      className="relative overflow-hidden bg-background pt-[4.25rem] text-foreground md:pt-[4.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              FILM · DRAMA · AI · SOCIAL
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
              className="mt-7 h-px w-24 origin-left bg-gold"
            />

            <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base">
              商業映画・地上波ドラマの制作部統括20年超と、八王子フィルムコミッション公認連携。オープンゲート縦横同時制作、AI Previs / VFX、プロダクションDXまで、一流映像制作プロダクションとして支えます。
            </p>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {badges.map((label) => (
                <span
                  key={label}
                  className="gold-frame inline-flex items-center px-3.5 py-2 text-[0.72rem] font-medium tracking-[0.04em] text-foreground"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="btn-dark">
                事業領域を見る
              </a>
              <a href="#works" className="btn-gold-outline">
                制作実績を見る
              </a>
              <a href="#contact" className="btn-cyan-ghost">
                お問い合わせ
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[0.62rem] tracking-[0.14em] text-muted">
              <span>2.39:1 CINEMA</span>
              <span className="text-gold">FLAGSHIP IP</span>
            </div>
            <div className="cinema-player shadow-[0_20px_50px_rgba(17,19,21,0.08)]">
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
            <p className="mt-3 font-serif text-sm tracking-wide text-foreground">
              いいねの大盤振る舞い
              <span className="ml-2 font-sans text-xs text-muted">
                自社フラッグシップIP / 2026
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
