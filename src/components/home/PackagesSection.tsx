"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { packages, packagesContent } from "@/content/packages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function PackagesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="packages" className="py-20 lg:py-28 border-t border-border">
      <Container size="wide">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="label-mono text-muted mb-4">
            {packagesContent.label}
          </p>
          <h2 className="heading-section text-foreground text-balance">
            {packagesContent.title}
          </h2>
          <p className="description-standard mx-auto mt-4 max-w-2xl">
            {packagesContent.description}
          </p>
        </div>

        <div className="border-t border-border">
          {packages.map((tier, index) => (
            <motion.article
              key={tier.slug}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: motionDurations.default,
                delay: index * 0.08,
                ease: motionEasing,
              }}
              className="border-b border-border"
            >
              <div className="grid grid-cols-1 items-start gap-8 py-10 lg:grid-cols-12 lg:gap-6 lg:py-14">
                <div className="lg:col-span-4">
                  <span className="data-readout text-2xl text-muted-light lg:mb-2 lg:block">
                    {tier.number}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-foreground">
                    {tier.tagline}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm text-muted leading-relaxed">{tier.description}</p>
                  <ul className="mt-4 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start gap-4 lg:col-span-3 lg:items-end lg:text-right">
                  <div>
                    <p className="label-mono text-muted mb-1">Ideal for</p>
                    <p className="text-sm leading-relaxed text-foreground">{tier.idealFor}</p>
                  </div>
                  <Button
                    href={withBasePath(`/contact?package=${tier.slug}`)}
                    variant="secondary"
                    size="md"
                    className="group"
                  >
                    {tier.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
