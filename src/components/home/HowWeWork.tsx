import { company } from "@/content/company";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Section, SectionHeader } from "@/components/ui/Section";

export function HowWeWork() {
  return (
    <Section border>
      <SectionHeader
        label="Process"
        title="How we work"
        description="A structured approach that adapts to your context — not a rigid methodology deck."
      />

      <StaggerChildren className="relative">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-border lg:block lg:left-[1.125rem]"
          aria-hidden="true"
        />
        <div className="space-y-8 lg:space-y-12">
          {company.howWeWork.map((step, index) => (
            <StaggerItem key={step.stage}>
              <div className="relative grid gap-4 lg:grid-cols-12 lg:gap-8">
                <div className="flex items-start gap-4 lg:col-span-3">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-background font-mono text-xs text-muted">
                    {step.stage}
                  </div>
                  <h3 className="pt-1 text-xl font-medium tracking-tight text-foreground lg:hidden">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-9 lg:pt-1">
                  <h3 className="hidden text-xl font-medium tracking-tight text-foreground lg:block">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted lg:mt-3 lg:text-base">
                    {step.description}
                  </p>
                  {index < company.howWeWork.length - 1 && (
                    <div className="mt-6 h-px bg-border lg:hidden" aria-hidden="true" />
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerChildren>
    </Section>
  );
}

export function WhyRuntimeStudio() {
  return (
    <Section>
      <SectionHeader
        label="Why Runtime Studio"
        title="Senior expertise. Practical delivery."
        description="We're built for teams that need skilled engineers, not slide decks."
      />

      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {company.whyUs.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 0.05}
            className="bg-background p-8 lg:p-10"
          >
            <h3 className="text-base font-medium tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
