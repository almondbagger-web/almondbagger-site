"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
} & MotionProps;

const offset = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: 56, y: 0 },
  right: { x: -56, y: 0 },
};

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
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
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
      className={cn(className)}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 16 }}
    >
      {children}
    </motion.div>
  );
}

const confetti = [
  { top: "8%", left: "6%", size: 10, color: "#ec4899", delay: 0 },
  { top: "18%", left: "88%", size: 14, color: "#06b6d4", delay: 0.4 },
  { top: "42%", left: "92%", size: 8, color: "#facc15", delay: 0.2 },
  { top: "70%", left: "4%", size: 12, color: "#a855f7", delay: 0.6 },
  { top: "12%", left: "48%", size: 9, color: "#10b981", delay: 0.3 },
  { top: "78%", left: "78%", size: 11, color: "#f43f5e", delay: 0.5 },
];

export function ConfettiDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {confetti.map((c, i) => (
        <motion.span
          key={i}
          className="confetti-dot"
          style={{
            top: c.top,
            left: c.left,
            width: c.size,
            height: c.size,
            background: c.color,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 25, -10, 0] }}
          transition={{
            duration: 3.2 + i * 0.25,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
