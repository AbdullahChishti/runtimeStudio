"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = shouldReduceMotion
    ? { opacity: 1, y: 0, x: 0 }
    : {
        up: { opacity: 0, y: 24 },
        down: { opacity: 0, y: -24 },
        none: { opacity: 0, y: 0 },
      }[direction];

  return (
    <motion.div
      className={className}
      initial={offset}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
