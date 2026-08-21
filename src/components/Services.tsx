"use client";

import { motion } from "framer-motion";
import { Bounce, Reveal } from "@/components/Motion";
import { serviceCards } from "@/data/works";

export default function Services() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-purple/15 pop-blob" />
      <div className="mx-auto max-w-6xl section-pad">
        <Reveal>
          <span className="neon-badge bg-cyan text-white">ABOUT / SERVICES</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            エンタメを、
            <span className="text-pink">カラフルに支える。</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            映画・ドラマからMV・CM、YouTube・TikTok縦型ショートまで。
            制作現場の進行を、ポップに、確実に。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <Bounce>
                <article
                  className={`relative overflow-hidden rounded-3xl p-6 shadow-[0_18px_40px_rgba(31,18,53,0.08)] ${card.color}`}
                >
                  <motion.span
                    className="absolute -right-4 -top-4 text-7xl font-black opacity-20"
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <p className="text-xs font-bold tracking-[0.2em] opacity-80">
                    {card.en}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{card.body}</p>
                </article>
              </Bounce>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
