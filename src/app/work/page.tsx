import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected case studies demonstrating our expertise in quality engineering, AI systems, and software development.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="hero-mesh relative border-b border-border pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
        <Container>
          <FadeIn>
            <SectionHeader
              label="Selected Work"
              title="Results that move the needle."
              description="A selection of engagements where we've helped senior tech leaders solve complex quality and engineering challenges."
              accentLabel
            />
          </FadeIn>
        </Container>
      </section>

      {/* Case study list */}
      <Section className="bg-background">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {caseStudies.map((study) => (
              <FadeIn key={study.slug}>
                <Link href={`/work/${study.slug}`} className="group block">
                  <article>
                    <div className="h-60 overflow-hidden rounded-lg bg-surface-elevated">
                      {/* Placeholder for CaseStudyVisual or image */}
                      <div className="flex h-full items-center justify-center text-muted">
                        {study.title} Image Placeholder
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="label-mono text-sm text-muted">{study.industry}</p>
                      <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground group-hover:text-accent-blue transition-colors">
                        {study.title}
                      </h2>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {study.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-blue">
                        View case study
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
