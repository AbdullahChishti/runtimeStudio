"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import {
  fadeInVariants,
  motionDurations,
  motionEasing,
  reducedMotionTransition,
  viewportDefaults,
} from "./motion";

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

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : fadeInVariants.hidden(direction);

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportDefaults}
      transition={
        shouldReduceMotion
          ? reducedMotionTransition
          : {
              duration: motionDurations.slow,
              delay,
              ease: motionEasing,
            }
      }
    >
      {children}
    </motion.div>
  );
}
