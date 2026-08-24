"use client";

import { useId, useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Reveal } from "@/components/Motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "固定スタジオでの撮影は可能ですか？",
    a: "当社は固定スタジオを保有していません。完全現場主義のロケーション特化型プロダクションとして、八王子・多摩のロケーションやクライアント現場へ直接駆けつけて撮影します。必要に応じて外部スタジオのレンタル手配も可能ですが、基本方針は「現場で撮る」ことです。",
  },
  {
    q: "八王子エリアでのロケ撮影やフィルムコミッションの相談は可能ですか？",
    a: "はい。八王子フィルムコミッションと連携し、山林・都市・工場・歴史施設などのロケ地提案、道路使用等の許認可申請、制作部としての現場進行まで一気通貫でサポートします。",
  },
  {
    q: "動画制作の予算が限られている中小企業でも相談できますか？",
    a: "もちろん可能です。固定スタジオを持たない機動型プロダクションのため、スタジオ維持費などの固定費を制作費に上乗せせず、映像のクオリティへ予算を集中投下できます。実写ロケと3D空間キャプチャ・生成AIを組み合わせた最適プランをご提案します。",
  },
  {
    q: "実写ロケ × 3D空間キャプチャ × AI合成とはどのような制作手法ですか？",
    a: "現地で撮影した実写素材をベースに、3D空間キャプチャや生成AIを融合させるロケーション特化型パイプラインです。大がかりなセットを組まなくても、スタジオ撮影以上のスケール感を、適正コストと短納期で実現できます。",
  },
] as const;

export default function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-transparent section-y"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">完全現場主義</span>
            <span className="tag-chip tag-chip--cyan">FAQ</span>
            <span className="tag-chip tag-chip--purple">ロケーション特化</span>
          </div>
          <p className="eyebrow mt-5">よくあるご質問</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            ロケーション特化型
            <span className="mesh-text">制作プロダクション</span>
            について
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            完全現場主義、八王子ロケーション、適正コスト、実写×AI合成パイプラインに関するご質問にお答えします。
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={item.q} delay={i * 0.05} direction="left">
                <article
                  className="lux-card geo-frame overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start gap-3 px-5 py-4 text-left md:px-6 md:py-5"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <CircleHelp className="h-4 w-4" />
                      </span>
                      <span
                        className="flex-1 text-sm font-semibold leading-snug text-foreground md:text-base"
                        itemProp="name"
                      >
                        {item.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                          isOpen && "rotate-180 text-brand",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className={cn(isOpen ? "block" : "hidden")}
                  >
                    <p
                      className="border-t border-border/70 px-5 pb-5 pl-[3.75rem] pt-4 text-sm leading-relaxed text-muted md:px-6 md:pl-[4.25rem] md:text-base"
                      itemProp="text"
                    >
                      {item.a}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
