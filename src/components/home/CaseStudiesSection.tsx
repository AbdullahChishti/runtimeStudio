"use client";

import { caseStudies } from "@/content/caseStudies";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { caseStudyAccentBySlug } from "@/components/home/Accents";

const CaseStudyCard = ({
  caseStudy,
  index,
}: {
  caseStudy: (typeof caseStudies)[number];
  index: number;
}) => {
  const accent = caseStudyAccentBySlug[caseStudy.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
      style={{ borderColor: accent }}
    >
      <div
        className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity`}
        style={{ backgroundColor: accent }}
      ></div>
      <div className="relative z-10">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {caseStudy.industry}
        </span>
        <h3 className="mb-4 text-3xl font-bold text-foreground">
          {caseStudy.title}
        </h3>
        <p className="mb-6 text-lg text-foreground/90">
          {caseStudy.summary}
        </p>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {caseStudy.metric}
            </p>
            <p className="text-sm uppercase text-muted-foreground">
              {caseStudy.metricLabel}
            </p>
          </div>
          <Link
            href={`/work/${caseStudy.slug}`}
            className={`inline-flex items-center text-primary-light-blue group-hover:text-foreground/90 transition-colors`}
            style={{ color: accent }}
          >
            View Case Study
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export function CaseStudiesSection() {
  const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-5xl font-bold tracking-tight text-foreground"
        >
          Our Work & Results
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
