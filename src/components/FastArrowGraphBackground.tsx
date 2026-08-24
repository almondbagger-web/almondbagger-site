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
    d: "M -60 860 C 120 720, 260 780, 400 620 S 620 520, 780 380 S 980 280, 1180 120 S 1360 40, 1520 -30",
    color: "#059669",
    width: 10,
    duration: 1.15,
    delay: 0,
    dash: 220,
    opacity: 1,
    wave: 1,
  },
  {
    d: "M -40 820 C 140 900, 280 640, 440 700 S 640 420, 820 480 S 1020 200, 1220 160 S 1400 20, 1560 -40",
    color: "#16a34a",
    width: 8,
    duration: 1.45,
    delay: 0.18,
    dash: 260,
    opacity: 0.92,
    wave: 2,
  },
  {
    d: "M -80 880 C 100 760, 240 820, 380 640 S 580 560, 760 400 S 960 320, 1160 140 S 1340 60, 1500 -20",
    color: "#ca8a04",
    width: 9,
    duration: 1.2,
    delay: 0.06,
    dash: 200,
    opacity: 0.98,
    wave: 3,
  },
  {
    d: "M -20 800 C 160 860, 300 680, 460 740 S 660 460, 840 520 S 1040 240, 1240 180 S 1420 30, 1580 -50",
    color: "#eab308",
    width: 8,
    duration: 1.55,
    delay: 0.28,
    dash: 300,
    opacity: 0.88,
    wave: 1,
  },
  {
    d: "M -50 840 C 130 700, 270 760, 420 580 S 600 500, 780 360 S 980 260, 1180 100 S 1380 20, 1540 -35",
    color: "#ea580c",
    width: 11,
    duration: 1.05,
    delay: 0.1,
    dash: 180,
    opacity: 1,
    wave: 2,
  },
  {
    d: "M -70 900 C 110 780, 250 840, 400 660 S 600 580, 780 420 S 980 300, 1180 150 S 1360 50, 1520 -10",
    color: "#f97316",
    width: 8,
    duration: 1.5,
    delay: 0.35,
    dash: 280,
    opacity: 0.9,
    wave: 3,
  },
  {
    d: "M -30 790 C 150 870, 290 650, 450 710 S 650 450, 830 510 S 1030 220, 1230 170 S 1410 10, 1570 -45",
    color: "#db2777",
    width: 9,
    duration: 1.12,
    delay: 0.04,
    dash: 210,
    opacity: 0.96,
    wave: 1,
  },
  {
    d: "M -90 870 C 90 750, 230 810, 370 630 S 570 550, 750 390 S 950 290, 1150 130 S 1330 45, 1490 -25",
    color: "#e11d48",
    width: 8,
    duration: 1.35,
    delay: 0.22,
    dash: 250,
    opacity: 0.94,
    wave: 2,
  },
  {
    d: "M -45 830 C 135 710, 275 770, 430 590 S 610 510, 790 350 S 990 250, 1190 110 S 1390 25, 1550 -40",
    color: "#ef4444",
    width: 12,
    duration: 1.0,
    delay: 0.02,
    dash: 170,
    opacity: 1,
    wave: 3,
  },
  {
    d: "M -55 850 C 125 730, 265 790, 410 610 S 590 530, 770 370 S 970 270, 1170 120 S 1370 35, 1530 -15",
    color: "#0891b2",
    width: 9,
    duration: 1.28,
    delay: 0.14,
    dash: 230,
    opacity: 0.97,
    wave: 1,
  },
];

const SPARKS: Spark[] = [
  { cx: 320, cy: 680, color: "#059669", delay: 0.1, duration: 0.85 },
  { cx: 460, cy: 560, color: "#ca8a04", delay: 0.25, duration: 0.95 },
  { cx: 580, cy: 480, color: "#ea580c", delay: 0.08, duration: 0.78 },
  { cx: 700, cy: 400, color: "#db2777", delay: 0.4, duration: 1.0 },
  { cx: 820, cy: 340, color: "#ef4444", delay: 0.18, duration: 0.88 },
  { cx: 940, cy: 260, color: "#0891b2", delay: 0.48, duration: 0.92 },
  { cx: 1060, cy: 200, color: "#16a34a", delay: 0.22, duration: 0.75 },
  { cx: 400, cy: 620, color: "#eab308", delay: 0.55, duration: 1.05 },
  { cx: 640, cy: 440, color: "#f97316", delay: 0.3, duration: 0.82 },
  { cx: 880, cy: 300, color: "#e11d48", delay: 0.12, duration: 0.9 },
  { cx: 1120, cy: 160, color: "#0891b2", delay: 0.35, duration: 0.86 },
  { cx: 520, cy: 520, color: "#059669", delay: 0.65, duration: 0.98 },
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
