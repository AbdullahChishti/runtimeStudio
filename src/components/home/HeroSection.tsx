"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/company";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <Container className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center py-24 lg:py-36 text-center">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.slow, ease: motionEasing }}
          className="flex flex-col items-center gap-8"
        >
          <p className="label-mono text-muted tracking-widest">
            Runtime Studio
          </p>

          <h1 className="heading-hero max-w-4xl text-balance">
            {company.hero.headline}
          </h1>

          <p className="max-w-2xl text-lg text-muted text-pretty">
            {company.hero.supporting}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button href={withBasePath("/work")} size="lg" className="group">
              {company.hero.primaryCta}
            </Button>
            <Button href={withBasePath("/services")} variant="secondary" size="lg">
              {company.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
