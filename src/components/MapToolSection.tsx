"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bus,
  Database,
  MapPinned,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Reveal } from "@/components/Motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "ロケ撮影許認可マップ",
    body: "警察・道路使用・自治体管轄境界・規制線を地図上に可視化。申請範囲を現場と事務で同じ画面に揃えます。",
    chip: "tag-chip--red",
  },
  {
    icon: Bus,
    title: "搬入・待機・電源\nレイアウト",
    body: "ロケバス・電源車・機材車の駐車位置と動線をその場でプロット。搬入順と待機場所の食い違いを防ぎます。",
    chip: "tag-chip--lime",
  },
  {
    icon: Database,
    title: "フィルムコミッション\n連携データベース",
    body: "八王子エリアを中心に、撮影推奨ロケ地と控室情報を蓄積。公認連携の現場知を次回撮影へ引き継ぎます。",
    chip: "tag-chip--cyan",
  },
  {
    icon: Share2,
    title: "共有＆書き出し",
    body: "香盤やロケのしおりにそのまま貼れる高解像度マップ画像、PDF、共有URLを出力。チーム全体で同時に見られます。",
    chip: "tag-chip--purple",
  },
] as const;

const layers = [
  { id: "location", label: "八王子ロケ地", dot: "bg-red-500", ring: "ring-red-400/40" },
  { id: "room", label: "控室", dot: "bg-cyan-400", ring: "ring-cyan-300/40" },
  { id: "route", label: "車両動線", dot: "bg-lime-400", ring: "ring-lime-300/40" },
  { id: "permit", label: "許認可申請済", dot: "bg-amber-400", ring: "ring-amber-300/40" },
] as const;

type LayerId = (typeof layers)[number]["id"];

const pins: { id: LayerId; label: string; top: string; left: string }[] = [
  { id: "location", label: "高尾山口", top: "40%", left: "20%" },
  { id: "location", label: "甲州街道", top: "50%", left: "56%" },
  { id: "room", label: "控室A", top: "72%", left: "28%" },
  { id: "route", label: "ロケバス", top: "62%", left: "36%" },
  { id: "route", label: "電源車", top: "46%", left: "48%" },
  { id: "permit", label: "道路使用", top: "34%", left: "74%" },
];

export default function MapToolSection() {
  const [active, setActive] = useState<LayerId[]>(layers.map((layer) => layer.id));

  const toggle = (id: LayerId) => {
    setActive((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const layerOn = (id: LayerId) => active.includes(id);

  return (
    <section
      id="map-tool"
      className="relative scroll-mt-44 overflow-hidden bg-surface/70 section-y md:scroll-mt-48"
    >
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="lux-badge">プロダクションDX / 自社ツール</span>
            <span className="tag-chip tag-chip--cyan">Location Map Studio</span>
            <span className="tag-chip tag-chip--red">地図ツクール for Production</span>
          </div>
          <p className="eyebrow mt-5">地図ツクール by ALMONDBAGGER</p>
          <h2 className="mt-4 max-w-4xl font-display text-lg font-bold leading-snug tracking-tight min-[420px]:text-2xl md:text-4xl">
            <span className="block">現場を知る制作部だから作れた、</span>
            <span className="mesh-text block">映画・ドラマ・CM特化型</span>
            <span className="block">ロケーション＆許認可マップツール</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted md:text-lg [word-break:auto-phrase]">
            八王子フィルムコミッション公認連携と20年の現場統括ノウハウを凝縮。ロケハン写真、控室、電源車、待機場所、駐車導線、道路使用許可エリアを地図上にピン留め・レイヤー化し、チーム全体でリアルタイム共有します。香盤表・台本・地図が直結する、次世代の制作部DXです。
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05} direction="left">
                <article className="lux-card card-lift flex h-full flex-col p-5">
                  <span className={cn("tag-chip w-fit", feature.chip)}>
                    0{index + 1}
                  </span>
                  <span className="theme-icon mt-4">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 whitespace-pre-line text-base font-semibold leading-snug">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08} direction="right">
            <div
              className="cinema-frame overflow-hidden rounded-2xl shadow-2xl"
              role="region"
              aria-label="地図ツクールの画面プレビュー"
            >
              <span className="cinema-frame__sprocket cinema-frame__sprocket--left" aria-hidden />
              <span className="cinema-frame__sprocket cinema-frame__sprocket--right" aria-hidden />
              <div className="relative mx-3 my-3 min-h-[32rem] overflow-hidden rounded-md border border-white/10 bg-[#070b14]">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_38%,rgba(6,182,212,0.2),transparent_42%),radial-gradient(circle_at_74%_34%,rgba(251,191,36,0.12),transparent_32%),radial-gradient(circle_at_68%_70%,rgba(225,29,72,0.18),transparent_36%)]" />
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <g fill="rgba(148,163,184,0.08)" stroke="rgba(226,232,240,0.2)" strokeWidth="0.35">
                    <rect x="8" y="18" width="16" height="12" rx="0.6" />
                    <rect x="28" y="22" width="12" height="16" rx="0.6" />
                    <rect x="58" y="16" width="18" height="9" rx="0.6" />
                    <rect x="12" y="58" width="18" height="14" rx="0.6" />
                    <rect x="64" y="52" width="16" height="18" rx="0.6" />
                    <rect x="36" y="68" width="20" height="11" rx="0.6" />
                  </g>
                  <path
                    d="M0 84 C 22 76, 40 92, 62 80 S 88 88, 100 74"
                    fill="none"
                    stroke="rgba(34,211,238,0.35)"
                    strokeWidth="3.2"
                  />
                  <path
                    d="M4 48 H96 M22 10 V92 M70 12 V90"
                    fill="none"
                    stroke="rgba(226,232,240,0.28)"
                    strokeWidth="0.7"
                  />
                  {layerOn("permit") ? (
                    <polygon
                      points="60,22 90,26 86,50 56,44"
                      fill="rgba(251,191,36,0.14)"
                      stroke="rgba(251,191,36,0.9)"
                      strokeWidth="0.7"
                      strokeDasharray="1.6 1.1"
                    />
                  ) : null}
                  {layerOn("route") ? (
                    <path
                      d="M16 74 C 28 68, 34 58, 42 54 S 52 44, 62 40 S 74 30, 84 28"
                      fill="none"
                      stroke="rgba(163,230,53,0.92)"
                      strokeWidth="1.15"
                      strokeDasharray="2.2 1.3"
                      strokeLinecap="round"
                    />
                  ) : null}
                </svg>
                <p className="pointer-events-none absolute left-[6%] top-[45%] z-[1] font-mono text-[10px] tracking-[0.18em] text-white/35">
                  甲州街道
                </p>
                <p className="pointer-events-none absolute bottom-[10%] left-[8%] z-[1] font-mono text-[10px] tracking-[0.16em] text-cyan-200/45">
                  浅川
                </p>

                <div className="relative z-[2] flex items-start justify-between gap-3 p-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] text-lime-300">
                      REC · HACHIOJI UNIT
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Location Map Studio
                    </p>
                  </div>
                  <p className="font-mono text-xs tabular-nums text-white/70">
                    01:14:22:08
                  </p>
                </div>

                <div className="relative z-[2] flex flex-wrap gap-2 px-4">
                  {layers.map((layer) => {
                    const on = active.includes(layer.id);
                    return (
                      <button
                        key={layer.id}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(layer.id)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition",
                          on
                            ? "border-white/30 bg-white/10 text-white"
                            : "border-white/10 bg-black/30 text-white/40",
                        )}
                      >
                        <span className={cn("h-1.5 w-1.5 rounded-full", layer.dot)} />
                        {layer.label}
                      </button>
                    );
                  })}
                </div>

                {pins.map((pin) => {
                  const layer = layers.find((item) => item.id === pin.id);
                  if (!layer || !active.includes(pin.id)) return null;
                  return (
                    <div
                      key={`${pin.id}-${pin.label}`}
                      className="absolute z-[2] -translate-x-1/2 -translate-y-full"
                      style={{ top: pin.top, left: pin.left }}
                    >
                      <span
                        className={cn(
                          "mb-1 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white ring-2",
                          layer.ring,
                        )}
                      >
                        <MapPinned className="h-3 w-3" />
                        {pin.label}
                      </span>
                      <span
                        className={cn(
                          "mx-auto block h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor]",
                          layer.dot,
                        )}
                      />
                    </div>
                  );
                })}

                <div className="absolute right-4 bottom-14 z-[3] max-w-[11rem] rounded-lg border border-white/10 bg-black/65 px-3 py-2.5 text-[10px] leading-relaxed text-white/75 backdrop-blur-sm">
                  <p className="font-mono tracking-[0.16em] text-lime-300">CALL SHEET · 12</p>
                  <p className="mt-1 font-semibold text-white">SCENE 12 / DAY EXT</p>
                  <p className="mt-1">入 07:30 · 香盤 3-A</p>
                  <p>{layerOn("permit") ? "道路使用 · 申請済" : "許認可レイヤー OFF"}</p>
                </div>

                {active.length === 0 ? (
                  <p className="absolute inset-x-8 top-1/2 z-[2] -translate-y-1/2 text-center text-xs text-white/55">
                    レイヤーを選ぶと、ピン・動線・許可エリアが表示されます。
                  </p>
                ) : null}

                <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between border-t border-white/10 bg-black/55 px-4 py-3 text-[11px] text-white/75 backdrop-blur-sm">
                  <span>LAYERS {active.length}/4 · LIVE SHARE</span>
                  <span className="font-mono tracking-wider">PDF / URL READY</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("almond:plan", {
                  detail: "地図ツクール（デモ相談）",
                }),
              );
            }}
          >
            地図ツクールについて問い合わせる / デモ相談
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://map.almondbagger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            ツールを試してみる
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
