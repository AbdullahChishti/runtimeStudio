"use client";

import { company } from "@/content/company";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function CallToActionSection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-5xl font-bold tracking-tight text-primary-foreground"
        >
          {company.finalCta.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-10 text-xl text-primary-foreground/90"
        >
          {company.finalCta.description}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3 text-lg font-medium text-primary transition-all duration-300 hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
          >
            {company.finalCta.cta}
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
