"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processContent } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const StepCard = ({
  step,
  index,
}: {
  step: (typeof processContent.steps)[number];
  index: number;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: motionDurations.default, delay: index * 0.08, ease: motionEasing }}
      className="card panel-ticks p-6"
    >
      <p className="label-mono text-accent-strong">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-4 heading-card text-foreground">{step.name}</h3>
      <p className="mt-2 description-sm">{step.description}</p>
    </motion.div>
  );
};

export function ProcessSection() {
  return (
    <Section border>
      <SectionHeader
        label="How we work"
        title={processContent.title}
        description={processContent.subtitle}
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processContent.steps.map((step, index) => (
          <StepCard key={step.name} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
}
