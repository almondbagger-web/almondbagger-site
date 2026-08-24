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
    color: "#10b981",
    width: 2.4,
    duration: 2.1,
    delay: 0,
    dash: 220,
    opacity: 0.95,
    wave: 1,
  },
  {
    d: "M -40 820 C 140 900, 280 640, 440 700 S 640 420, 820 480 S 1020 200, 1220 160 S 1400 20, 1560 -40",
    color: "#22c55e",
    width: 1.7,
    duration: 2.8,
    delay: 0.35,
    dash: 260,
    opacity: 0.75,
    wave: 2,
  },
  {
    d: "M -80 880 C 100 760, 240 820, 380 640 S 580 560, 760 400 S 960 320, 1160 140 S 1340 60, 1500 -20",
    color: "#eab308",
    width: 2.2,
    duration: 2.3,
    delay: 0.12,
    dash: 200,
    opacity: 0.9,
    wave: 3,
  },
  {
    d: "M -20 800 C 160 860, 300 680, 460 740 S 660 460, 840 520 S 1040 240, 1240 180 S 1420 30, 1580 -50",
    color: "#facc15",
    width: 1.6,
    duration: 3.2,
    delay: 0.55,
    dash: 300,
    opacity: 0.7,
    wave: 1,
  },
  {
    d: "M -50 840 C 130 700, 270 760, 420 580 S 600 500, 780 360 S 980 260, 1180 100 S 1380 20, 1540 -35",
    color: "#f97316",
    width: 2.3,
    duration: 1.95,
    delay: 0.2,
    dash: 180,
    opacity: 0.92,
    wave: 2,
  },
  {
    d: "M -70 900 C 110 780, 250 840, 400 660 S 600 580, 780 420 S 980 300, 1180 150 S 1360 50, 1520 -10",
    color: "#fb923c",
    width: 1.5,
    duration: 2.9,
    delay: 0.7,
    dash: 280,
    opacity: 0.72,
    wave: 3,
  },
  {
    d: "M -30 790 C 150 870, 290 650, 450 710 S 650 450, 830 510 S 1030 220, 1230 170 S 1410 10, 1570 -45",
    color: "#ec4899",
    width: 2.1,
    duration: 2.15,
    delay: 0.08,
    dash: 210,
    opacity: 0.88,
    wave: 1,
  },
  {
    d: "M -90 870 C 90 750, 230 810, 370 630 S 570 550, 750 390 S 950 290, 1150 130 S 1330 45, 1490 -25",
    color: "#f43f5e",
    width: 1.8,
    duration: 2.6,
    delay: 0.42,
    dash: 250,
    opacity: 0.78,
    wave: 2,
  },
  {
    d: "M -45 830 C 135 710, 275 770, 430 590 S 610 510, 790 350 S 990 250, 1190 110 S 1390 25, 1550 -40",
    color: "#ef4444",
    width: 2.6,
    duration: 1.85,
    delay: 0.05,
    dash: 170,
    opacity: 1,
    wave: 3,
  },
  {
    d: "M -55 850 C 125 730, 265 790, 410 610 S 590 530, 770 370 S 970 270, 1170 120 S 1370 35, 1530 -15",
    color: "#06b6d4",
    width: 2.0,
    duration: 2.45,
    delay: 0.28,
    dash: 230,
    opacity: 0.9,
    wave: 1,
  },
];

const SPARKS: Spark[] = [
  { cx: 320, cy: 680, color: "#10b981", delay: 0.2, duration: 1.6 },
  { cx: 460, cy: 560, color: "#eab308", delay: 0.5, duration: 1.9 },
  { cx: 580, cy: 480, color: "#f97316", delay: 0.15, duration: 1.5 },
  { cx: 700, cy: 400, color: "#ec4899", delay: 0.8, duration: 2.0 },
  { cx: 820, cy: 340, color: "#ef4444", delay: 0.35, duration: 1.7 },
  { cx: 940, cy: 260, color: "#06b6d4", delay: 0.95, duration: 1.8 },
  { cx: 1060, cy: 200, color: "#22c55e", delay: 0.45, duration: 1.4 },
  { cx: 400, cy: 620, color: "#facc15", delay: 1.1, duration: 2.1 },
  { cx: 640, cy: 440, color: "#fb923c", delay: 0.6, duration: 1.55 },
  { cx: 880, cy: 300, color: "#f43f5e", delay: 0.25, duration: 1.85 },
  { cx: 1120, cy: 160, color: "#06b6d4", delay: 0.7, duration: 1.65 },
  { cx: 520, cy: 520, color: "#10b981", delay: 1.3, duration: 1.9 },
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
    intensity === "hero" ? "opacity-[0.38]" : "opacity-[0.28]";

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
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="1.6" result="blur" />
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
            <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
            <stop offset="42%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.38" />
          </linearGradient>

          <mask id={`fag-mask-${uid}`}>
            <rect width="1440" height="900" fill={`url(#fag-fade-${uid})`} />
          </mask>

          {LINES.map((line, i) => (
            <marker
              key={`mk-${i}`}
              id={`fag-arrow-${uid}-${i}`}
              viewBox="0 0 16 16"
              refX="13"
              refY="8"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M 1 1.5 L 14 8 L 1 14.5 Z"
                fill={line.color}
                stroke={line.color}
                strokeWidth="0.5"
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
                  "--fag-wave-delay": `${line.delay * 0.35}s`,
                } as CSSProperties
              }
            >
              <path
                d={line.d}
                stroke={line.color}
                strokeWidth={line.width * 2.2}
                strokeOpacity={0.12}
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
                <circle r="4" fill={line.color} opacity="0.95">
                  <animateMotion
                    dur={`${line.duration}s`}
                    begin={`${line.delay}s`}
                    repeatCount="indefinite"
                    path={line.d}
                    rotate="auto"
                  />
                </circle>
                <path d="M -6 -4 L 8 0 L -6 4 Z" fill={line.color} opacity="0.9">
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
                r={3.2}
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
                d={`M ${spark.cx} ${spark.cy - 6.5} L ${spark.cx + 1.5} ${spark.cy - 1.5} L ${spark.cx + 6.5} ${spark.cy} L ${spark.cx + 1.5} ${spark.cy + 1.5} L ${spark.cx} ${spark.cy + 6.5} L ${spark.cx - 1.5} ${spark.cy + 1.5} L ${spark.cx - 6.5} ${spark.cy} L ${spark.cx - 1.5} ${spark.cy - 1.5} Z`}
                fill={spark.color}
                style={
                  {
                    "--fag-spark-delay": `${spark.delay + 0.12}s`,
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
