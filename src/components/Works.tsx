"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getFeaturedWorks, getFilmography, type Work } from "@/data/works";

const featured = getFeaturedWorks();
const filmography = getFilmography();

function mediumLabel(work: Work) {
  if (work.id === "w-moupapa") return "ABCテレビ（朝日放送テレビ）";
  if (work.id === "w-luvntcom") return "Storm Labels配給 / 劇場公開映画";
  if (work.id === "w-soulmate") return "Netflix世界独占配信";
  if (work.id === "w-bl-drama" || work.id === "w-jikihai") return "FOD SHORT";
  if (work.id === "w-kabanya") return "WOWOW";
  if (work.id === "w-tokrev") return "ワーナー・ブラザース配給";
  return work.client;
}

function FeaturedCard({ work }: { work: Work }) {
  const isFlagship = work.id === "w-obanhurumai";

  return (
    <article className="overflow-hidden border border-white/12 bg-white/[0.03]">
      {isFlagship ? (
        <div className="cinema-player">
          <iframe
            src="https://www.youtube.com/embed/D2lvekhImOI"
            title={`${work.title} — YouTube`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className="relative mx-auto aspect-[9/16] max-h-[420px] w-full max-w-[280px] overflow-hidden bg-surface">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={`${work.title} ジャケット`}
              fill
              sizes="(max-width:768px) 70vw, 280px"
              className="object-cover"
            />
          ) : null}
        </div>
      )}

      <div className="p-5 md:p-6">
        <p className="font-mono text-[0.65rem] tracking-[0.12em] text-white/45">
          {work.year} / {work.category}
        </p>
        <h3 className="mt-2 font-serif text-lg font-medium tracking-wide text-white md:text-xl">
          {work.title}
        </h3>
        <p className="mt-2 text-[0.78rem] font-medium text-gold">
          {work.roleCredit}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {work.description}
        </p>
        {work.officialUrl ? (
          <a
            href={work.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-white transition-colors hover:text-gold"
            aria-label={`${work.title} を見る`}
          >
            {isFlagship ? "YouTubeで観る" : "公式を見る"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Works() {
  const years = Array.from(new Set(filmography.map((w) => w.year))).sort(
    (a, b) => b - a,
  );

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#0B0C0E] text-white section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-60" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="WORKS"
          japanese="制作実績"
          id="works-heading"
          tone="dark"
        />
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
          映像付きの代表作と、制作部・ロケーション統括のフィルモグラフィーを分けて掲載しています。
        </p>

        {/* Featured */}
        <div className="mt-14">
          <h3 className="font-display text-sm font-extrabold tracking-[0.18em] text-gold">
            FEATURED WORKS
          </h3>
          <p className="mt-2 text-sm text-white/55">
            ビジュアル・映像付きの代表作
          </p>
          <div className="mt-8 space-y-6">
            {featured[0] ? <FeaturedCard work={featured[0]} /> : null}
            <div className="grid gap-6 sm:grid-cols-2">
              {featured.slice(1).map((work) => (
                <FeaturedCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </div>

        {/* Filmography table */}
        <div className="mt-20">
          <h3 className="font-display text-sm font-extrabold tracking-[0.18em] text-gold">
            FILMOGRAPHY
          </h3>
          <p className="mt-2 text-sm text-white/55">
            制作部・ロケーション統括実績（2026年〜2020年）
          </p>

          <div className="mt-8 space-y-10">
            {years.map((year) => {
              const rows = filmography.filter((w) => w.year === year);
              return (
                <div key={year}>
                  <div className="mb-4 flex items-baseline gap-4 border-b border-white/15 pb-3">
                    <span className="font-display text-4xl font-black tracking-tighter text-gold md:text-5xl">
                      {year}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-[0.14em] text-white/40">
                      {rows.length.toString().padStart(2, "0")} TITLES
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/12 text-[0.7rem] tracking-wide text-white/40">
                          <th className="py-3 pr-4 font-medium">作品</th>
                          <th className="py-3 pr-4 font-medium">媒体 / 配給</th>
                          <th className="py-3 pr-4 font-medium">担当</th>
                          <th className="py-3 font-medium">リンク</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((work) => (
                          <tr
                            key={work.id}
                            className="border-b border-white/10 align-top last:border-b-0"
                          >
                            <td className="py-4 pr-4">
                              <span className="font-serif text-[0.95rem] font-medium tracking-wide text-white">
                                {work.title}
                              </span>
                              <span className="mt-1.5 block font-mono text-[0.62rem] tracking-[0.1em] text-gold/80">
                                {work.periodLabel}
                              </span>
                            </td>
                            <td className="py-4 pr-4 text-white/55">
                              {mediumLabel(work)}
                            </td>
                            <td className="py-4 pr-4 text-white/80">
                              {work.roleCredit}
                            </td>
                            <td className="py-4">
                              {work.officialUrl ? (
                                <a
                                  href={work.officialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 font-medium text-gold underline-offset-4 hover:underline"
                                  aria-label={`${work.title} の公式ページ`}
                                >
                                  公式
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              ) : (
                                <span className="text-white/35">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
