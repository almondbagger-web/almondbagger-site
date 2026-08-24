"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Bounce, Reveal } from "@/components/Motion";
import {
  GrowthGridBackground,
  ImpactStatsStrip,
} from "@/components/VelocityVisuals";
import { companyInfo, heroSlides } from "@/data/works";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [slideFailed, setSlideFailed] = useState(false);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      5000,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setSlideFailed(false);
  }, [index]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-transparent pt-28 pb-16"
    >
      <GrowthGridBackground intensity="hero" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 section-pad lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal direction="left">
          <BrandLogo priority imageClassName="h-11 md:h-12" />

          <div className="hero-accent-line mt-6 max-w-md" aria-hidden="true" />

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">
              映画・ドラマ制作部 現場統括20年
            </span>
            <span className="tag-chip tag-chip--cyan">
              八王子フィルムコミッション公認連携
            </span>
            <span className="tag-chip tag-chip--lime">
              予算・権利・許認可管理の徹底
            </span>
            <span className="tag-chip tag-chip--purple">
              現場直結型 AI Previs & AI VFX
            </span>
          </div>

          <p className="eyebrow mt-6 font-syne text-[0.65rem] font-extrabold tracking-[0.22em]">
            Production Division · Back-Office · Hachioji FC
          </p>

          <h1 className="mt-6">
            <span className="font-cinema hero-title-gradient hero-title-glow block text-[clamp(2.75rem,9vw,5rem)] leading-[0.92]">
              ALMOND
              <br />
              BAGGER
            </span>
            <span className="font-hero-ja mt-5 block text-[clamp(1.75rem,4.8vw,3.15rem)] font-black leading-[1.18] tracking-tight">
              <span className="hero-headline-dark">20年の映画・ドラマ制作部統括力</span>
              <span className="hero-headline-sep"> × </span>
              <span className="hero-headline-ai">次世代AIパイプライン</span>
              <span className="hero-headline-sep">。</span>
            </span>
          </h1>

          <p className="font-hero-ja mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.25rem)] font-black leading-[1.45] tracking-tight text-[#1e293b]">
            現場の確固たる進行管理と最新技術で、映像制作を支え抜く。
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            商業映画・地上波連続ドラマの最前線で培った「制作部・バックオフィス統括（ロケ手配・許認可・香盤・予算管理）」の確かな現場力。八王子フィルムコミッションとの公認連携に加え、企画を光速で具現化する「AI Previs」やロケ撮影後の「AI VFX/バレ消し」まで。現場を熟知したプロフェッショナルが、作品の成功をワンストップで支えます。
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Bounce>
              <a href="#contact" className="btn-primary">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </a>
            </Bounce>
            <Bounce>
              <a href="#services" className="btn-secondary">
                サービス詳細
              </a>
            </Bounce>
            <Bounce>
              <a href="#ai" className="btn-secondary">
                <Sparkles className="h-4 w-4 text-brand" />
                AI Previs / VFX
              </a>
            </Bounce>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="grid gap-4">
            <div className="lux-card geo-frame glow-ring relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroSlides[index].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {!slideFailed ? (
                    <Image
                      src={heroSlides[index].image}
                      alt={heroSlides[index].label}
                      fill
                      priority={index === 0}
                      sizes="(max-width:1024px) 100vw, 42vw"
                      className="object-cover"
                      onError={() => setSlideFailed(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface p-8">
                      <p className="font-cinema text-2xl tracking-widest text-brand">
                        ALMOND BAGGER
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 lux-badge">
                    {heroSlides[index].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <ImpactStatsStrip layout="panel" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
