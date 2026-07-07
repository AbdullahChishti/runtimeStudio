"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import {
  motionDurations,
  motionEasing,
  reducedMotionTransition,
  staggerContainerVariants,
  staggerItemVariants,
  viewportDefaults,
} from "./motion";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
}: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportDefaults, margin: "-60px" }}
      variants={{
        hidden: staggerContainerVariants.hidden,
        visible: shouldReduceMotion
          ? {}
          : staggerContainerVariants.visible(stagger),
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : staggerItemVariants.hidden,
        visible: shouldReduceMotion
          ? { opacity: 1, y: 0, transition: reducedMotionTransition }
          : staggerItemVariants.visible,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItemAccent({
  children,
  className,
  accent = "indigo",
}: {
  children: ReactNode;
  className?: string;
  accent?: "indigo" | "coral" | "teal";
}) {
  const shouldReduceMotion = useReducedMotion();
  const accentBorder = {
    indigo: "border-l-accent-indigo",
    coral: "border-l-accent-coral",
    teal: "border-l-accent-teal",
  }[accent];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1, y: 0, borderLeftWidth: 2 }
          : { ...staggerItemVariants.hidden, borderLeftWidth: 0 },
        visible: shouldReduceMotion
          ? { opacity: 1, y: 0, borderLeftWidth: 2, transition: reducedMotionTransition }
          : {
              ...staggerItemVariants.visible,
              borderLeftWidth: 2,
              transition: {
                ...staggerItemVariants.visible.transition,
                borderLeftWidth: {
                  duration: motionDurations.fast,
                  ease: motionEasing,
                },
              },
            },
      }}
    >
      <div className={`border-l-2 pl-4 ${accentBorder}`}>{children}</div>
    </motion.div>
  );
}
