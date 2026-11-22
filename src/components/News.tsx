import SectionHeading from "@/components/SectionHeading";
import PlatinumBackdrop from "@/components/PlatinumBackdrop";

type NewsCategory = "WORKS" | "RELEASE" | "ON AIR";

const newsItems: {
  date: string;
  categories: NewsCategory[];
  title: string;
  href?: string;
}[] = [
  {
    date: "2026.11",
    categories: ["WORKS", "ON AIR"],
    title:
      "ABCテレビ連続ドラマ『もうパパ！』現在放送中（制作担当として参加）",
    href: "https://www.asahi.co.jp/moupapa/",
  },
  {
    date: "2026.07.10",
    categories: ["WORKS"],
    title: "FOD SHORT『BLドラマに女はいらない』配信開始（制作部参加）",
  },
  {
    date: "2026.07.03",
    categories: ["WORKS"],
    title: "劇場公開映画『ラブ≠コメディ』全国公開（制作部・ロケーション管理）",
  },
  {
    date: "2026.05.14",
    categories: ["WORKS"],
    title: "Netflix映画『ソウルメイト』世界独占配信開始（制作部・クラフト参加）",
  },
  {
    date: "2026.04.01",
    categories: ["RELEASE"],
    title: "自社オリジナルアニメMV『いいねの大盤振る舞い』YouTube公開",
  },
];

const categoryClass: Record<NewsCategory, string> = {
  WORKS: "border-gold/50 text-gold-deep",
  RELEASE: "border-cyan/40 text-cyan",
  "ON AIR": "border-gold text-gold-deep bg-gold/5",
};

export default function News() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="relative scroll-mt-24 overflow-hidden bg-background/85 section-y md:scroll-mt-28"
    >
      <PlatinumBackdrop />
      <div className="relative z-[2] mx-auto max-w-6xl section-pad">
        <SectionHeading english="NEWS" japanese="お知らせ" id="news-heading" />

        <ul className="mt-12 border-t border-border">
          {newsItems.map((item) => (
            <li
              key={`${item.date}-${item.title}`}
              className="grid gap-3 border-b border-border py-5 sm:grid-cols-[7.5rem_6.5rem_1fr] sm:items-center sm:gap-6 md:py-6"
            >
              <time
                dateTime={item.date.replace(/\./g, "-")}
                className="font-display text-[0.78rem] font-bold tracking-wide text-muted"
              >
                {item.date}
              </time>
              <span className="flex flex-wrap gap-1.5">
                {item.categories.map((cat) => (
                  <span
                    key={cat}
                    className={`inline-flex w-fit border px-2 py-1 font-display text-[0.62rem] font-extrabold tracking-[0.14em] ${categoryClass[cat]}`}
                  >
                    {cat}
                  </span>
                ))}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-[0.95rem] font-medium tracking-wide text-foreground underline-offset-4 transition-colors hover:text-gold-deep hover:underline md:text-base"
                >
                  {item.title}
                </a>
              ) : (
                <p className="font-serif text-[0.95rem] font-medium tracking-wide text-foreground md:text-base">
                  {item.title}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
