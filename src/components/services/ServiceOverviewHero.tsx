"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { motionEasing, motionDurations } from "@/components/animations/motion";

export function ServiceOverviewHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative border-b border-border pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
      <Container>
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDurations.slow,
            ease: motionEasing,
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="status-dot status-dot--indigo" aria-hidden="true" />
            <span className="label-mono text-muted">Services</span>
          </div>
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Specialised expertise for{" "}
            <span className="text-accent-indigo italic">ambitious</span>{" "}
            engineering teams.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
            We partner with senior leaders to solve complex technical challenges,
            improve engineering velocity, and build systems that scale with confidence.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
