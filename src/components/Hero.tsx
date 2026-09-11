"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Bounce, Reveal } from "@/components/Motion";
import { GrowthGridBackground } from "@/components/VelocityVisuals";

const FLAGSHIP_YOUTUBE = "https://youtu.be/D2lvekhImOI";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-transparent pt-40 pb-16 md:pt-44 lg:pt-48"
    >
      <GrowthGridBackground intensity="hero" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 section-pad lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal direction="left">
          <BrandLogo variant="hero" priority />

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
          <article className="flagship-card group relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/90 p-2.5 shadow-[0_24px_60px_rgba(225,29,72,0.14)] backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-lime/25 blur-3xl" />

            <a
              href={FLAGSHIP_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-[1.05rem]"
              aria-label="いいねの大盤振る舞いをYouTubeで観る"
            >
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-[5/4]">
                <Image
                  src="/mv-obanhurumai.jpg"
                  alt="オリジナルアニメMV『いいねの大盤振る舞い』ジャケット"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 42vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="tag-chip tag-chip--red font-extrabold">
                    自社オリジナルIP / フラッグシップ
                  </span>
                  <span className="tag-chip tag-chip--lime font-extrabold">
                    YouTube公開中
                  </span>
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-extrabold tracking-wider text-brand shadow-sm">
                  WATCH ON YOUTUBE ↗
                </span>
              </div>
            </a>

            <div className="relative px-3 pb-4 pt-5 md:px-4 md:pb-5">
              <p className="eyebrow !mt-0 text-[0.62rem]">
                FLAGSHIP ORIGINAL IP · ANIMATION MV
              </p>
              <h2 className="mt-2 font-hero-ja text-xl font-black leading-snug tracking-tight md:text-2xl">
                オリジナルアニメMV
                <br />
                『いいねの大盤振る舞い』
              </h2>
              <p className="mt-1 text-sm font-semibold text-muted">YUMITA</p>

              <p className="mt-4 text-sm font-black leading-relaxed text-foreground">
                「昔は槍で領地を奪取、今は親指で通知を連打ッシュ」
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                戦国の世から現代へタイムスリップした侍が見た、スマホで「数字」と「言葉」を斬り合う現代人の姿――。
              </p>

              <p className="mt-4 text-xs leading-relaxed text-muted">
                企画・作詞・作曲・アニメーション制作：YUMITA
                <br />
                （Generated with Suno & AI tools）
              </p>
              <p className="mt-2 text-xs font-bold text-brand">
                劇中歌『いいねの大盤振る舞い』各ストリーミングにて近日サブスク解禁予定！
              </p>

              <div className="mt-5">
                <Bounce>
                  <a
                    href={FLAGSHIP_YOUTUBE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon-release w-full justify-center text-sm"
                  >
                    YouTubeで本編を観る
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Bounce>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
