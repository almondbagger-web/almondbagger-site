"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
} & MotionProps;

const offset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
};

/** Reliable fade/slide — always visible (avoids IntersectionObserver blank screens) */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...rest
}: RevealProps) {
  const from = offset[direction];
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...from }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Bounce({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("inline-block", className)}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ConfettiDecor() {
  return null;
}
