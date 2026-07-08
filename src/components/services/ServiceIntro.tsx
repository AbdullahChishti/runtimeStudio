"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface ServiceIntroProps {
  service: Service;
}

export function ServiceIntro({ service }: ServiceIntroProps) {
  const styles = accentClasses[service.accent];
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 lg:py-24",
        styles.heroWash,
      )}
    >
      <Container>
        <div className="relative z-10">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: motionDurations.default,
              ease: motionEasing,
            }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All services
            </Link>

            <h1
              className={cn(
                "mt-6 text-balance text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl",
                styles.text,
              )}
            >
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
