"use client";

import { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** header | footer | hero で既定サイズを切替 */
  variant?: "header" | "footer" | "hero" | "default";
};

const LOGO_SRC = "/会社LOGO-trim.png";
const LOGO_FALLBACK = "/会社LOGO.png";

const VARIANT_CLASS: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header:
    "h-16 w-auto max-w-[240px] sm:h-[4.25rem] sm:max-w-[280px] md:h-24 md:max-w-[320px] lg:h-28 lg:max-w-[360px]",
  footer:
    "h-16 w-auto max-w-[280px] md:h-20 md:max-w-[320px] lg:h-24 lg:max-w-[360px]",
  hero: "h-12 w-auto max-w-[220px] md:h-14 md:max-w-[260px]",
  default:
    "h-14 w-auto max-w-[260px] md:h-16 md:max-w-[300px]",
};

export default function BrandLogo({
  className,
  imageClassName,
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  const [src, setSrc] = useState(LOGO_SRC);

  return (
    <span className={cn("group relative inline-flex items-center", className)}>
      <span className="absolute -inset-1 rounded-2xl bg-brand/0 blur-lg transition duration-300 group-hover:bg-brand/10 md:-inset-2" />
      <Image
        src={src}
        alt={`${companyInfo.shortName} ロゴ`}
        width={720}
        height={540}
        priority={priority}
        sizes="(max-width:640px) 220px, (max-width:768px) 260px, (max-width:1024px) 300px, 360px"
        onError={() => {
          if (src !== LOGO_FALLBACK) setSrc(LOGO_FALLBACK);
        }}
        className={cn(
          "relative object-contain object-left drop-shadow-sm transition duration-300 group-hover:scale-[1.02]",
          VARIANT_CLASS[variant],
          imageClassName,
        )}
      />
    </span>
  );
}
