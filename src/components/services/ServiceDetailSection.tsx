"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceAccent, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceDetailSectionProps = {
  title: string;
  accent: ServiceAccent;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function ServiceDetailSection({
  title,
  accent,
  children,
  className,
  id,
}: ServiceDetailSectionProps) {
  const styles = accentClasses[accent];
  const reducedMotion = useReducedMotion();

  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.h2
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: motionDurations.default,
                ease: motionEasing,
              }}
              className={cn(
                "label-mono sticky top-32 inline-flex items-center gap-2",
                styles.textMuted,
              )}
            >
              <span
                className={cn("h-1.5 w-1.5 rounded-full", styles.dot)}
                aria-hidden="true"
              />
              {title}
            </motion.h2>
          </div>

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
              delay: 0.1,
              ease: motionEasing,
            }}
            className="lg:col-span-8"
          >
            {children}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
