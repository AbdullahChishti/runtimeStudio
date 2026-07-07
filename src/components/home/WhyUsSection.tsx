"use client";

import { company } from "@/content/company";
import { motion } from "framer-motion";
import { whyUsMarkerColors } from "@/components/home/Accents";

export function WhyUsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-5xl font-bold tracking-tight text-foreground"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {company.whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-border bg-card p-6 text-left shadow-sm"
            >
              <div
                className="mb-4 h-3 w-16 rounded-full"
                style={{ backgroundColor: whyUsMarkerColors[index % whyUsMarkerColors.length] }}
              ></div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
