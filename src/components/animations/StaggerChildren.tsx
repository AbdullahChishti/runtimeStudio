"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

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
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : stagger,
          },
        },
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
        hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
