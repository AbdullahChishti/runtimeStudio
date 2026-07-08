"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { trustContent } from "@/content/home";
import { company } from "@/content/company";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const TrustReasonCard = ({
  reason,
  index,
}: {
  reason: (typeof trustContent.reasons)[number];
  index: number;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: motionDurations.default, delay: index * 0.08, ease: motionEasing }}
      className="card panel-ticks flex flex-col items-center p-6 text-center"
    >
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-teal-subtle text-accent-teal">
        <CheckIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="heading-card text-foreground">{reason.name}</h3>
      <p className="mt-2 description-sm">{reason.description}</p>
    </motion.div>
  );
};

export function TrustSection() {
  return (
    <Section border className="bg-surface">
      <SectionHeader
        label="Trust"
        title={trustContent.title}
        description={trustContent.subtitle}
        align="center"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {trustContent.reasons.map((reason, index) => (
          <TrustReasonCard key={reason.name} reason={reason} index={index} />
        ))}
      </div>

      <blockquote className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-balance text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          &ldquo;{company.trust.testimonial.quote}&rdquo;
        </p>
        <footer className="mt-4 label-mono text-muted">
          {company.trust.testimonial.author} — {company.trust.testimonial.role}
        </footer>
      </blockquote>
    </Section>
  );
}
