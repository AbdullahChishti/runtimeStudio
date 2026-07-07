import { services } from "@/content/services";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Quality engineering, AI services, software engineering, and technology consulting for ambitious technology teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container size="narrow">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Services
            </p>
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Technical expertise across four core disciplines.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              From quality engineering to AI systems — we bring senior specialists
              who embed with your team and deliver measurable outcomes.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <article
                id={service.slug}
                className="grid gap-8 border-b border-border pb-16 last:border-b-0 last:pb-0 lg:grid-cols-12 lg:gap-12 lg:pb-24"
              >
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-muted">
                    {service.number}
                  </span>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.intro}
                  </p>
                  <div className="mt-6">
                    <Button href={`/services/${service.slug}`} variant="secondary">
                      View full details
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Capabilities
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section border className="bg-surface-elevated">
        <SectionHeader
          align="center"
          title="Not sure where to start?"
          description="Tell us about your challenge. We'll recommend the right approach — no sales pitch."
        />
        <div className="text-center">
          <Button href="/contact">Start a conversation</Button>
        </div>
      </Section>
    </>
  );
}
