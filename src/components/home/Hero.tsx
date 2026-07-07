"use client";

import { company } from "@/content/company";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/Button";
import { StatusIndicator } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <StatusIndicator label="Technology consultancy" status="active" />
            </FadeIn>

            <TextReveal
              text={company.hero.headline}
              as="h1"
              className="mt-6 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              delay={0.1}
            />

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {company.hero.supporting}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact">{company.hero.primaryCta}</Button>
                <Button href="/work" variant="secondary">
                  {company.hero.secondaryCta}
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="none">
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface-elevated py-10">
      <Container>
        <FadeIn>
          <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {company.trust.label}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {company.trust.clients.map((client) => (
              <span
                key={client}
                className="text-sm text-muted-light transition-colors hover:text-muted"
              >
                {client}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-foreground py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]">
      <Container size="narrow">
        <FadeIn>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-light">
              Get in touch
            </p>
            <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-background sm:text-4xl">
              {company.finalCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-light">
              {company.finalCta.description}
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="border-background/20 bg-background text-foreground hover:bg-background/90"
              >
                {company.finalCta.cta}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
