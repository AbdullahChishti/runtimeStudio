import Link from "next/link";
import { services } from "@/content/services";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Section, SectionHeader } from "@/components/ui/Section";

export function ServicesOverview() {
  return (
    <Section border id="services">
      <SectionHeader
        label="Services"
        title="Four disciplines. One standard of excellence."
        description="We combine quality engineering, AI systems, software development, and strategic consulting to help teams ship with confidence."
      />

      <StaggerChildren className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface-elevated lg:p-10"
            >
              <span className="font-mono text-xs text-muted">
                {service.number}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted group-hover:text-foreground transition-colors">
                Learn more →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
