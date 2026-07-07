import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Case studies in quality engineering, AI systems, and software development from Runtime Studio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container size="narrow">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Work
            </p>
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Selected engagements and outcomes.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Representative projects across quality engineering, AI systems, and
              platform development. Client names anonymised — details available on
              request.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="space-y-12 lg:space-y-16">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.05}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid gap-6 border-b border-border pb-12 last:border-b-0 last:pb-0 lg:grid-cols-12 lg:gap-8 lg:pb-16"
              >
                <div className="lg:col-span-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {study.industry}
                  </span>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground group-hover:text-accent">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{study.client}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-muted">
                    {study.summary}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="block text-3xl font-medium tracking-tight text-foreground">
                    {study.metric}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {study.metricLabel}
                  </span>
                  <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-muted group-hover:text-foreground transition-colors">
                    Read case study →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
