"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Service } from "@/content/services";
import { cn, withBasePath } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceCTAProps = {
  service?: Service;
  className?: string;
};

export function ServiceCTA({ service, className }: ServiceCTAProps) {
  const reducedMotion = useReducedMotion();
  const title =
    service?.callToAction?.title ?? "Ready to build with confidence?";
  const description =
    service?.callToAction?.description ??
    "Let's discuss your project and how we can help your team ship with confidence.";

  return (
    <section
      id={service ? "contact" : undefined}
      className={cn("border-t border-border py-20 lg:py-28", className)}
    >
      <Container>
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: motionDurations.slow,
            ease: motionEasing,
          }}
          className="max-w-3xl"
        >
          <h2 className="heading-section text-balance">{title}</h2>
          <p className="mt-6 text-xl text-muted">{description}</p>
          <div className="mt-10">
            <Button href={withBasePath("/contact")} size="lg">
              Get in touch
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
