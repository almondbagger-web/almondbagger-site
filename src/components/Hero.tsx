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
            <span className="tag-chip tag-chip--red">完全現場主義</span>
            <span className="tag-chip tag-chip--cyan">ロケーション特化</span>
            <span className="tag-chip tag-chip--lime">適正コスト</span>
            <span className="tag-chip tag-chip--purple">AIパイプライン</span>
          </div>

          <p className="eyebrow mt-6 font-syne text-[0.65rem] font-extrabold tracking-[0.22em]">
            Next-Gen Production · Hachioji · Field-First Team
          </p>

          <h1 className="mt-6">
            <span className="font-cinema hero-title-gradient hero-title-glow block text-[clamp(2.75rem,9vw,5rem)] leading-[0.92]">
              ALMOND
              <br />
              BAGGER
            </span>
            <span className="font-hero-ja mt-5 block text-[clamp(1.75rem,4.8vw,3.15rem)] font-black leading-[1.18] tracking-tight">
              <span className="hero-headline-dark">20年の現場統括力</span>
              <span className="hero-headline-sep"> × </span>
              <span className="hero-headline-red">八王子ロケーション</span>
              <span className="hero-headline-sep"> × </span>
              <span className="hero-headline-ai">次世代AIパイプライン</span>
              <span className="hero-headline-sep">。</span>
            </span>
          </h1>

          <p className="font-hero-ja mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.25rem)] font-black leading-[1.45] tracking-tight text-[#1e293b]">
            スタジオの固定概念を超え、あらゆる現場と先端テクノロジーを統合する制作プロダクション。
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            固定スタジオを持たない機動型プロダクションだからこそ、スタジオ維持費を制作費に上乗せせず、映像のクオリティへ予算を集中投下。八王子フィルムコミッションと連携し、山林・都市・工場・歴史施設やクライアント現場へ直接駆けつける完全現場主義。実写ロケと3D空間キャプチャ・生成AIを融合し、セットを組まなくてもスタジオ撮影以上のスケール感を創出します。
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
                AI制作
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
