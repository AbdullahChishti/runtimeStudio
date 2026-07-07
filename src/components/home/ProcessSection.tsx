"use client";

import { company } from "@/content/company";
import { motion } from "framer-motion";
import { stepAccentColors } from "@/components/home/Accents";

const ProcessStep = ({
  step,
  index,
}: {
  step: (typeof company.howWeWork)[number];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className="relative flex flex-col items-center text-center p-6 rounded-lg group"
  >
    <div
      className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110"
      style={{ backgroundColor: stepAccentColors[index % stepAccentColors.length] }}
    >
      {step.stage}
    </div>
    <h3 className="mb-3 text-2xl font-bold text-foreground">
      {step.title}
    </h3>
    <p className="text-lg text-muted-foreground">{step.description}</p>
  </motion.div>
);

export function ProcessSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-5xl font-bold tracking-tight text-foreground"
        >
          Our Process
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {company.howWeWork.map((step, index) => (
            <ProcessStep key={step.stage} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
