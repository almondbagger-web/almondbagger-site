"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  mode?: "fixed" | "absolute";
  intensity?: "subtle" | "hero";
};

/**
 * GPU-only background animation. No JS animation loops — pure CSS
 * stroke-dashoffset on static SVG paths with hardware-accelerated transforms.
 */
export default function FastArrowGraphBackground({
  className,
  mode = "fixed",
  intensity = "subtle",
}: Props) {
  const opacityClass =
    intensity === "hero" ? "opacity-[0.42]" : "opacity-[0.32]";

  return (
    <div
      aria-hidden
      className={cn(
        "fag pointer-events-none overflow-hidden",
        mode === "fixed" ? "fixed inset-0" : "absolute inset-0",
        opacityClass,
        className,
      )}
    >
      <svg
        className="fag__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="fag-glow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="fag-a1" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#ef4444" /></marker>
          <marker id="fag-a2" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#059669" /></marker>
          <marker id="fag-a3" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#eab308" /></marker>
          <marker id="fag-a4" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#ea580c" /></marker>
          <marker id="fag-a5" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#db2777" /></marker>
          <marker id="fag-a6" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#0891b2" /></marker>
          <marker id="fag-a7" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#22c55e" /></marker>
          <marker id="fag-a8" viewBox="0 0 20 20" refX="16" refY="10" markerWidth="12" markerHeight="12" orient="auto" markerUnits="strokeWidth">
            <path d="M2 3 L17 10 L2 17Z" fill="#e11d48" /></marker>
        </defs>

        <g filter="url(#fag-glow)">
          {/* Line 1 — Signature Red */}
          <path className="fag__line fag__line--1" d="M-120 760 C40 940,170 540,300 860 S510 420,660 760 S900 220,1060 580 S1220 80,1310-120 S1390-330,1450-620" stroke="#ef4444" strokeWidth="11" markerEnd="url(#fag-a1)" pathLength="1000" />
          {/* Line 2 — Neon Green */}
          <path className="fag__line fag__line--2" d="M-100 700 C60 900,180 500,320 830 S560 360,700 730 S940 180,1090 560 S1240 30,1330-150 S1415-340,1480-640" stroke="#059669" strokeWidth="9" markerEnd="url(#fag-a2)" pathLength="1000" />
          {/* Line 3 — Sunshine Yellow */}
          <path className="fag__line fag__line--3" d="M-140 810 C20 980,160 570,310 910 S520 430,680 780 S920 240,1080 620 S1240 120,1335-90 S1420-300,1495-590" stroke="#eab308" strokeWidth="10" markerEnd="url(#fag-a3)" pathLength="1000" />
          {/* Line 4 — Energetic Orange */}
          <path className="fag__line fag__line--4" d="M-110 740 C70 940,210 530,350 850 S560 390,720 760 S970 230,1120 600 S1260 110,1350-130 S1430-320,1500-610" stroke="#ea580c" strokeWidth="9" markerEnd="url(#fag-a4)" pathLength="1000" />
          {/* Line 5 — Hot Pink */}
          <path className="fag__line fag__line--5" d="M-130 780 C50 960,190 550,340 880 S540 410,700 790 S950 250,1110 630 S1270 130,1360-100 S1440-280,1520-560" stroke="#db2777" strokeWidth="10" markerEnd="url(#fag-a5)" pathLength="1000" />
          {/* Line 6 — Hyper Cyan */}
          <path className="fag__line fag__line--6" d="M-95 700 C85 900,220 490,360 830 S575 350,730 710 S980 170,1130 540 S1275 20,1365-160 S1450-350,1525-660" stroke="#0891b2" strokeWidth="9" markerEnd="url(#fag-a6)" pathLength="1000" />
          {/* Line 7 — Bright Green */}
          <path className="fag__line fag__line--7" d="M-150 850 C20 1020,160 610,320 940 S540 470,700 840 S950 300,1110 670 S1270 170,1365-60 S1450-240,1535-520" stroke="#22c55e" strokeWidth="8" markerEnd="url(#fag-a7)" pathLength="1000" />
          {/* Line 8 — Crimson */}
          <path className="fag__line fag__line--8" d="M-105 760 C70 940,210 520,360 860 S560 390,730 760 S980 210,1140 590 S1290 60,1380-140 S1460-330,1540-640" stroke="#e11d48" strokeWidth="10" markerEnd="url(#fag-a8)" pathLength="1000" />
        </g>
      </svg>
    </div>
  );
}
