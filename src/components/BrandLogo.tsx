"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={cn("inline-flex flex-col leading-none", className)}>
        <span className="font-display text-xs font-bold tracking-widest text-pink">
          STUDIO
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
          ALMOND<span className="text-pink">BAGGER</span>
        </span>
      </span>
    );
  }

  return (
    <span className={cn("group relative inline-flex items-center", className)}>
      <span className="absolute -inset-2 rounded-2xl bg-pink/0 blur-lg transition duration-300 group-hover:bg-pink/25" />
      <Image
        src="/logo.png"
        alt="ALMONDBAGGER"
        width={280}
        height={160}
        priority={priority}
        onError={() => setFailed(true)}
        className={cn(
          "relative h-11 w-auto object-contain drop-shadow-sm transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_8px_20px_rgba(236,72,153,0.45)] md:h-12",
          imageClassName,
        )}
      />
    </span>
  );
}
