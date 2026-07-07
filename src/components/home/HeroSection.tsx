"use client";

import { company } from "@/content/company";
import { SparklesCore } from "@/components/home/Sparkles";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AccentKey, accents } from "@/components/home/Accents";
import { motion } from "framer-motion";

export function HeroSection() {
  const accentColors: AccentKey[] = ["teal", "violet", "amber", "indigo"];
  const randomAccent =
    accentColors[Math.floor(Math.random() * accentColors.length)];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-20 md:py-0">
      <div className="absolute inset-0 z-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor={accents[randomAccent]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          {company.hero.headline}
        </h1>
        <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
          {company.hero.supporting}
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {company.hero.primaryCta}
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3 text-lg font-medium text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {company.hero.secondaryCta}
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
