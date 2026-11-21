"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedWorks, getFilmography, type Work } from "@/data/works";

const featured = getFeaturedWorks();
const filmography = getFilmography();

function mediumLabel(work: Work) {
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
    <article className="cinema-card overflow-hidden border border-border bg-white">
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
        <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted">
          {work.year} / {work.category}
        </p>
        <h3 className="mt-2 font-serif text-lg font-medium tracking-wide text-foreground md:text-xl">
          {work.title}
        </h3>
        <p className="mt-2 text-[0.78rem] font-medium text-gold-deep">
          {work.roleCredit}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {work.description}
        </p>
        {work.officialUrl ? (
          <a
            href={work.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-foreground transition-colors hover:text-gold-deep"
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
      className="relative scroll-mt-24 overflow-hidden bg-background section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-35" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            WORKS
          </p>
          <h2
            id="works-heading"
            className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
          >
            制作実績
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            映像付きの代表作と、制作部・ロケーション統括のフィルモグラフィーを分けて掲載しています。
          </p>
        </div>

        {/* Featured */}
        <div className="mt-14">
          <h3 className="font-serif text-xl tracking-wide text-foreground md:text-2xl">
            Featured Works
          </h3>
          <p className="mt-2 text-sm text-muted">
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
          <h3 className="font-serif text-xl tracking-wide text-foreground md:text-2xl">
            Filmography
          </h3>
          <p className="mt-2 text-sm text-muted">
            制作部・ロケーション統括実績（2026年〜2020年）
          </p>

          <div className="mt-8 space-y-10">
            {years.map((year) => {
              const rows = filmography.filter((w) => w.year === year);
              return (
                <div key={year}>
                  <div className="mb-4 flex items-baseline gap-4 border-b border-border pb-3">
                    <span className="font-serif text-2xl tracking-wide text-gold">
                      {year}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted">
                      {rows.length.toString().padStart(2, "0")} TITLES
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-border text-[0.7rem] tracking-wide text-muted">
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
                            className="border-b border-border/80 align-top last:border-b-0"
                          >
                            <td className="py-4 pr-4">
                              <span className="font-serif text-[0.95rem] font-medium tracking-wide text-foreground">
                                {work.title}
                              </span>
                            </td>
                            <td className="py-4 pr-4 text-muted">
                              {mediumLabel(work)}
                            </td>
                            <td className="py-4 pr-4 text-foreground/85">
                              {work.roleCredit}
                            </td>
                            <td className="py-4">
                              {work.officialUrl ? (
                                <a
                                  href={work.officialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 font-medium text-gold-deep underline-offset-4 hover:underline"
                                  aria-label={`${work.title} の公式ページ`}
                                >
                                  公式
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              ) : (
                                <span className="text-muted">—</span>
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
