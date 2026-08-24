"use client";

import { cn } from "@/lib/utils";

/** Compass + mon crest abstracted studio clock */
export default function StudioClock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "studio-card relative flex flex-col items-center gap-4 p-6 md:p-7",
        className,
      )}
    >
      <div className="relative mx-auto aspect-square w-36 md:w-44">
        <div className="absolute inset-0 rounded-full border border-foreground/10 bg-gradient-to-br from-white via-crystal to-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_32px_rgba(15,23,42,0.06)]" />

        {/* Mon / crest ring */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-[8%] opacity-30"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            className="clock-hand--minute"
            style={{ transformOrigin: "50% 50%" }}
          />
          <path
            d="M50 18 L54 42 L78 42 L58 56 L66 80 L50 66 L34 80 L42 56 L22 42 L46 42 Z"
            fill="none"
            stroke="#5b21b6"
            strokeWidth="0.7"
          />
        </svg>

        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-[44%] w-px origin-bottom bg-foreground/12"
            style={{ transform: `translate(-50%, -100%) rotate(${i * 30}deg)` }}
          />
        ))}
        <div className="absolute inset-[20%] rounded-full border border-gold/30" />

        <span className="clock-hand clock-hand--hour absolute left-1/2 top-[30%] h-[20%] w-[2px] -translate-x-1/2 rounded-full bg-deep-blue" />
        <span className="clock-hand clock-hand--minute absolute left-1/2 top-[18%] h-[32%] w-[1.5px] -translate-x-1/2 rounded-full bg-violet" />
        <span className="clock-hand clock-hand--second absolute left-1/2 top-[14%] h-[36%] w-px -translate-x-1/2 rounded-full bg-cyan" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(245,158,11,0.6)]" />
      </div>
      <div className="text-center">
        <p className="eyebrow gem-gradient">24/7 Production Engine</p>
        <p className="mt-1 font-display text-lg font-bold tracking-tight text-foreground">
          Always On Set
        </p>
        <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-muted">
          TC 00:00:00 — LIVE
        </p>
      </div>
    </div>
  );
}
