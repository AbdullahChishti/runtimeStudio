"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container, type ContainerProps } from "@/components/ui/Container";
import { ServiceAccent, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceSectionProps = {
  title: string;
  accent: ServiceAccent;
  children: ReactNode;
  className?: string;
  id?: string;
  /** Whether to wrap the section content in a <Container>. Disable when the
   *  section sits inside a layout that already provides a measure (e.g. the
   *  service detail side-nav column). */
  contained?: boolean;
  containerSize?: ContainerProps["size"];
  bleed?: boolean;
};

export function ServiceSection({
  title,
  accent,
  children,
  className,
  id,
  contained = true,
  containerSize = "default",
  bleed = false,
}: ServiceSectionProps) {
  const styles = accentClasses[accent];
  const reducedMotion = useReducedMotion();

  const inner = (
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
      <div className="mt-8">{children}</div>
    </motion.div>
  );

  return (
    <section
      id={id}
      className={cn("relative py-16 lg:py-24", className)}
    >
      {contained ? (
        <Container size={containerSize} bleed={bleed}>
          {inner}
        </Container>
      ) : (
        inner
      )}
    </section>
  );
}
