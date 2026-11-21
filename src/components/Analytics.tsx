"use client";

import { motion } from "framer-motion";

const openGateRows = [
  {
    label: "従来手法（横・縦の2回撮影）",
    bars: [
      { name: "撮影工数", width: 100, value: "100%", tone: "bg-white/25" },
      { name: "納品フォーマット", width: 50, value: "1種", tone: "bg-white/20" },
    ],
  },
  {
    label: "ALMONDBAGGER式（オープンゲート一括撮影）",
    bars: [
      {
        name: "撮影工数",
        width: 50,
        value: "−50%削減",
        tone: "bg-gradient-to-r from-gold to-cyan",
      },
      {
        name: "納品アセット",
        width: 100,
        value: "200%倍増（16:9＋9:16）",
        tone: "bg-gradient-to-r from-cyan to-gold",
      },
    ],
  },
] as const;

const snsSteps = [
  {
    step: "01",
    title: "冒頭0〜3秒のフック設計",
    body: "縦型ショートドラマ（FOD SHORT）やバズMVで実証した、最初の数秒で離脱を防ぐ構成設計。",
  },
  {
    step: "02",
    title: "マルチプラットフォーム同時展開",
    body: "YouTube × TikTok × Reels へ、アスペクトと尺を最適化したアセットを同時に展開。",
  },
  {
    step: "03",
    title: "AI音楽・AIアニメーション融合",
    body: "『いいねの大盤振る舞い』『aiを持て』のように、AIクリエイティブと制作部進行を一本化。",
  },
] as const;

const aiPipeline = [
  { step: "01", title: "AI Previs", body: "動く絵コンテで企画意図を共有し、合意形成を高速化。" },
  { step: "02", title: "現場統括", body: "香盤・許認可・ロケ導線を制作部が管理し、Previsを現場判断へ直結。" },
  { step: "03", title: "AI VFX", body: "ロケ映り込みのAIバレ消しでポスプロを圧縮。" },
  { step: "04", title: "SNS展開", body: "16:9 / 9:16 を同時納品し、配信・ショートへ最短で接続。" },
] as const;

export default function Analytics() {
  return (
    <section
      id="analytics"
      aria-labelledby="analytics-heading"
      className="relative scroll-mt-24 overflow-hidden bg-cinema text-white section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-70" />
      <div className="aurora-layer" aria-hidden>
        <div className="aurora-blob right-[-10%] top-0 h-80 w-80 bg-cyan/15" />
        <div className="aurora-blob bottom-0 left-[-8%] h-72 w-72 bg-gold/12" />
      </div>

      <div className="relative mx-auto max-w-6xl section-pad">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            LOGIC · ANALYTICS · SNS
          </p>
          <h2
            id="analytics-heading"
            className="mt-4 max-w-3xl font-serif text-2xl font-medium tracking-wide md:text-3xl lg:text-4xl"
          >
            制作効率とSNS展開を、
            <br className="hidden sm:block" />
            ロジックで可視化する。
          </h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
            ダミー指標ではなく、現場とマーケが共有できる設計思想を図解します。オープンゲート撮影、SNSインプレッション設計、AIパイプライン。
          </p>
        </div>

        {/* Open Gate */}
        <article className="glass-dark relative mt-14 overflow-hidden p-6 md:p-8">
          <div className="hud-corners absolute inset-0" aria-hidden>
            <span className="tl" />
            <span className="tr" />
            <span className="bl" />
            <span className="br" />
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-cyan">
            OPEN GATE MULTIASPECT ANALYTICS
          </p>
          <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
            オープンゲート縦横同時撮影
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
            フルサイズ3:2センサー全面記録により、1回の撮影から「YouTube・HP用
            16:9（横）」と「TikTok・Reels・Shorts用
            9:16（縦）」を画質劣化なく同時切り出し。再撮コストを抑え、納品アセットを増やします。
          </p>

          <div
            className="mt-8 space-y-8"
            role="img"
            aria-label="オープンゲート撮影の工数・納品比較チャート"
          >
            {openGateRows.map((row) => (
              <div key={row.label}>
                <p className="mb-4 text-sm font-medium text-white/85">{row.label}</p>
                <div className="space-y-4">
                  {row.bars.map((bar) => (
                    <div key={bar.name}>
                      <div className="mb-1.5 flex flex-wrap justify-between gap-2 text-xs text-white/55">
                        <span>{bar.name}</span>
                        <span className="font-mono tracking-wide text-gold">
                          {bar.value}
                        </span>
                      </div>
                      <div className="bar-track rounded-sm bg-white/10">
                        <motion.div
                          className={`bar-fill ${bar.tone}`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          style={{ width: `${bar.width}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-[0.6rem] tracking-[0.14em] text-white/45">
                OUTPUT A
              </p>
              <p className="mt-2 text-sm font-medium">16:9 YouTube / HP</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-[0.6rem] tracking-[0.14em] text-cyan">
                OUTPUT B
              </p>
              <p className="mt-2 text-sm font-medium">9:16 TikTok / Reels / Shorts</p>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* SNS */}
          <article className="glass-dark relative overflow-hidden p-6 md:p-8">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-gold">
              SNS IMPRESSION &amp; RETENTION
            </p>
            <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
              SNS拡散・アルゴリズム設計
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              FOD SHORT実績とバズMV（『aiを持て』『いいねの大盤振る舞い』）で実証した、3段階の設計思想です。
            </p>
            <ol className="mt-8 space-y-5">
              {snsSteps.map((item, i) => (
                <li key={item.step} className="relative flex gap-4">
                  {i < snsSteps.length - 1 ? (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%-6px)] w-px bg-gradient-to-b from-gold/50 to-cyan/40"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-gold/50 bg-cinema font-mono text-[0.65rem] text-gold">
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

          {/* AI pipeline */}
          <article className="glass-dark relative overflow-hidden p-6 md:p-8">
            <div className="hud-corners absolute inset-0" aria-hidden>
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-cyan">
              AI PREVIS × AI VFX
            </p>
            <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
              AIプロダクションパイプライン
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              動く絵コンテによる企画合意の高速化と、AIバレ消しによるポスプロ圧縮を制作部進行と直結します。
            </p>
            <ol className="mt-8 space-y-4">
              {aiPipeline.map((item, i) => (
                <li key={item.step} className="relative flex gap-4">
                  {i < aiPipeline.length - 1 ? (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan/45 to-gold/35"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-cyan/45 bg-cinema font-mono text-[0.65rem] text-cyan">
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
      </div>
    </section>
  );
}
