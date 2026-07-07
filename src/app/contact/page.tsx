import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { createMetadata, siteConfig } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a conversation with Runtime Studio about your quality engineering, AI, or software development project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                Let&apos;s talk about your project.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Tell us what you&apos;re building and where you need help. We respond
                to every enquiry within one business day.
              </p>

              <div className="mt-10 space-y-6 border-t border-border pt-10">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 inline-block text-base text-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Response time
                  </p>
                  <p className="mt-2 text-base text-muted">
                    Within one business day
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
