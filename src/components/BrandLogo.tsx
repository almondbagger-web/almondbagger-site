"use client";

import { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const LOGO_SRC = "/会社LOGO.png";
const LOGO_FALLBACK = "/logo.png";

export default function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  const [src, setSrc] = useState(LOGO_SRC);

  return (
    <span className={cn("group relative inline-flex items-center", className)}>
      <span className="absolute -inset-2 rounded-2xl bg-brand/0 blur-lg transition duration-300 group-hover:bg-brand/10" />
      <Image
        src={src}
        alt={`${companyInfo.shortName} ロゴ`}
        width={560}
        height={180}
        priority={priority}
        onError={() => {
          if (src !== LOGO_FALLBACK) setSrc(LOGO_FALLBACK);
        }}
        className={cn(
          "relative h-12 w-auto max-w-[240px] object-contain object-left drop-shadow-sm transition duration-300 group-hover:scale-[1.02] md:h-14 md:max-w-[280px]",
          imageClassName,
        )}
      />
    </span>
  );
}
