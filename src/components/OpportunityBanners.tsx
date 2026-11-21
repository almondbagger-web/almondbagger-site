import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const banners = [
  {
    href: "/location-partner",
    eyebrow: "LOCATION PARTNER",
    title: "店舗・物件オーナー様へ",
    body: "空き時間を新たな収益に。ドラマ・CMロケ地パートナー募集（初期費用0円・賠償責任保険完備）",
  },
  {
    href: "/recruit",
    eyebrow: "RECRUIT",
    title: "採用情報 / RECRUIT",
    body: "商業映画・Netflix現場 × 最先端AIクリエイティブ。制作部・マネージャー募集中",
  },
] as const;

export default function OpportunityBanners() {
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-heading"
      className="relative scroll-mt-24 overflow-hidden bg-background section-y md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="JOIN US"
          japanese="ご案内"
          id="opportunities-heading"
          tone="gold"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {banners.map((banner) => (
            <Link
              key={banner.href}
              href={banner.href}
              className="group gold-frame relative block p-7 transition-shadow hover:shadow-[0_0_0_1px_rgba(197,160,89,0.35),0_18px_40px_rgba(17,19,21,0.06)] md:p-9"
            >
              <p className="font-display text-[0.65rem] font-extrabold tracking-[0.18em] text-gold">
                {banner.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-xl font-bold tracking-wide text-foreground md:text-2xl">
                {banner.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                {banner.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-foreground transition-colors group-hover:text-gold-deep">
                詳しく見る
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
