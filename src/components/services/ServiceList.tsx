"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Service, accentClasses } from "@/content/services";
import { ServiceTag } from "./ServiceTag";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceListProps = {
  services: Service[];
};

export function ServiceList({ services }: ServiceListProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="border-t border-border">
      {services.map((service, index) => {
        const accent = accentClasses[service.accent];

        return (
          <motion.div
            key={service.slug}
            initial={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
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
              href={`/services/${service.slug}`}
              className="relative grid grid-cols-1 items-start gap-8 py-10 transition-colors duration-300 hover:bg-surface-elevated lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-14"
            >
              <div className="lg:col-span-2">
                <span className={cn("label-mono text-2xl", accent.text)}>
                  {service.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-indigo sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 description-standard">
                  {service.shortDescription}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.slice(0, 4).map((capability) => (
                    <ServiceTag key={capability} accent={service.accent}>
                      {capability}
                    </ServiceTag>
                  ))}
                </div>
              </div>

              <div className="flex justify-start lg:col-span-1 lg:justify-end">
                <svg
                  className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
