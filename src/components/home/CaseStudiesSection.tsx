"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const showcaseItems = [
  {
    title: "ATELIER D'OR",
    subtitle: "THE ART OF LIVING",
    description: "A luxury interiors brand with a refined digital presence that reflects their craftsmanship.",
    tags: ["Web Design", "Development", "Branding"],
    bgColor: "bg-[oklch(0.92_0.02_80)]",
  },
  {
    title: "NORDIC COLLECTIVE",
    subtitle: "DESIGN STUDIO",
    description: "A minimalist architecture firm showcasing projects through immersive visual storytelling.",
    tags: ["Web Design", "Development", "Photography"],
    bgColor: "bg-[oklch(0.88_0.01_200)]",
  },
  {
    title: "VERTEX CAPITAL",
    subtitle: "INVESTMENT GROUP",
    description: "A premium financial services firm with a digital identity built for trust and clarity.",
    tags: ["Web Design", "Development", "Strategy"],
    bgColor: "bg-[oklch(0.90_0.015_60)]",
  },
];

export function CaseStudiesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <Container size="wide">
        <div className="mb-12">
          <p className="label-mono text-muted mb-3">Selected Work</p>
          <h2 className="heading-section text-foreground">
            Projects that speak for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: motionDurations.default,
                delay: index * 0.1,
                ease: motionEasing,
              }}
              className="group"
            >
              <div className={`${item.bgColor} aspect-[4/5] flex flex-col items-center justify-center p-8 transition-transform duration-300 group-hover:scale-[0.98]`}>
                <p className="label-mono text-muted mb-2">{item.subtitle}</p>
                <h3 className="heading-section text-foreground text-center">
                  {item.title}
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-light border border-border px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
