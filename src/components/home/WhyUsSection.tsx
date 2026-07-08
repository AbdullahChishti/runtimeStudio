"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LightbulbIcon, FlaskConicalIcon, LeafIcon } from "lucide-react";
import { whyUsContent } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const IconMap: Record<string, React.ElementType> = {
  "Precision Engineering": LightbulbIcon,
  "Innovation Driven": FlaskConicalIcon,
  "Sustainable Solutions": LeafIcon,
};

const WhyUsCard = ({
  reason,
  index,
}: {
  reason: (typeof whyUsContent.reasons)[number];
  index: number;
}) => {
  const Icon = IconMap[reason.name];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: motionDurations.default, delay: index * 0.08, ease: motionEasing }}
      className="card panel-ticks flex flex-col items-center p-6 text-center card-interactive"
    >
      {Icon && (
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-accent">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      )}
      <h3 className="heading-card text-foreground">{reason.name}</h3>
      <p className="mt-2 description-sm">{reason.description}</p>
    </motion.div>
  );
};

export function WhyUsSection() {
  return (
    <Section border accent="violet" field="lattice">
      <SectionHeader
        label="Why Runtime Studio"
        title={whyUsContent.title}
        description={whyUsContent.subtitle}
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {whyUsContent.reasons.map((reason, index) => (
          <WhyUsCard key={reason.name} reason={reason} index={index} />
        ))}
      </div>
    </Section>
  );
}
