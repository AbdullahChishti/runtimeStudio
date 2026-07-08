"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ctaContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function CallToActionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--accent-subtle),transparent_70%)]"
      />
      <Container className="relative z-10 text-center">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: motionDurations.slow, ease: motionEasing }}
        >
          <h2 className="heading-section mx-auto max-w-2xl text-balance">
            {ctaContent.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl description-standard">
            {ctaContent.subtitle}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg" className="group">
              {ctaContent.cta}
              <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
