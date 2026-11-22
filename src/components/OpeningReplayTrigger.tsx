"use client";

import { requestIntroReplay } from "@/lib/cinematic-intro";
import { cn } from "@/lib/utils";

type OpeningReplayTriggerProps = {
  className?: string;
  variant?: "header" | "footer";
};

export default function OpeningReplayTrigger({
  className,
  variant = "footer",
}: OpeningReplayTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => requestIntroReplay()}
      className={cn(
        "inline-flex items-center gap-1.5 font-display font-extrabold tracking-[0.14em] transition-colors",
        variant === "footer"
          ? "text-[0.7rem] text-gold hover:text-white"
          : "text-[0.58rem] text-muted hover:text-gold-deep",
        className,
      )}
      aria-label="オープニングを再生"
    >
      ▶ OPENING REPLAY
    </button>
  );
}
