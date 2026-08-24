"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Bounce, Reveal } from "@/components/Motion";

const YOUTUBE_URL = "https://youtu.be/7wWeWsUuzdI";

export default function News() {
  return (
    <section
      id="news"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-transparent py-8 md:py-10"
      aria-labelledby="news-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <article className="prism-panel relative overflow-hidden p-5 md:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-lime/20 blur-3xl" />

            <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag-chip tag-chip--red font-extrabold tracking-wide">
                    NEW RELEASE
                  </span>
                  <span className="tag-chip tag-chip--lime font-extrabold tracking-wide">
                    制作協力
                  </span>
                  <p className="eyebrow !mt-0 text-[0.65rem]">
                    LATEST RELEASE / NEWS
                  </p>
                </div>

                <p className="mt-4 text-xs font-bold tracking-[0.18em] text-brand">
                  2026.08.17 RELEASE
                </p>

                <h2
                  id="news-heading"
                  className="mt-3 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl lg:text-[1.65rem]"
                >
                  【MV公開】AKBB feat. Waterman『WATERMAN』の制作協力を担当しました
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  AI ✖️ 口パク ✖️
                  エアーギターの最新型ロックバンド🔥
                  本気で武道館・MSGを目指すオジさんたちの熱い挑戦！YouTubeにて本編公開中。
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Bounce>
                    <a
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-release"
                    >
                      MVを観る
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Bounce>
                  <Bounce>
                    <a href="#works" className="btn-secondary text-xs">
                      <Sparkles className="h-3.5 w-3.5 text-brand" />
                      Worksで詳しく見る
                    </a>
                  </Bounce>
                </div>
              </div>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mx-auto block w-full max-w-md overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-2 shadow-[0_20px_50px_rgba(225,29,72,0.12)] backdrop-blur-sm lg:mx-0 lg:max-w-none"
                aria-label="WATERMAN MVをYouTubeで視聴する"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/mv-waterman.jpg"
                    alt="AKBB feat. Waterman『WATERMAN』MVジャケット"
                    fill
                    sizes="(max-width:1024px) 90vw, 420px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-brand shadow-sm">
                    WATCH ON YOUTUBE ↗
                  </span>
                </div>
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
