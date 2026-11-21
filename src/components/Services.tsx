"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicePillars } from "@/data/works";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 overflow-hidden bg-surface section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            SERVICES / SOLUTIONS
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
          >
            訪問者別・三つの事業領域
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            プロデューサー、企業・広告主、制作現場——それぞれに最適な入り口を用意しています。
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => {
            const isCinema = pillar.tone === "cinema";
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative flex h-full flex-col p-7 md:p-8",
                  isCinema
                    ? "bg-ink text-white"
                    : "glass-panel text-foreground",
                )}
              >
                <div className="hud-corners absolute inset-0" aria-hidden>
                  <span className="tl" />
                  <span className="tr" />
                  <span className="bl" />
                  <span className="br" />
                </div>

                <p
                  className={cn(
                    "relative z-10 font-mono text-[0.62rem] tracking-[0.16em]",
                    isCinema ? "text-gold" : "text-gold-deep",
                  )}
                >
                  0{index + 1}
                </p>
                <p
                  className={cn(
                    "relative z-10 mt-4 text-[0.78rem] font-medium leading-relaxed tracking-wide",
                    isCinema ? "text-white/70" : "text-muted",
                  )}
                >
                  {pillar.audience}
                </p>
                <h3 className="relative z-10 mt-3 font-serif text-lg font-medium leading-snug tracking-wide md:text-xl">
                  {pillar.title}
                </h3>
                <ul
                  className={cn(
                    "relative z-10 mt-6 flex-1 space-y-2.5 text-sm leading-relaxed",
                    isCinema ? "text-white/70" : "text-muted",
                  )}
                >
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span
                        className={cn(
                          "mt-2 h-1 w-1 shrink-0 rounded-full",
                          isCinema ? "bg-gold" : "bg-gold-deep",
                        )}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={pillar.href}
                  {...("external" in pillar && pillar.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cn(
                    "relative z-10 mt-8 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide transition-colors",
                    isCinema
                      ? "text-gold hover:text-white"
                      : "text-foreground hover:text-gold-deep",
                  )}
                >
                  {pillar.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
