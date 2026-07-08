import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Panel } from "@/components/ui/Panel";
import { Field, FieldList } from "@/components/ui/Field";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell us about your project. We'll respond within one business day with thoughtful next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative border-b border-border pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="field-lattice absolute inset-0 opacity-[0.03]" aria-hidden="true" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-mono text-accent-strong section-label-accent">Get in touch</p>
            <Heading level="h1" className="mt-4 heading-hero text-balance">
              Let&rsquo;s talk about your project.
            </Heading>
            <Text className="mt-6 text-lg text-muted description-standard text-pretty">
              Tell us what you&rsquo;re building. We&rsquo;ll respond within one
              business day with thoughtful next steps.
            </Text>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="narrow">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <Panel padding="lg" className="lg:col-span-3 panel-ticks">
              <ContactForm />
            </Panel>

            <div className="lg:col-span-2">
              <FieldList>
                <Field label="Email">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent gradient-underline">
                    {siteConfig.email}
                  </a>
                </Field>
                <Field label="LinkedIn">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent gradient-underline"
                  >
                    Runtime Studio
                  </a>
                </Field>
                <Field label="Response time">
                  <span className="data-readout">1 business day</span>
                </Field>
              </FieldList>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
