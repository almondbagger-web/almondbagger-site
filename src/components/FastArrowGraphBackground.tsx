"use client";

import { useId, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ArrowLine = {
  d: string;
  color: string;
  width: number;
  duration: number;
  delay: number;
  dash: number;
  opacity: number;
  wave: 1 | 2 | 3;
};

type Spark = {
  cx: number;
  cy: number;
  color: string;
  delay: number;
  duration: number;
};

const LINES: ArrowLine[] = [
  {
    d: "M -120 760 C 40 940, 170 540, 300 860 S 510 420, 660 760 S 900 220, 1060 580 S 1220 80, 1310 -120 S 1390 -330, 1450 -620",
    color: "#059669",
    width: 10,
    duration: 1.7,
    delay: 0,
    dash: 260,
    opacity: 1,
    wave: 1,
  },
  {
    d: "M -100 700 C 60 900, 180 500, 320 830 S 560 360, 700 730 S 940 180, 1090 560 S 1240 30, 1330 -150 S 1415 -340, 1480 -640",
    color: "#22c55e",
    width: 8,
    duration: 2.2,
    delay: 0.18,
    dash: 300,
    opacity: 0.92,
    wave: 2,
  },
  {
    d: "M -140 810 C 20 980, 160 570, 310 910 S 520 430, 680 780 S 920 240, 1080 620 S 1240 120, 1335 -90 S 1420 -300, 1495 -590",
    color: "#ca8a04",
    width: 9,
    duration: 1.9,
    delay: 0.08,
    dash: 250,
    opacity: 0.98,
    wave: 3,
  },
  {
    d: "M -110 740 C 70 940, 210 530, 350 850 S 560 390, 720 760 S 970 230, 1120 600 S 1260 110, 1350 -130 S 1430 -320, 1500 -610",
    color: "#eab308",
    width: 8,
    duration: 2.8,
    delay: 0.3,
    dash: 320,
    opacity: 0.88,
    wave: 1,
  },
  {
    d: "M -130 780 C 50 960, 190 550, 340 880 S 540 410, 700 790 S 950 250, 1110 630 S 1270 130, 1360 -100 S 1440 -280, 1520 -560",
    color: "#ea580c",
    width: 11,
    duration: 1.6,
    delay: 0.12,
    dash: 240,
    opacity: 1,
    wave: 2,
  },
  {
    d: "M -115 830 C 40 1000, 170 600, 320 920 S 520 460, 690 820 S 940 280, 1100 650 S 1265 150, 1360 -80 S 1445 -260, 1530 -540",
    color: "#f97316",
    width: 8,
    duration: 2.4,
    delay: 0.36,
    dash: 290,
    opacity: 0.9,
    wave: 3,
  },
  {
    d: "M -95 700 C 85 900, 220 490, 360 830 S 575 350, 730 710 S 980 170, 1130 540 S 1275 20, 1365 -160 S 1450 -350, 1525 -660",
    color: "#db2777",
    width: 9,
    duration: 1.8,
    delay: 0.05,
    dash: 235,
    opacity: 0.96,
    wave: 1,
  },
  {
    d: "M -150 850 C 20 1020, 160 610, 320 940 S 540 470, 700 840 S 950 300, 1110 670 S 1270 170, 1365 -60 S 1450 -240, 1535 -520",
    color: "#e11d48",
    width: 8,
    duration: 2.6,
    delay: 0.24,
    dash: 305,
    opacity: 0.94,
    wave: 2,
  },
  {
    d: "M -105 760 C 70 940, 210 520, 360 860 S 560 390, 730 760 S 980 210, 1140 590 S 1290 60, 1380 -140 S 1460 -330, 1540 -640",
    color: "#ef4444",
    width: 12,
    duration: 1.5,
    delay: 0.02,
    dash: 220,
    opacity: 1,
    wave: 3,
  },
  {
    d: "M -125 790 C 45 970, 180 560, 330 890 S 540 420, 700 780 S 950 240, 1110 610 S 1260 100, 1355 -120 S 1440 -310, 1515 -610",
    color: "#0891b2",
    width: 9,
    duration: 2.1,
    delay: 0.15,
    dash: 275,
    opacity: 0.97,
    wave: 1,
  },
];

const SPARKS: Spark[] = [
  { cx: 260, cy: 760, color: "#059669", delay: 0.08, duration: 0.8 },
  { cx: 380, cy: 620, color: "#ca8a04", delay: 0.2, duration: 0.9 },
  { cx: 520, cy: 740, color: "#ea580c", delay: 0.32, duration: 0.84 },
  { cx: 640, cy: 520, color: "#db2777", delay: 0.44, duration: 0.95 },
  { cx: 760, cy: 680, color: "#ef4444", delay: 0.56, duration: 0.82 },
  { cx: 880, cy: 430, color: "#0891b2", delay: 0.68, duration: 0.92 },
  { cx: 980, cy: 590, color: "#22c55e", delay: 0.15, duration: 0.78 },
  { cx: 1080, cy: 350, color: "#eab308", delay: 0.27, duration: 0.98 },
  { cx: 1180, cy: 490, color: "#f97316", delay: 0.39, duration: 0.86 },
  { cx: 1260, cy: 240, color: "#e11d48", delay: 0.51, duration: 0.9 },
  { cx: 1330, cy: 40, color: "#0891b2", delay: 0.63, duration: 0.88 },
  { cx: 1410, cy: -180, color: "#059669", delay: 0.75, duration: 1.0 },
];

type Props = {
  className?: string;
  mode?: "fixed" | "absolute";
  intensity?: "subtle" | "hero";
};

export default function FastArrowGraphBackground({
  className,
  mode = "fixed",
  intensity = "subtle",
}: Props) {
  const uid = useId().replace(/:/g, "");
  const opacityClass =
    intensity === "hero" ? "opacity-[0.44]" : "opacity-[0.34]";

  return (
    <div
      aria-hidden
      className={cn(
        "fast-arrow-graph pointer-events-none overflow-hidden",
        mode === "fixed" ? "fixed inset-0" : "absolute inset-0",
        opacityClass,
        className,
      )}
    >
      <svg
        className="fast-arrow-graph__svg gpu-layer absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={`fag-glow-${uid}`}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id={`fag-fade-${uid}`}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#fff" stopOpacity="0.22" />
            <stop offset="42%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.42" />
          </linearGradient>

          <mask id={`fag-mask-${uid}`}>
            <rect width="1440" height="900" fill={`url(#fag-fade-${uid})`} />
          </mask>

          {LINES.map((line, i) => (
            <marker
              key={`mk-${i}`}
              id={`fag-arrow-${uid}-${i}`}
              viewBox="0 0 20 20"
              refX="17"
              refY="10"
              markerWidth="14"
              markerHeight="14"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M 1 2 L 18 10 L 1 18 Z"
                fill={line.color}
                stroke={line.color}
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </marker>
          ))}
        </defs>

        <g mask={`url(#fag-mask-${uid})`} filter={`url(#fag-glow-${uid})`}>
          {LINES.map((line, i) => (
            <g
              key={`line-${i}`}
              className={cn(
                "fast-arrow-graph__wave",
                `fast-arrow-graph__wave--${line.wave}`,
              )}
              style={
                {
                  "--fag-wave-delay": `${line.delay * 0.25}s`,
                } as CSSProperties
              }
            >
              <path
                d={line.d}
                stroke={line.color}
                strokeWidth={line.width * 1.8}
                strokeOpacity={0.16}
                strokeLinecap="round"
              />
              <path
                className="fast-arrow-graph__stroke"
                d={line.d}
                stroke={line.color}
                strokeWidth={line.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd={`url(#fag-arrow-${uid}-${i})`}
                pathLength={1000}
                style={
                  {
                    "--fag-dash": line.dash,
                    "--fag-duration": `${line.duration}s`,
                    "--fag-delay": `${line.delay}s`,
                    opacity: line.opacity,
                  } as CSSProperties
                }
              />
              <g>
                <circle r="11" fill={line.color} opacity="0.98">
                  <animateMotion
                    dur={`${line.duration}s`}
                    begin={`${line.delay}s`}
                    repeatCount="indefinite"
                    path={line.d}
                    rotate="auto"
                  />
                </circle>
                <path d="M -14 -9 L 16 0 L -14 9 Z" fill={line.color} opacity="0.95">
                  <animateMotion
                    dur={`${line.duration}s`}
                    begin={`${line.delay}s`}
                    repeatCount="indefinite"
                    path={line.d}
                    rotate="auto"
                  />
                </path>
              </g>
            </g>
          ))}
        </g>

        <g className="fast-arrow-graph__sparks">
          {SPARKS.map((spark, i) => (
            <g key={`spark-${i}`}>
              <circle
                className="fast-arrow-graph__spark"
                cx={spark.cx}
                cy={spark.cy}
                r={9}
                fill={spark.color}
                style={
                  {
                    "--fag-spark-delay": `${spark.delay}s`,
                    "--fag-spark-duration": `${spark.duration}s`,
                  } as CSSProperties
                }
              />
              <path
                className="fast-arrow-graph__star"
                d={`M ${spark.cx} ${spark.cy - 14} L ${spark.cx + 3} ${spark.cy - 3} L ${spark.cx + 14} ${spark.cy} L ${spark.cx + 3} ${spark.cy + 3} L ${spark.cx} ${spark.cy + 14} L ${spark.cx - 3} ${spark.cy + 3} L ${spark.cx - 14} ${spark.cy} L ${spark.cx - 3} ${spark.cy - 3} Z`}
                fill={spark.color}
                style={
                  {
                    "--fag-spark-delay": `${spark.delay + 0.06}s`,
                    "--fag-spark-duration": `${spark.duration}s`,
                  } as CSSProperties
                }
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
