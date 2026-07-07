"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Service, accentClasses } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceDetailHeroProps = {
  service: Service;
};

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const accent = accentClasses[service.accent];
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative border-b border-border pt-28 pb-16 lg:pt-40 lg:pb-24",
        accent.heroWash,
      )}
    >
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
          <Link
            href="/services"
            className="label-mono text-muted transition-colors duration-200 hover:text-foreground"
          >
            ← All services
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className={cn("label-mono text-xl", accent.text)}>
              Service {service.number}
            </span>
            <span className={cn("h-px w-12", accent.dot)} aria-hidden="true" />
          </div>

          <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl">
            {service.intro}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
