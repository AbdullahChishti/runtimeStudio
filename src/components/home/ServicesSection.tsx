"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { servicesContent } from "@/content/home";
import { accentClasses } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceTag } from "@/components/services/ServiceTag";
import { cn } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <Section border>
      <SectionHeader
        label={servicesContent.label}
        title={servicesContent.title}
        description={servicesContent.subtitle}
        align="center"
      />

      <div className="border-t border-border">
        {servicesContent.groups.map((group, index) => {
          const accent = accentClasses[group.accent];

          return (
            <motion.div
              key={group.slug}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: motionDurations.default,
                delay: index * 0.08,
                ease: motionEasing,
              }}
              className="group border-b border-border"
            >
              <Link
                href={`/services/${group.slug}`}
                className="relative grid grid-cols-1 items-start gap-8 py-10 transition-colors duration-300 hover:bg-surface-elevated lg:grid-cols-12 lg:gap-6 lg:py-14"
              >
                <div className="lg:col-span-2">
                  <span className={cn("label-mono text-2xl", accent.text)}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-xl description-standard">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <ServiceTag key={tag} accent={group.accent}>
                        {tag}
                      </ServiceTag>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start lg:col-span-1 lg:justify-end">
                  <ArrowRightIcon className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
