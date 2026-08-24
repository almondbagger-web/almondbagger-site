"use client";

import { Check, MessageCircle } from "lucide-react";
import {
  AuroraLayer,
  GeometricGridLayer,
} from "@/components/VelocityVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import {
  priceDisclaimer,
  pricePlans,
  staffRateNote,
  staffRates,
} from "@/data/works";
import { cn } from "@/lib/utils";

const colorMap = {
  red: {
    accent: "from-brand-mid to-brand",
    soft: "bg-brand/10 text-brand",
    ring: "ring-brand/20",
    theme: "theme-card--red",
  },
  pink: {
    accent: "from-pink to-rose",
    soft: "bg-pink/10 text-pink",
    ring: "ring-pink/20",
    theme: "theme-card--red",
  },
  cyan: {
    accent: "from-cyan to-lime",
    soft: "bg-cyan/10 text-cyan",
    ring: "ring-cyan/20",
    theme: "theme-card--cyan",
  },
  purple: {
    accent: "from-violet to-purple",
    soft: "bg-violet/10 text-violet",
    ring: "ring-violet/20",
    theme: "theme-card--purple",
  },
  lime: {
    accent: "from-lime to-green",
    soft: "bg-lime/10 text-lime",
    ring: "ring-lime/20",
    theme: "theme-card--lime",
  },
} as const;

export default function Price() {
  return (
    <section
      id="price"
      className="relative scroll-mt-44 md:scroll-mt-48 overflow-hidden bg-transparent section-y"
    >
      <AuroraLayer className="opacity-45" />
      <GeometricGridLayer className="opacity-35" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">Price</span>
            <span className="tag-chip tag-chip--cyan">Flexible</span>
            <span className="tag-chip tag-chip--purple">Custom</span>
          </div>
          <p className="eyebrow mt-5">料金プラン</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            適正相場の
            <span className="mesh-text">参考料金</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            企業価値を下げない市場相場をベースに、低バジェットから大規模案件まで柔軟に設計します。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricePlans.map((plan, i) => {
            const tone = colorMap[plan.color];
            return (
              <Reveal key={plan.id} delay={i * 0.08} direction="left">
                <article
                  className={cn(
                    "lux-card card-lift geo-frame flex h-full flex-col overflow-hidden ring-1",
                    tone.ring,
                    tone.theme,
                  )}
                >
                  <div
                    className={cn(
                      "bg-gradient-to-br px-6 py-7 text-white",
                      tone.accent,
                    )}
                  >
                    {plan.badge ? (
                      <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold backdrop-blur">
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-bold tracking-widest opacity-80">
                        PLAN
                      </span>
                    )}
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug md:text-2xl">
                      {plan.name}
                    </h3>
                    <div className="mt-4 space-y-1.5">
                      {plan.priceLines.map((line) => (
                        <p
                          key={line}
                          className="rounded-xl bg-white/15 px-3 py-2 text-sm font-bold leading-snug backdrop-blur"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted">
                      {plan.description}
                    </p>
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
                    <Bounce>
                      <a
                        href="#contact"
                        className="btn-primary mt-8 w-full justify-center"
                      >
                        このプランで相談
                      </a>
                    </Bounce>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} direction="left" className="mt-10">
          <article className="prism-panel overflow-hidden">
            <div className="relative z-[1] mesh-bg px-6 py-6 text-white md:px-8">
              <p className="text-xs font-bold tracking-[0.2em] opacity-90">
                STAFFING
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-wide">
                映画・ドラマ制作現場サポート（人件費参考）
              </h3>
              <p className="mt-2 text-sm text-white/90">
                制作部の配置に応じた月額目安です。期間・規模により個別調整します。
              </p>
            </div>
            <div className="relative z-[1] grid gap-3 p-6 md:grid-cols-3 md:p-8">
              {staffRates.map((item) => (
                <div
                  key={item.role}
                  className="lux-glass rounded-2xl px-4 py-4"
                >
                  <p className="text-sm font-bold text-muted">{item.role}</p>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">
                    {item.rate}
                  </p>
                </div>
              ))}
            </div>
            <p className="relative z-[1] border-t border-border/70 px-6 py-4 text-sm text-muted md:px-8">
              {staffRateNote}
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.16} direction="left" className="mt-6">
          <div className="lux-glass flex items-start gap-3 rounded-2xl px-5 py-4">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm font-medium leading-relaxed text-foreground/80">
              {priceDisclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
