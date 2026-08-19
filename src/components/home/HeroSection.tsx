"use client";

import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/content/company";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-[120px]">
      <div className="flex flex-col gap-12 items-center text-center pt-16 pb-24">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.slow, ease: motionEasing }}
          className="max-w-4xl flex flex-col items-center gap-6"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase border-b border-accent/30 pb-2">
            Premium Digital Delivery
          </span>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] font-bold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {company.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl font-light mt-4">
            {company.hero.supporting}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href={withBasePath("/contact")}
              className="inline-flex justify-center items-center text-xs font-bold bg-accent text-white px-10 py-4 hover:bg-accent-strong transition-colors uppercase tracking-widest shadow-lg shadow-accent/20"
            >
              Start Your Website
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.slow, delay: 0.2, ease: motionEasing }}
          className="w-full mt-10 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Premium Website Layout"
            className="w-full h-auto object-cover border border-accent/20 shadow-2xl"
            src={withBasePath("/images/hero-mockup.jpg")}
          />
        </motion.div>
      </div>
    </section>
  );
}
