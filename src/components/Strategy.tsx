"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/works";

const comparison = [
  {
    label: "従来：16:9 と 9:16 を別日・別クルーで撮影",
    value: 100,
    note: "基準（拘束時間・人件費）",
    tone: "bg-ink/25",
  },
  {
    label: "オープンゲート：1テイクから両アスペクトを同時生成",
    value: 50,
    note: "現場拘束時間・人件費 約50%削減",
    tone: "bg-gradient-to-r from-gold to-cyan",
  },
] as const;

const pipeline = [
  {
    step: "01",
    title: "AI Previs",
    body: "動く絵コンテで企画意図を共有し、撮影前の合意形成を高速化。",
  },
  {
    step: "02",
    title: "現場統括",
    body: "香盤・許認可・ロケ導線を制作部が管理。Previsを現場判断に直結。",
  },
  {
    step: "03",
    title: "AI VFX",
    body: "電柱・看板などロケ映り込みのAIバレ消しでポスプロを圧縮。",
  },
  {
    step: "04",
    title: "SNS展開",
    body: "16:9 / 9:16 を同時納品し、配信・ショートへ最短で展開。",
  },
] as const;

export default function Strategy() {
  return (
    <section
      id="strategy"
      aria-labelledby="strategy-heading"
      className="relative scroll-mt-24 overflow-hidden bg-ink text-white section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-80" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            STRATEGY · ANALYTICS · DX
          </p>
          <h2
            id="strategy-heading"
            className="mt-4 max-w-3xl font-serif text-2xl font-medium tracking-wide md:text-3xl lg:text-4xl"
          >
            制作効率とSNS展開を、
            <br className="hidden sm:block" />
            ロジックで可視化する。
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/65">
            ダミー指標ではなく、現場で効く設計思想を図解します。オープンゲート撮影、AIパイプライン、自社DXツールで制作と拡散を一本化します。
          </p>
        </div>

        {/* Open gate comparison */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-dark relative overflow-hidden p-6 md:p-8">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-cyan">
              OPEN GATE · MULTI-ASPECT
            </p>
            <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
              オープンゲート撮影・マルチアスペクト戦略
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              フルサイズ3:2センサー全面記録により、1回の撮影から「Web・YouTube用
              16:9」と「TikTok・Reels用 9:16」を同時生成。再撮コストを抑え、現場拘束時間・人件費を約50%削減します。
            </p>

            <div className="mt-8 space-y-5" role="img" aria-label="拘束時間・人件費の比較バーチャート">
              {comparison.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex flex-wrap items-end justify-between gap-2 text-sm">
                    <span className="text-white/85">{row.label}</span>
                    <span className="font-mono text-[0.7rem] tracking-wide text-gold">
                      {row.note}
                    </span>
                  </div>
                  <div className="bar-track rounded-sm">
                    <motion.div
                      className={`bar-fill ${row.tone}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[0.6rem] tracking-[0.14em] text-white/45">
                  OUTPUT A
                </p>
                <p className="mt-2 text-sm font-medium">16:9 Web / YouTube</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[0.6rem] tracking-[0.14em] text-cyan">
                  OUTPUT B
                </p>
                <p className="mt-2 text-sm font-medium">9:16 TikTok / Reels</p>
              </div>
            </div>
          </article>

          {/* AI pipeline */}
          <article className="glass-dark relative overflow-hidden p-6 md:p-8">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-gold">
              AI PREVIS × AI VFX
            </p>
            <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
              AIパイプライン
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              合意形成の高速化とポスプロ圧縮を、制作部の進行管理と直結させます。
            </p>
            <ol className="mt-8 space-y-4">
              {pipeline.map((item, i) => (
                <li key={item.step} className="relative flex gap-4">
                  {i < pipeline.length - 1 ? (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-gradient-to-b from-gold/50 to-cyan/40"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-gold/50 bg-ink font-mono text-[0.65rem] text-gold">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium tracking-wide">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>

        {/* Map tool mock */}
        <article
          id="products"
          className="glass-dark relative mt-6 overflow-hidden p-6 md:p-8"
        >
          <div className="hud-corners absolute inset-0" aria-hidden>
            <span className="tl" />
            <span className="tr" />
            <span className="bl" />
            <span className="br" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.16em] text-cyan">
                PRODUCTION DX
              </p>
              <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
                AB式ロケ地図ツクール
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
                現場の制作部が開発したロケーション＆許認可マップ。ロケハン写真、控室・待機、電源車、道路使用許可エリアを地図上で共有し、香盤表・台本と連動した準備を支えます。
              </p>
              <a
                href={companyInfo.mapToolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline mt-8 border-gold/70 text-white hover:bg-gold/15 hover:text-white"
              >
                map.almondbagger.com を開く
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Interactive-looking UI mock */}
            <div
              className="relative overflow-hidden border border-white/12 bg-[#0d0f14]"
              aria-label="地図ツクールのUIモックアップ"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[0.6rem] tracking-[0.12em] text-white/50">
                <span>LOC MAP STUDIO · DEMO</span>
                <span className="text-cyan">LAYER ON</span>
              </div>
              <div className="relative aspect-[16/10] tech-grid-dark">
                <div className="absolute inset-6 border border-dashed border-white/15" />
                {/* mock pins */}
                <span className="absolute left-[22%] top-[38%] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(184,150,80,0.6)]" />
                <span className="absolute left-[48%] top-[52%] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(14,165,233,0.55)]" />
                <span className="absolute left-[63%] top-[28%] h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="absolute left-[35%] top-[68%] h-2 w-2 rounded-full bg-white/70" />
                {/* mock region */}
                <div className="absolute left-[40%] top-[40%] h-16 w-28 rotate-[-8deg] border border-cyan/35 bg-cyan/10" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {["ロケハン", "控室", "許可エリア", "待機"].map((layer) => (
                    <span
                      key={layer}
                      className="border border-white/15 bg-black/40 px-2 py-1 font-mono text-[0.58rem] tracking-wide text-white/70 backdrop-blur-sm"
                    >
                      {layer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
