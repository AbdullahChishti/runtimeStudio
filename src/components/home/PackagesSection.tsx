"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { packages, packagesContent } from "@/content/packages";
import { Container } from "@/components/ui/Container";
import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { Button } from "@/components/ui/Button";
import { withBasePath, cn } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

const accentClasses: Record<
  "teal" | "violet" | "amber",
  { text: string; dot: string }
> = {
  teal: { text: "text-accent-teal", dot: "bg-accent-teal" },
  violet: { text: "text-accent-violet", dot: "bg-accent-violet" },
  amber: { text: "text-accent-amber", dot: "bg-accent-amber" },
};

export function PackagesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="packages"
      className="relative overflow-hidden border-y border-border"
    >
      <GenerativeBackground
        className="absolute inset-0 z-0 opacity-60"
        density={0.75}
        accentRatio={0.12}
        speed={0.6}
        trail={0.88}
      />

      <Container size="wide" className="relative z-10 py-24 lg:py-36">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="label-mono kicker-rule text-muted mb-4">
            {packagesContent.label}
          </p>
          <h2 className="heading-display text-balance text-foreground">
            {packagesContent.title}
          </h2>
          <p className="description-standard mx-auto mt-6 max-w-2xl">
            {packagesContent.description}
          </p>
        </div>

        <div className="border-t border-border">
          {packages.map((tier, index) => {
            const accent = accentClasses[tier.accent];

            return (
              <motion.article
                key={tier.slug}
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
                className="border-b border-border"
              >
                <div className="grid grid-cols-1 items-start gap-8 py-12 lg:grid-cols-12 lg:gap-6 lg:py-16">
                  {/* Left: number, name, tagline */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 lg:block">
                      <span
                        className={cn(
                          "data-readout text-3xl lg:mb-3 lg:block",
                          accent.text,
                        )}
                      >
                        {tier.number}
                      </span>
                      <h3 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                        {tier.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-lg font-medium leading-snug text-foreground">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Middle: description and features */}
                  <div className="lg:col-span-5">
                    <p className="description-standard">{tier.description}</p>
                    <ul className="mt-5 space-y-2">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                              accent.dot,
                            )}
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: ideal for and CTA */}
                  <div className="flex flex-col items-start gap-6 lg:col-span-3 lg:items-end lg:text-right">
                    <div>
                      <p className="label-mono text-muted mb-2">Ideal for</p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {tier.idealFor}
                      </p>
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
