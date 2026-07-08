import React from "react";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell us what you're building. We'll respond within one business day with thoughtful next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="contact-form" className="relative py-16 lg:py-24">
        <Container size="narrow">
          <FadeIn delay={0.1}>
            <div className="mb-10 border-b border-border pb-10">
              <p className="label-mono text-muted mb-3">Get in touch</p>
              <h1 className="heading-display max-w-3xl text-balance">
                Tell us what{" "}
                <span className="text-gradient-spectral">you&apos;re building</span>
              </h1>
              <p className="description-standard mt-6 max-w-2xl text-balance">
                We&apos;ll respond within one business day with thoughtful next
                steps. Prefer email? Reach us directly.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <EnvelopeClosedIcon className="h-5 w-5 text-muted" />
                  <span className="heading-section text-balance gradient-underline">
                    {siteConfig.email}
                  </span>
                </a>
              </div>
            </div>

            <p className="label-mono text-muted mb-3">Send a message</p>
            <p className="description-standard max-w-xl mb-10">
              Project scope, timeline, and the engineering challenge you want
              to solve — context helps us respond with useful next steps.
            </p>
            <ContactForm />
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
