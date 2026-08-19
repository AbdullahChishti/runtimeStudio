"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function CallToActionSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 lg:py-36 border-t border-border">
      <Container>
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: motionDurations.default, ease: motionEasing }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h2 className="heading-section text-foreground max-w-2xl text-balance">
            Ready to get your business noticed?
          </h2>
          <p className="text-lg text-muted max-w-xl">
            Let&apos;s discuss your project. We respond within one business day
            with clear next steps.
          </p>
          <Button href={withBasePath("/contact")} size="lg" className="mt-4">
            Get in touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
