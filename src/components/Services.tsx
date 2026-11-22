"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PlatinumBackdrop from "@/components/PlatinumBackdrop";
import { companyInfo } from "@/data/works";

const blocks = [
  {
    no: "01",
    en: "Production Division",
    title: "映画・ドラマ制作部 ＆ バックオフィス統括",
    body: "商業映画・連続ドラマの現場統括20年超。ロケハン、香盤管理、道路使用許可・各種許認可、予算・権利管理、八王子フィルムコミッション公認連携まで、制作部として一貫して支えます。",
    href: "#contact",
    cta: "制作部のご相談",
  },
  {
    no: "02",
    en: "Cinematic AI & Multi-Aspect",
    title: "企業PR映像・オープンゲート縦横同時撮影・AI Previs / VFX",
    body: "フルサイズ3:2オープンゲートによる16:9＋9:16同時納品、DJIプロ仕様ドローン空撮、動く絵コンテ（AI Previs）、AIバレ消しによるポスプロ短縮までをワンストップで提供します。",
    href: "#analytics",
    cta: "戦略・技術を見る",
  },
  {
    no: "03",
    en: "Production DX & IP",
    title: "自社開発ツールとオリジナルIP開発",
    body: "『AB式ロケ地図ツクール』『YUMI-CHA（制作現場ブレインOS）』の開発・運営に加え、自社フラッグシップIP『いいねの大盤振る舞い』など、制作現場から生まれるクリエイティブを展開します。",
    href: "#ecosystem",
    cta: "制作部DXを見る",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 overflow-hidden bg-surface/90 section-y md:scroll-mt-28"
    >
      <PlatinumBackdrop />
      <div className="relative z-[2] mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="SERVICE"
          japanese="事業内容"
          id="services-heading"
          tone="gold"
        />
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
          プロデューサー、企業・広告主、制作現場——それぞれに最適な専門領域で、一流の制作体制を提供します。
        </p>

        <div className="mt-16 space-y-0 border-t border-border">
          {blocks.map((block, index) => (
            <motion.article
              key={block.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-10 md:py-12"
            >
              <p className="font-display text-4xl font-black tracking-tighter text-gold/80 md:text-5xl">
                {block.no}
              </p>
              <div>
                <p className="font-display text-[0.78rem] font-extrabold tracking-[0.16em] text-muted uppercase">
                  {block.en}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold tracking-wide text-foreground md:text-2xl">
                  {block.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {block.body}
                </p>
                {block.no === "03" ? (
                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    <a
                      href={companyInfo.mapToolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-gold-deep underline-offset-4 hover:underline"
                    >
                      地図ツクール
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={companyInfo.yumiChaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-gold-deep underline-offset-4 hover:underline"
                    >
                      YUMI-CHA
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ) : null}
              </div>
              <a href={block.href} className="btn-gold-outline shrink-0 self-start">
                {block.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
