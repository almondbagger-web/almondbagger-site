"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Bounce, ConfettiDecor } from "@/components/Motion";
import { heroSlides } from "@/data/works";

export default function Hero() {
  const [index, setIndex] = useState(0);
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

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-soft pt-24 pb-16"
    >
      <ConfettiDecor />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink/30 pop-blob" />
      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan/25 pop-blob" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-yellow/30 pop-blob" />

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

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="neon-badge mb-5 bg-yellow text-foreground"
          >
            <Sparkles className="h-3.5 w-3.5" />
            八王子発・全国対応の制作サポート
          </motion.span>

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
            株式会社ALMONDBAGGER（アーモンドバガー）は、制作進行・ロケ・許可・車両から
            SNS縦型まで。現場が止まらないエンタメ制作をお届けします。
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose via-pink to-purple px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(236,72,153,0.4)]"
              >
                24時間緊急対応へ
                <ArrowRight className="h-4 w-4" />
              </a>
            </Bounce>
            <Bounce>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cyan bg-white px-6 py-3.5 text-sm font-bold text-cyan shadow-sm"
              >
                作品を見る
              </a>
            </Bounce>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Movie", "Drama", "TikTok", "CM"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                className="rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm ring-1 ring-black/5"
                style={{
                  color: ["#f43f5e", "#a855f7", "#ec4899", "#06b6d4"][i],
                }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: yBg }} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(236,72,153,0.25)] ring-4 ring-white md:aspect-[5/6]">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[index].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[index].image}
                  alt={heroSlides[index].label}
                  fill
                  priority={index === 0}
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink/50 via-transparent to-cyan/20" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-pink shadow">
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
            24H対応
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-14 overflow-hidden border-y border-pink/10 bg-white/70 py-3">
        <div className="marquee-track gap-8 px-4 font-display text-lg font-bold">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex gap-8">
              {[
                "MOVIE",
                "DRAMA",
                "MV",
                "CM",
                "YouTube",
                "TikTok",
                "SHORTS",
                "LOCATION",
              ].map((t) => (
                <span key={`${loop}-${t}`} className="whitespace-nowrap">
                  <span className="text-pink">★</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
