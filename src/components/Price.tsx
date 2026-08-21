"use client";

import { Check, MessageCircle } from "lucide-react";
import { Bounce, Reveal } from "@/components/Motion";
import {
  priceDisclaimer,
  pricePlans,
  staffRateNote,
  staffRates,
} from "@/data/works";
import { cn } from "@/lib/utils";

const colorMap = {
  pink: {
    card: "from-rose to-pink text-white",
    soft: "bg-pink/10 text-pink",
    ring: "ring-pink/30",
  },
  cyan: {
    card: "from-cyan to-[#22d3ee] text-white",
    soft: "bg-cyan/10 text-cyan",
    ring: "ring-cyan/30",
  },
  purple: {
    card: "from-purple to-[#c084fc] text-white",
    soft: "bg-purple/10 text-purple",
    ring: "ring-purple/30",
  },
  lime: {
    card: "from-lime to-[#34d399] text-white",
    soft: "bg-lime/10 text-lime",
    ring: "ring-lime/30",
  },
} as const;

export default function Price() {
  return (
    <section
      id="price"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-pink/20 pop-blob" />
      <div className="relative mx-auto max-w-6xl section-pad">
        <Reveal className="text-center">
          <span className="neon-badge bg-purple text-white">PRICE & PLANS</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            適正相場の
            <span className="text-pink">参考料金</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            企業価値を下げない市場相場をベースに、低バジェットから大規模案件まで柔軟に設計します。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricePlans.map((plan, i) => {
            const tone = colorMap[plan.color];
            return (
              <Reveal key={plan.id} delay={i * 0.1} direction="up">
                <Bounce>
                  <article
                    className={cn(
                      "flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(31,18,53,0.08)] ring-2",
                      tone.ring,
                    )}
                  >
                    <div className={cn("bg-gradient-to-br px-6 py-7", tone.card)}>
                      {plan.badge ? (
                        <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold">
                          {plan.badge}
                        </span>
                      ) : (
                        <span className="text-xs font-bold opacity-80">PLAN</span>
                      )}
                      <h3 className="mt-3 font-display text-xl font-bold leading-snug md:text-2xl">
                        {plan.name}
                      </h3>
                      <div className="mt-4 space-y-1.5">
                        {plan.priceLines.map((line) => (
                          <p
                            key={line}
                            className="rounded-xl bg-white/15 px-3 py-2 text-sm font-bold leading-snug"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm text-muted">{plan.description}</p>
                      <ul className="mt-5 space-y-2.5">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm font-medium"
                          >
                            <span
                              className={cn(
                                "mt-0.5 rounded-full p-0.5",
                                tone.soft,
                              )}
                            >
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={cn(
                          "mt-8 inline-flex justify-center rounded-full bg-gradient-to-r px-5 py-3 text-sm font-bold text-white shadow-md",
                          tone.card,
                        )}
                      >
                        このプランで相談
                      </a>
                    </div>
                  </article>
                </Bounce>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(31,18,53,0.08)] ring-2 ring-lime/30">
            <div className="bg-gradient-to-br from-lime to-[#34d399] px-6 py-6 text-white md:px-8">
              <p className="text-xs font-bold tracking-wider opacity-90">
                STAFFING
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">
                映画・ドラマ制作現場サポート（人件費参考）
              </h3>
              <p className="mt-2 text-sm text-white/90">
                制作部の配置に応じた月額目安です。期間・規模により個別調整します。
              </p>
            </div>
            <div className="grid gap-3 p-6 md:grid-cols-3 md:p-8">
              {staffRates.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl bg-soft px-4 py-4 ring-1 ring-black/5"
                >
                  <p className="text-sm font-bold text-muted">{item.role}</p>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">
                    {item.rate}
                  </p>
                </div>
              ))}
            </div>
            <p className="border-t border-black/5 px-6 py-4 text-sm text-muted md:px-8">
              {staffRateNote}
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl bg-yellow/30 px-5 py-4 ring-2 ring-yellow/60">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
            <p className="text-sm font-bold leading-relaxed text-foreground">
              {priceDisclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
