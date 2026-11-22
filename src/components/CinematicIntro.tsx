"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  INTRO_REPLAY_EVENT,
  INTRO_SEEN_KEY,
  INTRO_SOUND_KEY,
} from "@/lib/cinematic-intro";
import { cn } from "@/lib/utils";

const DURATION_MS = 2800;

function playCinematicHit(ctx: AudioContext) {
  const now = ctx.currentTime;

  const sub = ctx.createOscillator();
  const subGain = ctx.createGain();
  sub.type = "sine";
  sub.frequency.setValueAtTime(48, now);
  sub.frequency.exponentialRampToValueAtTime(28, now + 0.55);
  subGain.gain.setValueAtTime(0.0001, now);
  subGain.gain.exponentialRampToValueAtTime(0.85, now + 0.02);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
  sub.connect(subGain);
  subGain.connect(ctx.destination);
  sub.start(now);
  sub.stop(now + 1.15);

  const mid = ctx.createOscillator();
  const midGain = ctx.createGain();
  mid.type = "triangle";
  mid.frequency.setValueAtTime(110, now);
  mid.frequency.exponentialRampToValueAtTime(55, now + 0.4);
  midGain.gain.setValueAtTime(0.0001, now);
  midGain.gain.exponentialRampToValueAtTime(0.35, now + 0.015);
  midGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
  mid.connect(midGain);
  midGain.connect(ctx.destination);
  mid.start(now);
  mid.stop(now + 0.75);

  const chordFreqs = [130.81, 164.81, 196.0];
  chordFreqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + 0.05);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.12 - i * 0.02, now + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now + 0.04);
    osc.stop(now + 1.65);
  });

  const noiseLen = Math.floor(ctx.sampleRate * 0.18);
  const buffer = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < noiseLen; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / noiseLen);
  }
  const noise = ctx.createBufferSource();
  const noiseFilter = ctx.createBiquadFilter();
  const noiseGain = ctx.createGain();
  noise.buffer = buffer;
  noiseFilter.type = "lowpass";
  noiseFilter.frequency.setValueAtTime(400, now);
  noiseGain.gain.setValueAtTime(0.22, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noise.start(now);
  noise.stop(now + 0.2);
}

export default function CinematicIntro() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);
  const mountedRef = useRef(true);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const ensureAudio = useCallback(async () => {
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctx) return null;
      if (!audioCtxRef.current) audioCtxRef.current = new Ctx();
      if (audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  const playSoundIfEnabled = useCallback(async () => {
    let enabled = false;
    try {
      enabled = sessionStorage.getItem(INTRO_SOUND_KEY) === "1";
    } catch {
      enabled = false;
    }
    if (!enabled) return;
    const ctx = await ensureAudio();
    if (!ctx) return;
    try {
      playCinematicHit(ctx);
    } catch {
      // never throw
    }
  }, [ensureAudio]);

  const finish = useCallback(() => {
    clearTimers();
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      // ignore
    }
    if (mountedRef.current) {
      setActive(false);
      setPhase(0);
      document.body.style.overflow = "";
    }
  }, []);

  const startSequence = useCallback(
    async (attemptSound: boolean) => {
      clearTimers();
      setActive(true);
      setPhase(0);
      document.body.style.overflow = "hidden";

      if (attemptSound) {
        await playSoundIfEnabled();
      }

      const t = (ms: number, fn: () => void) => {
        timersRef.current.push(window.setTimeout(fn, ms));
      };

      t(80, () => setPhase(1));
      t(500, () => setPhase(2));
      t(1000, () => setPhase(3));
      t(2200, () => setPhase(4));
      t(DURATION_MS, () => finish());
    },
    [finish, playSoundIfEnabled],
  );

  useEffect(() => {
    mountedRef.current = true;
    try {
      setSoundOn(sessionStorage.getItem(INTRO_SOUND_KEY) === "1");
    } catch {
      // ignore
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isHome = window.location.pathname === "/";

    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    } catch {
      seen = false;
    }

    // 初回トップのみ自動再生（本編HTMLは常にDOM上に存在）
    if (!reduce && isHome && !seen) {
      void startSequence(false);
    }

    const onReplay = () => {
      void startSequence(true);
    };
    window.addEventListener(INTRO_REPLAY_EVENT, onReplay);

    return () => {
      mountedRef.current = false;
      clearTimers();
      document.body.style.overflow = "";
      window.removeEventListener(INTRO_REPLAY_EVENT, onReplay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSound = async () => {
    const next = !soundOn;
    setSoundOn(next);
    try {
      sessionStorage.setItem(INTRO_SOUND_KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
    if (next) {
      const ctx = await ensureAudio();
      if (ctx && active) {
        try {
          playCinematicHit(ctx);
        } catch {
          // ignore
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="cinematic-intro"
          role="dialog"
          aria-modal="true"
          aria-label="ALMONDBAGGER オープニング"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#040406]"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF1E27] to-transparent"
            initial={{ top: "8%", opacity: 0 }}
            animate={
              phase >= 1
                ? { top: ["8%", "92%"], opacity: [0, 1, 1, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 28px 2px rgba(229,9,20,0.75)" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-[#E50914] to-transparent"
            initial={{ left: "12%", opacity: 0 }}
            animate={
              phase >= 1
                ? { left: ["12%", "88%"], opacity: [0, 0.9, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, delay: 0.08, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 22px 1px rgba(255,30,39,0.55)" }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(229,9,20,0.22), transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.55 }}
              animate={
                phase >= 4
                  ? { opacity: 0, scale: 3.5, filter: "blur(6px)" }
                  : phase >= 2
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.55 }
              }
              transition={
                phase >= 4
                  ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
              }
              className="select-none font-display text-[clamp(4.5rem,18vw,8.5rem)] font-black leading-none tracking-tighter"
              style={{
                background:
                  "linear-gradient(165deg, #FF4A52 0%, #E50914 42%, #8B0008 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 35px rgba(229,9,20,0.85))",
              }}
            >
              AB
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={
                phase >= 4
                  ? { opacity: 0, y: -8 }
                  : phase >= 3
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3"
            >
              <p className="font-display text-[clamp(1.1rem,4.2vw,2rem)] font-black tracking-[0.28em] text-[#F3F5F8]">
                ALMOND
                <span className="text-[#E50914]">BAGGER</span>
              </p>
              <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />
              <p className="mt-3 font-display text-[0.62rem] font-extrabold tracking-[0.32em] text-white/70 sm:text-[0.72rem]">
                PRODUCTION DIVISION × AI STUDIO
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-6 right-5 z-20 flex items-center gap-2 sm:bottom-8 sm:right-8 sm:gap-3">
            <button
              type="button"
              onClick={() => void toggleSound()}
              className={cn(
                "border px-3 py-2 font-display text-[0.62rem] font-extrabold tracking-[0.16em] transition-colors",
                soundOn
                  ? "border-[#E50914]/70 bg-[#E50914]/15 text-[#FF1E27]"
                  : "border-white/25 text-white/55 hover:border-white/45 hover:text-white",
              )}
              aria-pressed={soundOn}
            >
              {soundOn ? "🔊 SOUND ON" : "🔊 SOUND"}
            </button>
            <button
              type="button"
              onClick={finish}
              className="border border-white/30 bg-white/5 px-3 py-2 font-display text-[0.62rem] font-extrabold tracking-[0.16em] text-white/80 backdrop-blur-sm transition-colors hover:border-white/55 hover:text-white"
            >
              SKIP INTRO ↗
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
