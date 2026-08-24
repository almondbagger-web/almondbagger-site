"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Neo-Samurai cinematic depth layer.
 * Opacity kept deliberately low (≈0.04–0.08) so it never overpowers content.
 */
export default function SamuraiBackground({
  className,
  intensity = "page",
}: {
  className?: string;
  intensity?: "page" | "section";
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        tx = nx * 12;
        ty = ny * 8;
        root.style.setProperty("--px", `${tx.toFixed(2)}px`);
        root.style.setProperty("--py", `${ty.toFixed(2)}px`);
        root.style.setProperty("--px2", `${(tx * 0.45).toFixed(2)}px`);
        root.style.setProperty("--py2", `${(ty * 0.45).toFixed(2)}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const op = intensity === "page" ? "opacity-[0.07]" : "opacity-[0.055]";

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden contain-paint",
        className,
      )}
      style={
        {
          "--px": "0px",
          "--py": "0px",
          "--px2": "0px",
          "--py2": "0px",
        } as React.CSSProperties
      }
    >
      {/* God rays */}
      <div className={cn("samurai-godrays absolute inset-0", op)} />

      {/* Brush mist / ink splash */}
      <div
        className={cn("samurai-brush-mist absolute inset-0", op)}
        style={{
          transform: "translate3d(var(--px2), var(--py2), 0)",
        }}
      />

      {/* Samurai silhouette */}
      <svg
        viewBox="0 0 400 600"
        className={cn(
          "absolute bottom-[-4%] right-[2%] h-[78%] w-auto max-w-[42vw] samurai-parallax-far",
          op,
        )}
        fill="currentColor"
        style={{ color: "#0f172a" }}
      >
        <path d="M198 42c22 8 38 34 34 62-6 38-36 52-52 48-28-6-42-40-34-70 8-28 30-46 52-40z" />
        <path d="M168 108c-8 18-6 40 4 58l18 28 24-8c16-20 18-48 6-70-14 4-36 0-52-8z" />
        <path d="M190 190c-40 12-70 52-66 110 4 48 36 86 78 98 44-14 72-56 74-104 2-52-28-90-68-104l-18 0z" />
        <path d="M172 392c-18 40-22 88-14 132h28c-4-42 2-86 16-124-8-4-20-6-30-8z" />
        <path d="M228 396c12 36 18 80 12 128h28c6-46 2-92-12-132-8 2-18 4-28 4z" />
        <path d="M248 210c48 8 86 18 118 8 8-2 10 8 2 12-36 16-84 14-120 6l0-26z" opacity="0.55" />
        {/* katana suggestion */}
        <path
          d="M268 218 L392 86"
          stroke="url(#bladeGrad)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="bladeGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.95" />
          </linearGradient>
        </defs>
      </svg>

      {/* Slash glow trails */}
      <div
        className={cn("samurai-slash absolute left-[-10%] top-[18%] h-px w-[70%]", op)}
        style={{ transform: "translate3d(var(--px), var(--py), 0) rotate(-18deg)" }}
      />
      <div
        className={cn(
          "samurai-slash samurai-slash--delay absolute right-[-8%] top-[58%] h-px w-[55%]",
          op,
        )}
        style={{
          transform: "translate3d(var(--px2), var(--py2), 0) rotate(12deg)",
        }}
      />

      {/* Floating particles */}
      <div className={cn("samurai-particles absolute inset-0", op)} />
    </div>
  );
}
