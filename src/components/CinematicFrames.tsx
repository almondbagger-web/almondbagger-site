"use client";

import { cn } from "@/lib/utils";

const STILLS = [
  {
    id: "cyber",
    title: "Cyberpunk Tokyo",
    tag: "AI Still · 8K",
    gradient:
      "linear-gradient(145deg, #0f172a 0%, #1e3a8a 35%, #7c3aed 62%, #06b6d4 100%)",
    overlay:
      "radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.35), transparent 45%)",
  },
  {
    id: "jidaigeki",
    title: "Neo Jidaigeki",
    tag: "Cine Scope",
    gradient:
      "linear-gradient(160deg, #1c1917 0%, #4c1d95 40%, #0e7490 75%, #f59e0b 100%)",
    overlay:
      "radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.3), transparent 50%)",
  },
  {
    id: "cm",
    title: "High-End CM Flash",
    tag: "Trailer Frame",
    gradient:
      "linear-gradient(125deg, #111827 0%, #312e81 40%, #be185d 70%, #f59e0b 100%)",
    overlay:
      "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.2), transparent 55%)",
  },
] as const;

export function CinematicStillGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {STILLS.map((s) => (
        <article
          key={s.id}
          className="cine-scope-card group relative overflow-hidden"
        >
          <div
            className="cine-scope-media absolute inset-0"
            style={{ background: s.gradient }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen"
            style={{ background: s.overlay }}
          />
          <div className="cine-scope-haze pointer-events-none absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/55 to-transparent p-4 pt-10">
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
              {s.tag}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              {s.title}
            </p>
          </div>
          <div className="cine-scope-glow pointer-events-none absolute inset-0" />
        </article>
      ))}
    </div>
  );
}

export function CinematicHeroFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("cine-scope-card group relative overflow-hidden", className)}>
      <div className="cine-scope-media absolute inset-0">{children}</div>
      <div className="cine-scope-haze pointer-events-none absolute inset-0 z-[1]" />
      <div className="cine-scope-glow pointer-events-none absolute inset-0 z-[1]" />
    </div>
  );
}
