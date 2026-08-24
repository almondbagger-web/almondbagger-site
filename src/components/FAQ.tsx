"use client";

import { useId, useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Reveal } from "@/components/Motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "制作部・ロケ手配のみの依頼も可能ですか？",
    a: "もちろん可能です。映画・ドラマ・CM・MVなど、規模を問わずロケ地選定・許認可申請から撮影当日の現場オペレーション、バックオフィス業務まで柔軟に対応いたします。",
  },
  {
    q: "AI PrevisやAIバレ消しは、制作部業務とどのように連携できますか？",
    a: "企画段階での動くコンテ作成や、ロケ撮影時にどうしても映り込んでしまう不要物のAI消去など、現場の判断とポスプロを直結させることで制作期間と予算を大幅に最適化できます。",
  },
  {
    q: "八王子エリアでのロケ撮影やフィルムコミッションの相談は可能ですか？",
    a: "はい。八王子フィルムコミッション公認連携のもと、ロケ地提案、道路使用等の許認可申請、制作部としての現場進行まで一気通貫でサポートします。",
  },
  {
    q: "動画制作の予算が限られている中小企業でも相談できますか？",
    a: "可能です。映画・ドラマ制作部の進行管理を基盤に、必要な範囲だけ制作部支援・AI Previs・PR映像制作を組み合わせ、予算規模に合わせた最適プランをご提案します。",
  },
] as const;

export default function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-transparent section-y"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">制作部</span>
            <span className="tag-chip tag-chip--cyan">FAQ</span>
            <span className="tag-chip tag-chip--purple">AI Previs / VFX</span>
          </div>
          <p className="eyebrow mt-5">よくあるご質問</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            制作部統括と
            <span className="mesh-text">現場直結AI</span>
            について
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            制作部・ロケ手配、八王子フィルムコミッション連携、AI Previs / AI
            VFXに関するご質問にお答えします。
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
