import {
  company,
  teamPlaceholders,
  techExpertise,
} from "@/content/company";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Runtime Studio is a senior technical consultancy for quality engineering, AI systems, and modern software development.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container size="narrow">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Senior engineers. Practical outcomes.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {company.about.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Philosophy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {company.about.philosophy}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              How we work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We embed with your team, not above it. Our engagements are structured
              around clear milestones, honest communication, and knowledge transfer.
              When we leave, your team is stronger — not dependent.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section border className="bg-surface-elevated">
        <SectionHeader
          label="Principles"
          title="What we believe"
          description="The values that guide every engagement."
        />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {company.principles.map((principle, index) => (
            <FadeIn
              key={principle.title}
              delay={index * 0.05}
              className="bg-background p-8 lg:p-10"
            >
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section border>
        <SectionHeader
          label="Team"
          title="The people behind the work"
          description={company.about.teamNote}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamPlaceholders.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.05}>
              <div className="border border-border p-6 lg:p-8">
                <div className="mb-6 aspect-square w-full border border-border bg-surface-elevated" />
                <h3 className="text-base font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Expertise"
          title="Technologies we work with"
          description="We choose tools based on fit, not fashion. These represent our core stack."
        />
        <div className="flex flex-wrap gap-3">
          {techExpertise.map((tech) => (
            <span
              key={tech}
              className="border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section border className="bg-foreground">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-light">
            Careers
          </p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-background sm:text-3xl">
            Interested in joining Runtime Studio?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-light">
            We&apos;re always interested in hearing from senior engineers who share
            our values. No open roles listed yet — reach out and introduce yourself.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              className="border-background/20 bg-background text-foreground hover:bg-background/90"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
