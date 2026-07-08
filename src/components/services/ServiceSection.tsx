"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceAccent, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceSectionProps = {
  title: string;
  accent: ServiceAccent;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function ServiceSection({
  title,
  accent,
  children,
  className,
  id,
}: ServiceSectionProps) {
  const styles = accentClasses[accent];
  const reducedMotion = useReducedMotion();

  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
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
            duration: motionDurations.default,
            ease: motionEasing,
          }}
        >
          <h2 className="label-mono inline-flex items-center gap-2 text-muted">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", styles.dot)}
              aria-hidden="true"
            />
            {title}
          </h2>
          <div className="mt-8">
            {children}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
