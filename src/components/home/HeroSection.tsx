"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { heroContent } from "@/content/home";
import { company } from "@/content/company";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-20 lg:pt-44 lg:pb-28">
      <GenerativeBackground
        className="absolute inset-0 z-0"
        density={0.7}
        accentRatio={0.14}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.slow, ease: motionEasing }}
        >
          <p className="label-mono section-label-accent justify-center text-accent-strong">
            AI-native product engineering
          </p>
          <Heading level="h1" className="mt-4 heading-hero mx-auto max-w-4xl text-balance">
            {heroContent.titleComponents.prefix}
            <span className="text-gradient-spectral">{heroContent.titleComponents.accent}</span>
            {heroContent.titleComponents.suffix}
          </Heading>
          <Text className="mx-auto mt-8 max-w-2xl description-standard text-lg">
            {heroContent.subtitle}
          </Text>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group" href="/contact">
              {heroContent.cta}
              <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary" href="/work">
              {company.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
