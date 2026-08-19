"use client";

import { motion, useReducedMotion } from "framer-motion";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const portfolioItems = [
  {
    title: "Aeterna Dining",
    category: "Restaurant",
    package: "Gold Package",
    image: "/images/portfolio-1.jpg",
    stagger: false,
  },
  {
    title: "Studio Form",
    category: "Architecture",
    package: "Platinum Package",
    image: "/images/portfolio-2.jpg",
    stagger: true,
  },
  {
    title: "The Master Barber",
    category: "Grooming",
    package: "Diamond Package",
    image: "/images/portfolio-3.jpg",
    stagger: false,
  },
  {
    title: "Nebula AI",
    category: "Technology",
    package: "Enterprise Package",
    image: "/images/portfolio-4.jpg",
    stagger: true,
  },
];

export function CaseStudiesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="px-6 lg:px-12 max-w-[1400px] mx-auto py-24 border-t border-accent/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl text-foreground font-bold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Premium Digital Environments.
          </h2>
        </div>
        <a
          href={withBasePath("/work")}
          className="text-sm font-semibold text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1 uppercase tracking-widest"
        >
          View All Projects
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: motionDurations.default,
              delay: index * 0.1,
              ease: motionEasing,
            }}
            className={`group cursor-pointer ${item.stagger ? "mt-0 md:mt-12" : ""}`}
          >
            <div className="bg-white border border-accent/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden aspect-video relative p-2 mb-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                alt={item.title}
                src={withBasePath(item.image)}
              />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3
                  className="text-2xl text-foreground font-semibold mb-2 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {item.category} • {item.package}
                </p>
              </div>
              <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors">
                arrow_forward
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
