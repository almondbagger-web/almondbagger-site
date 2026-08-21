"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import {
  BounceArrow,
  GrowthGridBackground,
  RisingArrowsDecor,
} from "@/components/GrowthVisuals";
import { Bounce, ConfettiDecor } from "@/components/Motion";
import { companyInfo, heroSlides } from "@/data/works";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [slideFailed, setSlideFailed] = useState(false);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 120]);
  const yCopy = useTransform(scrollY, [0, 500], [0, -40]);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setSlideFailed(false);
  }, [index]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-soft/80 pt-24 pb-16"
    >
      <GrowthGridBackground intensity="hero" />
      <RisingArrowsDecor className="opacity-40 md:opacity-60" />
      <ConfettiDecor />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink/25 pop-blob" />
      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan/20 pop-blob" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-yellow/25 pop-blob" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 section-pad lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div style={{ y: yCopy }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex"
          >
            <BrandLogo priority imageClassName="h-16 md:h-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 flex flex-wrap items-center gap-2"
          >
            <span className="neon-badge bg-yellow text-foreground">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span className="leading-snug">
                八王子FC 公式連携プロダクション
              </span>
            </span>
            <span className="neon-badge ai-neon-badge bg-gradient-to-r from-purple via-rose to-cyan text-white">
              ✨ AI Creator Joined
            </span>
            <BounceArrow size="sm" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.4rem,7vw,4.8rem)] font-bold leading-[1.08] tracking-tight"
          >
            <span className="pop-gradient">映画・ドラマから、</span>
            <br />
            <span className="pop-gradient">縦型ショートまで。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            八王子FC連携のロケ提案力 × 24時間現場進行力 × 一流AIクリエイター参画。
            SNSアルゴリズムに刺さり、数字が伸びる映像をポップに、確実に。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Bounce>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose via-pink to-purple px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(244,63,94,0.4)]"
              >
                24時間緊急対応へ
                <ArrowRight className="h-4 w-4" />
              </a>
            </Bounce>
            <Bounce>
              <a
                href="#ai"
                className="inline-flex items-center gap-2 rounded-full border-2 border-purple bg-white px-6 py-3.5 text-sm font-bold text-purple shadow-sm"
              >
                AIクリエイター参画を見る
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Bounce>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Movie", "Drama", "TikTok", "AI"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                className="rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm ring-1 ring-black/5"
                style={{
                  color: ["#f43f5e", "#8b5cf6", "#06b6d4", "#84cc16"][i],
                }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: yBg }} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(244,63,94,0.22)] ring-4 ring-white md:aspect-[5/6]">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[index].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                {!slideFailed ? (
                  <Image
                    src={heroSlides[index].image}
                    alt={heroSlides[index].label}
                    fill
                    priority={index === 0}
                    sizes="(max-width:1024px) 100vw, 45vw"
                    className="object-cover"
                    onError={() => setSlideFailed(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose via-pink to-purple p-8 text-center">
                    <p className="font-display text-2xl font-bold text-white">
                      {companyInfo.shortName}
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-rose/45 via-transparent to-cyan/15" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-rose shadow">
                  {heroSlides[index].label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 bottom-10 rounded-2xl bg-yellow px-4 py-3 text-sm font-bold text-foreground shadow-lg md:-left-8"
          >
            縦型も映画もOK!
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.4, repeat: Infinity }}
            className="absolute -right-2 top-16 rounded-2xl bg-purple px-4 py-3 text-sm font-bold text-white shadow-lg md:-right-6"
          >
            八王子FC連携
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="absolute right-2 bottom-28 rounded-2xl bg-rose px-3 py-2 text-xs font-black text-white shadow-lg md:-right-4"
          >
            ❤️ +240K
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }}
            className="absolute left-2 top-28 rounded-2xl bg-cyan px-3 py-2 text-xs font-black text-white shadow-lg md:-left-6"
          >
            🔥 Algo Picked!
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-14 overflow-hidden border-y border-rose/10 bg-white/75 py-3 backdrop-blur-sm">
        <div className="marquee-track gap-8 px-4 font-display text-lg font-bold">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex gap-8">
              {[
                "ALGORITHM",
                "ENGAGEMENT",
                "1.2億+ PV",
                "AI CREATOR",
                "八王子FC",
                "TikTok",
                "SHORTS",
                "↗ GROWTH",
              ].map((t) => (
                <span key={`${loop}-${t}`} className="whitespace-nowrap">
                  <span className="text-rose">★</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
