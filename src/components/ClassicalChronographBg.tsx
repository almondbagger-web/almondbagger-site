import { cn } from "@/lib/utils";

type ClassicalChronographBgProps = {
  className?: string;
  tone?: "hero" | "analytics";
};

/**
 * 精密時計の文字盤 × レンズ絞り × 黄金比リングの極細SVG装飾
 */
export default function ClassicalChronographBg({
  className,
  tone = "hero",
}: ClassicalChronographBgProps) {
  const opacity = tone === "hero" ? "opacity-[0.16]" : "opacity-[0.2]";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] overflow-hidden",
        opacity,
        className,
      )}
      aria-hidden
    >
      {/* Outer astronomical ring — 120s */}
      <div className="absolute left-1/2 top-[58%] h-[min(92vw,720px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 md:left-[72%] md:top-1/2">
        <svg
          viewBox="0 0 800 800"
          className="chrono-spin-120 h-full w-full"
          fill="none"
        >
          <circle
            cx="400"
            cy="400"
            r="310"
            stroke="url(#chrono-gold)"
            strokeWidth="0.6"
            strokeDasharray="2 10"
          />
          <circle
            cx="400"
            cy="400"
            r="286"
            stroke="url(#chrono-rose)"
            strokeWidth="0.45"
            opacity="0.7"
          />
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
            const major = i % 5 === 0;
            const r1 = major ? 268 : 276;
            const r2 = 290;
            return (
              <line
                key={`t-${i}`}
                x1={400 + Math.cos(a) * r1}
                y1={400 + Math.sin(a) * r1}
                x2={400 + Math.cos(a) * r2}
                y2={400 + Math.sin(a) * r2}
                stroke={major ? "#B89650" : "#C68B83"}
                strokeWidth={major ? 0.9 : 0.4}
                opacity={major ? 0.85 : 0.45}
              />
            );
          })}
          <circle
            cx="400"
            cy="400"
            r="177"
            stroke="#B89650"
            strokeWidth="0.5"
            opacity="0.55"
          />
          <circle
            cx="400"
            cy="400"
            r="109"
            stroke="#D4884A"
            strokeWidth="0.4"
            opacity="0.45"
          />
          <defs>
            <linearGradient id="chrono-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B89650" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4884A" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="chrono-rose" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C68B83" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#B89650" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Iris / aperture — reverse 90s */}
      <div className="absolute left-[8%] top-[18%] h-[min(42vw,280px)] w-[min(42vw,280px)] opacity-80 md:left-[6%] md:top-[22%]">
        <svg
          viewBox="0 0 400 400"
          className="chrono-spin-90-rev h-full w-full"
          fill="none"
        >
          <circle cx="200" cy="200" r="148" stroke="#B89650" strokeWidth="0.55" />
          <circle
            cx="200"
            cy="200"
            r="118"
            stroke="#C68B83"
            strokeWidth="0.4"
            opacity="0.7"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const a0 = (i / 8) * Math.PI * 2;
            const a1 = ((i + 0.72) / 8) * Math.PI * 2;
            const outer = 145;
            const inner = 52;
            const x1 = 200 + Math.cos(a0) * outer;
            const y1 = 200 + Math.sin(a0) * outer;
            const x2 = 200 + Math.cos(a1) * outer;
            const y2 = 200 + Math.sin(a1) * outer;
            const x3 = 200 + Math.cos(a1) * inner;
            const y3 = 200 + Math.sin(a1) * inner;
            const x4 = 200 + Math.cos(a0) * inner;
            const y4 = 200 + Math.sin(a0) * inner;
            return (
              <path
                key={`blade-${i}`}
                d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                stroke="#D4884A"
                strokeWidth="0.45"
                fill="rgba(184,150,80,0.03)"
              />
            );
          })}
          <circle
            cx="200"
            cy="200"
            r="28"
            stroke="#FFF8E7"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Small sub-dial */}
      <div className="absolute bottom-[12%] right-[10%] hidden h-36 w-36 md:block">
        <svg
          viewBox="0 0 200 200"
          className="chrono-spin-90 h-full w-full"
          fill="none"
        >
          <circle cx="100" cy="100" r="78" stroke="#B89650" strokeWidth="0.5" />
          <circle
            cx="100"
            cy="100"
            r="62"
            stroke="#C68B83"
            strokeWidth="0.35"
            opacity="0.65"
          />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            return (
              <line
                key={`sd-${i}`}
                x1={100 + Math.cos(a) * 54}
                y1={100 + Math.sin(a) * 54}
                x2={100 + Math.cos(a) * 68}
                y2={100 + Math.sin(a) * 68}
                stroke="#B89650"
                strokeWidth="0.7"
              />
            );
          })}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="48"
            stroke="#D4884A"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="2.2" fill="#B89650" />
        </svg>
      </div>
    </div>
  );
}
