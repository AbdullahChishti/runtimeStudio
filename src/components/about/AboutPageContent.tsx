"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TeamMemberBlock } from "@/components/about/TeamMemberBlock";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { company } from "@/content/company";
import { withBasePath } from "@/lib/utils";

export function AboutPageContent() {
  return (
    <main className="relative flex flex-col">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <p className="label-mono text-accent">{company.tagline}</p>
          <h1 className="heading-display mt-4 max-w-3xl text-balance">
            {company.about.headline.split("trust")[0]}
            <span className="text-gradient-spectral">trust.</span>
          </h1>
        </Container>
      </section>

      {/* Philosophy — sticky narrative */}
      <Section border>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                label="Philosophy"
                title="Engineering as a discipline"
                description="How we think about the work we do."
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-12">
            <FadeIn>
              <p className="text-2xl lg:text-3xl font-medium leading-snug tracking-tight text-foreground">
                {company.about.philosophy}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-px bg-border-strong" />
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="description-standard text-balance">
                {company.about.intro}
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* How we work — timeline of principles */}
      <Section accent="indigo">
        <SectionHeader
          label="Process"
          title="How we work"
          description="A deliberate rhythm from first conversation to sustained improvement."
          align="center"
          className="mb-16"
        />
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border-strong"
          />
          <StaggerChildren className="space-y-12 lg:space-y-16" stagger={0.12}>
            {company.about.howWeWork.map((stage) => (
              <StaggerItem key={stage.stage}>
                <div className="pl-14 lg:pl-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    <div className="lg:col-span-3">
                      <span className="data-readout text-4xl lg:text-5xl font-bold text-accent-indigo">
                        {stage.stage}
                      </span>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-3">
                        {stage.title}
                      </h3>
                      <p className="description-standard max-w-2xl">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Section>

      {/* Principles — large typographic listing */}
      <Section border>
        <SectionHeader
          label="Principles"
          title="What we believe"
          description="The standards that shape every engagement."
        />
        <div className="space-y-0">
          {company.about.principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={index * 0.05}>
              <div className="group border-t border-border py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="data-readout text-sm text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="description-standard text-balance">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="h-px bg-border" />
        </div>
      </Section>

      {/* Team — abstract visual blocks */}
      <Section accent="coral">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              label="Team"
              title="The people behind the work"
              description={company.about.team.note}
            />
          </div>
          <div className="lg:col-span-8">
            <StaggerChildren
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              stagger={0.1}
            >
              {company.about.team.members.map((member, index) => (
                <StaggerItem key={member.name}>
                  <TeamMemberBlock member={member} index={index} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </Section>

      {/* Expertise — large typographic listing */}
      <Section border>
        <SectionHeader
          label="Expertise"
          title="Technologies & disciplines"
          description="The tools and methods we use to deliver production-grade systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {company.about.techExpertise.map((item, index) => (
            <FadeIn key={item} delay={index * 0.04}>
              <div className="flex items-baseline gap-4 group">
                <span className="data-readout text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                  {item}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA — full-bleed, layered composition */}
      <Section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,var(--accent-subtle),transparent_70%)]"
        />
        <div className="relative z-10 max-w-3xl">
          <FadeIn>
            <p className="label-mono text-accent mb-6">
              {company.about.careersCta.cta}
            </p>
            <h2 className="heading-section text-balance mb-6">
              {company.about.careersCta.headline}
            </h2>
            <p className="description-standard mb-10 max-w-2xl">
              {company.about.careersCta.description}
            </p>
            <Button href={withBasePath("/contact")} size="lg">
              {company.about.careersCta.cta}
            </Button>
          </FadeIn>
        </div>
      </Section>
    </main>
  );
}
