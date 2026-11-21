"use client";

import { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "header" | "footer" | "hero" | "default";
};

const LOGO_SRC = "/会社LOGO-trim.png";
const LOGO_FALLBACK = "/会社LOGO.png";

const VARIANT_CLASS: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header: "h-10 w-auto max-w-[200px] sm:h-11 sm:max-w-[220px] md:h-12 md:max-w-[240px]",
  footer: "h-12 w-auto max-w-[220px] md:h-14 md:max-w-[260px]",
  hero: "h-10 w-auto max-w-[200px]",
  default: "h-12 w-auto max-w-[220px]",
};

export default function BrandLogo({
  className,
  imageClassName,
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  const [src, setSrc] = useState(LOGO_SRC);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt={`${companyInfo.shortName} ロゴ`}
        width={720}
        height={540}
        priority={priority}
        sizes="(max-width:640px) 180px, (max-width:768px) 220px, 240px"
        onError={() => {
          if (src !== LOGO_FALLBACK) setSrc(LOGO_FALLBACK);
        }}
        className={cn(
          "object-contain object-left",
          VARIANT_CLASS[variant],
          imageClassName,
        )}
      />
    </span>
  );
}
