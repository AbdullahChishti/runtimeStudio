"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  recognition,
  testimonials,
  testimonialsContent,
} from "@/content/testimonials";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function TestimonialsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <Section border accent="amber" field="dots">
      <SectionHeader
        label={testimonialsContent.label}
        title={testimonialsContent.title}
        description={testimonialsContent.subtitle}
        align="center"
      />

      <div className="grid gap-x-16 gap-y-12 border-t border-border pt-12 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.author + index}
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: motionDurations.default,
              delay: (index % 2) * 0.08,
              ease: motionEasing,
            }}
            className="flex flex-col gap-6"
          >
            <blockquote className="text-lg leading-relaxed text-foreground text-pretty">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <span className="font-medium text-foreground">
                {testimonial.author}
              </span>
              <span className="label-mono text-muted-light">
                {testimonial.role}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-border pt-10">
        {recognition.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 label-mono text-muted"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
