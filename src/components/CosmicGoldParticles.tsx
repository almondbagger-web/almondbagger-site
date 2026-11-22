"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Intensity = "hero" | "dark" | "light";
type Tone = "gold" | "platinum" | "rose" | "amber";

type CosmicGoldParticlesProps = {
  intensity?: Intensity;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  phase: number;
  speed: number;
  tone: Tone;
};

const CONFIG: Record<
  Intensity,
  { count: number; alphaMax: number; speed: number }
> = {
  hero: { count: 72, alphaMax: 0.52, speed: 0.22 },
  dark: { count: 56, alphaMax: 0.38, speed: 0.16 },
  light: { count: 36, alphaMax: 0.16, speed: 0.1 },
};

const TONE_RGBA: Record<Tone, string> = {
  gold: "212, 175, 55",
  platinum: "255, 248, 231",
  rose: "198, 139, 131",
  amber: "212, 136, 74",
};

function pickTone(): Tone {
  const r = Math.random();
  if (r < 0.55) return "gold";
  if (r < 0.78) return "platinum";
  if (r < 0.9) return "rose";
  return "amber";
}

export default function CosmicGoldParticles({
  intensity = "hero",
  className,
}: CosmicGoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cfg = CONFIG[intensity];
    let particles: Particle[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.55 + Math.random() * 1.85,
      vy: -(0.05 + Math.random() * cfg.speed),
      vx: (Math.random() - 0.5) * 0.08,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.012,
      tone: pickTone(),
    });

    const paint = (p: Particle, a: number) => {
      const rgb = TONE_RGBA[p.tone];
      const alpha =
        p.tone === "rose" || p.tone === "amber" ? a * 0.72 : a;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        cfg.count * Math.min(1.25, Math.max(0.55, (w * h) / 1_200_000)),
      );
      particles = Array.from({ length: count }, spawn);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const a = cfg.alphaMax * (0.35 + 0.65 * Math.abs(Math.sin(p.phase)));
        paint(p, a);
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.phase) * 0.04;
        p.phase += p.speed;

        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;

        const flicker =
          0.25 + 0.75 * (0.5 + 0.5 * Math.sin(p.phase * 1.4));
        paint(p, cfg.alphaMax * flicker);
      }
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    if (reduceMotion) {
      drawStatic();
    } else {
      raf = window.requestAnimationFrame(tick);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] h-full w-full",
        className,
      )}
    />
  );
}
