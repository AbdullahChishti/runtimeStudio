"use client";

import { motion, useReducedMotion } from "framer-motion";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const features = [
  {
    icon: "view_kanban",
    title: "Fixed Packages",
    description:
      "Clear pricing, defined scope. Choose the tier that matches your business scale and launch without hidden fees.",
  },
  {
    icon: "bolt",
    title: "Rapid Deployment",
    description:
      "Our streamlined process ensures your brand is live and converting in weeks, not quarters.",
  },
  {
    icon: "diamond",
    title: "Premium Output",
    description:
      "Speed doesn't mean compromise. Every package delivers sophisticated, pixel-perfect design engineered for performance.",
  },
];

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="px-6 lg:px-12 max-w-[1400px] mx-auto py-24 border-t border-accent/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: motionDurations.default, ease: motionEasing }}
          className="lg:col-span-5 flex flex-col gap-10"
        >
          <div>
            <h2
              className="text-4xl md:text-5xl text-foreground font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Engineered for Fast Delivery.
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed">
              Stop waiting months for your digital presence. We deploy high-end,
              commercial websites through fixed packages that guarantee quality,
              speed, and absolute clarity on deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent text-3xl">
                  {feature.icon}
                </span>
                <div>
                  <h3
                    className="text-xl font-semibold text-foreground mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: motionDurations.default, delay: 0.15, ease: motionEasing }}
          className="lg:col-span-7 relative"
        >
          <div className="aspect-[4/3] overflow-hidden border border-accent/20 shadow-2xl relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="SaaSBuilder Component Output"
              className="w-full h-full object-cover"
              src={withBasePath("/images/services-component.jpg")}
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-accent/20 shadow-xl max-w-sm hidden md:block">
            <p
              className="text-2xl text-accent italic mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;The clearest path to a premium digital presence.&rdquo;
            </p>
            <p className="text-sm text-foreground/60 font-semibold tracking-widest uppercase">
              — High-End Commerce
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
