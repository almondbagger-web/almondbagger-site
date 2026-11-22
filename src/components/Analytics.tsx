"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ClassicalChronographBg from "@/components/ClassicalChronographBg";
import CosmicGoldParticles from "@/components/CosmicGoldParticles";

const gauges = [
  {
    id: "time",
    label: "現場拘束時間・撮影人員",
    value: "50%",
    caption: "削減",
    detail: "従来の横・縦2回撮影 → オープンゲート1回一括",
    color: "#B89650",
    soft: "rgba(184,150,80,0.18)",
    progress: 50,
  },
  {
    id: "assets",
    label: "納品クリエイティブ資産",
    value: "200%",
    caption: "拡張",
    detail: "Web/YouTube 16:9 ＋ TikTok/Reels 9:16 を同時生成",
    color: "#C68B83",
    soft: "rgba(198,139,131,0.18)",
    progress: 100,
  },
  {
    id: "post",
    label: "ポスプロ・バレ消し工数",
    value: "AI VFX",
    caption: "大幅圧縮",
    detail: "ロケ映り込みのAIバレ消しで仕上げ工程を短縮",
    color: "#D4884A",
    soft: "rgba(212,136,74,0.18)",
    progress: 72,
  },
] as const;

const compareBars = [
  {
    label: "従来手法（横・縦の2回撮影）",
    items: [
      { name: "現場拘束・撮影工数", width: 100, value: "基準 100%", color: "bg-white/20" },
      { name: "納品フォーマット", width: 50, value: "1種", color: "bg-white/15" },
    ],
  },
  {
    label: "ALMONDBAGGER式（オープンゲート3:2全面記録）",
    items: [
      {
        name: "現場拘束・撮影工数",
        width: 50,
        value: "50% 削減",
        color: "bg-gradient-to-r from-[#B89650] to-[#D4884A]",
      },
      {
        name: "納品クリエイティブ資産",
        width: 100,
        value: "200% 拡張（16:9＋9:16）",
        color: "bg-gradient-to-r from-[#C68B83] to-[#B89650]",
      },
    ],
  },
] as const;

const logicSteps = [
  {
    step: "01",
    title: "冒頭0〜3秒のフック設計",
    body: "縦型ショートドラマやバズMVで実証した、最初の数秒で離脱を防ぐ構成設計。",
    accent: "border-[#C68B83]/55 text-[#C68B83]",
    line: "from-[#C68B83]/50 to-[#B89650]/30",
  },
  {
    step: "02",
    title: "マルチフォーマット同時展開",
    body: "YouTube × TikTok × Reels へ、アスペクトと尺を最適化したアセットを同時に展開。",
    accent: "border-[#B89650]/55 text-[#B89650]",
    line: "from-[#B89650]/50 to-[#D4884A]/30",
  },
  {
    step: "03",
    title: "AI Previsによる事前合意形成",
    body: "動く絵コンテで企画意図を共有し、現場前の合意形成とポスプロ圧縮（AI VFX）へ直結。",
    accent: "border-[#D4884A]/55 text-[#D4884A]",
    line: "from-[#D4884A]/40 to-transparent",
  },
] as const;

function DonutGauge({
  progress,
  color,
  soft,
  value,
  caption,
}: {
  progress: number;
  color: string;
  soft: string;
  value: string;
  caption: string;
}) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress / 100);

  return (
    <div className="relative mx-auto h-36 w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3.5"
        />
        <circle
          cx="60"
          cy="60"
          r={52}
          fill="none"
          stroke={soft}
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-display text-2xl font-black tracking-tight text-white">
          {value}
        </span>
        <span className="mt-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-white/50">
          {caption}
        </span>
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <section
      id="analytics"
      aria-labelledby="analytics-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#060913] text-white section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-35" />
      <div className="aurora-layer" aria-hidden>
        <div className="aurora-blob right-[-12%] top-0 h-80 w-80 bg-[#D4884A]/10" />
        <div className="aurora-blob bottom-0 left-[-10%] h-72 w-72 bg-[#C68B83]/08" />
        <div className="aurora-blob left-1/3 top-1/2 h-64 w-64 bg-gold/8" />
      </div>
      <ClassicalChronographBg tone="analytics" />
      <CosmicGoldParticles intensity="dark" />

      <div className="relative z-[2] mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="PRODUCTION ANALYTICS"
          japanese="戦略・ロジック"
          id="analytics-heading"
          tone="dark"
        />
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
          ダミー指標ではなく、現場とマーケが共有できる設計思想を図解します。オープンゲート撮影、インプレッション設計、AIパイプライン。
        </p>

        {/* Chronograph meters */}
        <article className="glass-dark relative mt-14 overflow-hidden p-6 md:p-8">
          <div className="hud-corners absolute inset-0" aria-hidden>
            <span className="tl" />
            <span className="tr" />
            <span className="bl" />
            <span className="br" />
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-gold">
            CHRONOGRAPH · PRODUCTIVITY &amp; COST
          </p>
          <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
            オープンゲート3:2全面記録による最適化
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
            フルサイズ3:2センサー全面記録により、1回の撮影から「YouTube・HP用
            16:9」と「TikTok・Reels・Shorts用
            9:16」を画質劣化なく同時切り出し。再撮コストを抑え、納品アセットを増やします。
          </p>

          <div
            className="mt-10 grid gap-8 sm:grid-cols-3"
            role="img"
            aria-label="生産性・コスト最適化メーター"
          >
            {gauges.map((g) => (
              <div key={g.id} className="text-center">
                <DonutGauge
                  progress={g.progress}
                  color={g.color}
                  soft={g.soft}
                  value={g.value}
                  caption={g.caption}
                />
                <p className="mt-4 text-sm font-medium tracking-wide text-white/90">
                  {g.label}
                </p>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-white/50">
                  {g.detail}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 space-y-8 border-t border-white/10 pt-8"
            role="img"
            aria-label="オープンゲート撮影の比較バーチャート"
          >
            {compareBars.map((row) => (
              <div key={row.label}>
                <p className="mb-4 text-sm font-medium text-white/85">{row.label}</p>
                <div className="space-y-4">
                  {row.items.map((bar) => (
                    <div key={bar.name}>
                      <div className="mb-1.5 flex flex-wrap justify-between gap-2 text-xs text-white/55">
                        <span>{bar.name}</span>
                        <span className="font-mono tracking-wide text-gold">
                          {bar.value}
                        </span>
                      </div>
                      <div className="bar-track rounded-sm bg-white/10">
                        <motion.div
                          className={`bar-fill ${bar.color}`}
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
            <div className="border border-[#B89650]/25 bg-white/[0.04] p-4">
              <p className="font-mono text-[0.6rem] tracking-[0.14em] text-gold">
                OUTPUT A
              </p>
              <p className="mt-2 text-sm font-medium">16:9 YouTube / HP</p>
            </div>
            <div className="border border-[#C68B83]/30 bg-white/[0.04] p-4">
              <p className="font-mono text-[0.6rem] tracking-[0.14em] text-[#C68B83]">
                OUTPUT B
              </p>
              <p className="mt-2 text-sm font-medium">9:16 TikTok / Reels / Shorts</p>
            </div>
          </div>
        </article>

        {/* Impression logic architecture */}
        <article className="glass-dark relative mt-6 overflow-hidden p-6 md:p-8">
          <div className="hud-corners absolute inset-0" aria-hidden>
            <span className="tl" />
            <span className="tr" />
            <span className="bl" />
            <span className="br" />
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-[#C68B83]">
            IMPRESSION &amp; RETENTION LOGIC
          </p>
          <h3 className="mt-4 font-serif text-xl tracking-wide md:text-2xl">
            インプレッション＆視聴維持ロジック
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65">
            フック設計、マルチフォーマット同時展開、AI
            Previsによる事前合意——3段階の知的アーキテクチャです。
          </p>

          <ol className="mt-10 grid gap-0 md:grid-cols-3 md:gap-0">
            {logicSteps.map((item, i) => (
              <li
                key={item.step}
                className="relative border-white/10 px-0 py-6 md:border-l md:px-6 md:py-2 first:md:border-l-0 first:md:pl-0"
              >
                {i < logicSteps.length - 1 ? (
                  <span
                    className={`absolute bottom-0 left-4 top-14 w-px bg-gradient-to-b ${item.line} md:left-auto md:right-0 md:top-8 md:h-px md:w-full md:bg-gradient-to-r`}
                    aria-hidden
                  />
                ) : null}
                <p
                  className={`inline-flex border px-2.5 py-1 font-mono text-[0.62rem] font-extrabold tracking-[0.16em] ${item.accent}`}
                >
                  STEP {item.step}
                </p>
                <p className="mt-4 font-medium tracking-wide text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/58">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
