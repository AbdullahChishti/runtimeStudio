"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { StatusIndicator } from "@/components/ui/Badge";
import { company } from "@/content/company";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <GenerativeBackground
        className="absolute inset-0 z-0"
        density={0.4}
        accentRatio={0.08}
        speed={0.6}
        trail={0.92}
      />

      <Container className="relative z-10 flex min-h-[35vh] flex-col justify-center py-20 lg:py-28">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.slow, ease: motionEasing }}
          className="flex flex-col gap-8"
        >
          <StatusIndicator label="Accepting projects" status="active" color="teal" />

          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="heading-hero text-balance">{company.hero.headline}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
              {company.hero.supporting}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={withBasePath("/contact")} size="lg" className="group">
              {company.hero.primaryCta}
              <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={withBasePath("/work")} variant="secondary" size="lg">
              {company.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
