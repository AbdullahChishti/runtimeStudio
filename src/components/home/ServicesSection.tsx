"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const features = [
  {
    title: "Fixed Packages",
    description:
      "Straightforward results for your digital business. No hidden fees, no scope creep — just clear deliverables on time.",
  },
  {
    title: "Rapid Deployment",
    description:
      "Your website goes live within weeks, not months. We move fast without compromising quality.",
  },
  {
    title: "Premium Output",
    description:
      "Every project receives the same attention to detail — clean code, polished design, and fast performance.",
  },
];

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: motionDurations.default, ease: motionEasing }}
          >
            <p className="label-mono text-muted mb-3">Our Approach</p>
            <h2 className="heading-section text-foreground max-w-lg">
              Engineered for Fast Delivery.
            </h2>
            <p className="mt-4 text-lg text-muted max-w-lg leading-relaxed">
              Straightforward results for your digital business. Our streamlined
              process guarantees beautiful, functional websites on time.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="border-l-2 border-foreground pl-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: motionDurations.default, delay: 0.15, ease: motionEasing }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[oklch(0.88_0.018_80)] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="label-mono text-muted mb-2">The shortest path to a</p>
                <p className="heading-block text-foreground">beautiful, high-performing website.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
