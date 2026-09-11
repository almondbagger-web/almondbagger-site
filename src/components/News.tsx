"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Bounce, Reveal } from "@/components/Motion";

type NewsItem = {
  id: string;
  badge: string;
  badgeTone: string;
  date: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image?: string;
  imageAlt?: string;
};

const newsItems: NewsItem[] = [
  {
    id: "oban",
    badge: "FLAGSHIP IP",
    badgeTone: "tag-chip--red",
    date: "2026 RELEASE",
    title: "『いいねの大盤振る舞い』YouTube本編公開＆サブスク近日解禁！",
    body: "自社オリジナルアニメMVがYouTubeで本編公開中。劇中歌は各ストリーミングにて近日サブスク解禁予定です。",
    href: "https://youtu.be/D2lvekhImOI",
    cta: "YouTubeで観る",
    image: "/mv-obanhurumai.jpg",
    imageAlt: "いいねの大盤振る舞い",
  },
  {
    id: "soulmate",
    badge: "NETFLIX",
    badgeTone: "tag-chip--cyan",
    date: "2026.05.14",
    title: "Netflix『ソウルメイト』公開（制作部・クラフト参加）",
    body: "世界独占配信中のNetflix映画。制作部およびクラフト部門として撮影現場を強力にバックアップしました。",
    href: "https://about.netflix.com/ja/news/soulmate-main-trailer",
    cta: "公式情報を見る",
  },
  {
    id: "aimote",
    badge: "NEW MV",
    badgeTone: "tag-chip--purple",
    date: "2026 RELEASE",
    title: "AKBB新曲『aiを持て』MV公開",
    body: "中華ダンスロック／クラブEDMアンセム。YouTube・TikTokにて公開中。制作部協力として参加しました。",
    href: "https://youtu.be/3TjVEUCimZs",
    cta: "YouTubeで観る",
    image: "/mv-aimote.jpg",
    imageAlt: "aiを持て / AKBB",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="relative scroll-mt-44 md:scroll-mt-48 overflow-hidden bg-transparent py-8 md:py-10"
      aria-labelledby="news-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag-chip tag-chip--red font-extrabold tracking-wide">
              LATEST NEWS
            </span>
            <p className="eyebrow !mt-0 text-[0.65rem]">NEWS / UPDATES</p>
          </div>
          <h2
            id="news-heading"
            className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl"
          >
            最新のお知らせ
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} direction="left">
              <article className="prism-panel relative flex h-full flex-col overflow-hidden p-4 md:p-5">
                {item.image ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mb-4 block overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </a>
                ) : null}

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`tag-chip ${item.badgeTone} font-extrabold`}>
                    {item.badge}
                  </span>
                  <p className="text-[0.65rem] font-bold tracking-[0.16em] text-brand">
                    {item.date}
                  </p>
                </div>
                <h3 className="mt-3 font-hero-ja text-base font-black leading-snug md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <div className="mt-5">
                  <Bounce>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-release !px-4 !py-2 text-xs"
                    >
                      {item.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </Bounce>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
