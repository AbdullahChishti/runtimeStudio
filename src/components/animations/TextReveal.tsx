"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  motionDurations,
  motionEasing,
  reducedMotionTransition,
} from "./motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  /** Word indices (0-based) to render with accent color */
  accentIndices?: number[];
  accentClassName?: string;
};

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  accentIndices = [],
  accentClassName = "text-accent-indigo",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const accentSet = new Set(accentIndices);

  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={accentSet.has(index) ? accentClassName : undefined}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${accentSet.has(index) ? accentClassName : ""}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: motionDurations.default,
              delay: delay + index * 0.04,
              ease: motionEasing,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
