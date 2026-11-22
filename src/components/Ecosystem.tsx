"use client";

import { ArrowUpRight, BrainCircuit, Map } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PlatinumBackdrop from "@/components/PlatinumBackdrop";
import { companyInfo } from "@/data/works";

const tools = [
  {
    id: "map",
    icon: Map,
    label: "PRODUCTION DX",
    title: "AB式ロケ地図ツクール",
    body: "現場のロケハン・控室・車両動線・道路使用許可エリアを瞬時に地図化・PDF出力する、制作部専用DXツールです。",
    href: companyInfo.mapToolUrl,
    cta: "map.almondbagger.com を開く",
    accent: "text-gold",
    mock: "map" as const,
  },
  {
    id: "yumi",
    icon: BrainCircuit,
    label: "PRODUCTION AI OS",
    title: "YUMI-CHA（制作現場ブレインOS）",
    body: "20年の映画・ドラマ制作部統括の知恵・許認可ノウハウ・ロケ地・ロケ弁データベースを学習した、制作部専用AIアシスタントです。",
    href: companyInfo.yumiChaUrl,
    cta: "YUMI-CHA を開く",
    accent: "text-cyan",
    mock: "ai" as const,
  },
] as const;

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative scroll-mt-24 overflow-hidden bg-surface/90 section-y md:scroll-mt-28"
    >
      <PlatinumBackdrop />

      <div className="relative z-[2] mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="ECOSYSTEM"
          japanese="制作部DX"
          id="ecosystem-heading"
          tone="gold"
        />
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
          現場知をツールとAIに落とし込み、制作部の判断速度と再現性を高めます。
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.article
                key={tool.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel relative overflow-hidden p-6 md:p-8"
              >
                <div className="hud-corners absolute inset-0" aria-hidden>
                  <span className="tl" />
                  <span className="tr" />
                  <span className="bl" />
                  <span className="br" />
                </div>

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className={`font-mono text-[0.65rem] tracking-[0.16em] ${tool.accent}`}>
                      {tool.label}
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-medium tracking-wide text-foreground md:text-2xl">
                      {tool.title}
                    </h3>
                  </div>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white text-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <p className="relative z-10 mt-5 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {tool.body}
                </p>

                {/* Mini UI mock */}
                <div
                  className="relative z-10 mt-6 overflow-hidden border border-border bg-cinema text-white"
                  aria-hidden
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 font-mono text-[0.58rem] tracking-[0.12em] text-white/45">
                    <span>{tool.mock === "map" ? "LOC MAP STUDIO" : "YUMI-CHA · BRAIN OS"}</span>
                    <span className={tool.mock === "map" ? "text-gold" : "text-cyan"}>
                      LIVE
                    </span>
                  </div>
                  {tool.mock === "map" ? (
                    <div className="relative aspect-[16/9] tech-grid-dark">
                      <span className="absolute left-[22%] top-[38%] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(197,160,89,0.6)]" />
                      <span className="absolute left-[48%] top-[52%] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(14,165,233,0.55)]" />
                      <span className="absolute left-[63%] top-[28%] h-2 w-2 rounded-full bg-gold/80" />
                      <div className="absolute left-[40%] top-[40%] h-14 w-24 rotate-[-8deg] border border-cyan/35 bg-cyan/10" />
                      <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                        {["ロケハン", "控室", "許可", "車両"].map((l) => (
                          <span
                            key={l}
                            className="border border-white/15 bg-black/40 px-1.5 py-0.5 font-mono text-[0.55rem] text-white/65"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 p-4">
                      <div className="border border-white/10 bg-white/5 px-3 py-2 text-[0.72rem] text-white/70">
                        Q. 道路使用許可の申請フローは？
                      </div>
                      <div className="border border-cyan/25 bg-cyan/10 px-3 py-2 text-[0.72rem] text-white/85">
                        A. 所轄・日程・占用範囲を整理し、香盤と地図レイヤーへ同期…
                      </div>
                      <div className="flex gap-2 pt-1">
                        {["許認可", "ロケ弁", "ロケ地DB"].map((t) => (
                          <span
                            key={t}
                            className="border border-white/12 px-2 py-1 font-mono text-[0.55rem] text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline relative z-10 mt-7"
                >
                  {tool.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
