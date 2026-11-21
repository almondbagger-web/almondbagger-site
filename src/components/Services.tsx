"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicePillars } from "@/data/works";

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
          {servicePillars.map((pillar, index) => (
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
              className="relative flex h-full flex-col border border-border bg-white p-7 md:p-8"
            >
              <p className="font-mono text-[0.62rem] tracking-[0.16em] text-gold">
                0{index + 1}
              </p>
              <p className="mt-4 text-[0.78rem] font-medium leading-relaxed tracking-wide text-muted">
                {pillar.audience}
              </p>
              <h3 className="mt-3 font-serif text-lg font-medium leading-snug tracking-wide text-foreground md:text-xl">
                {pillar.title}
              </h3>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm leading-relaxed text-muted">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pillar.href}
                {...("external" in pillar && pillar.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="btn-gold-outline mt-8 w-full sm:w-auto"
              >
                {pillar.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
