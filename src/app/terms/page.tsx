import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for Runtime Studio.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <Container size="narrow">
        <FadeIn>
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Placeholder terms of service. Update this page with your legal terms
            before launch. By using this website, you agree to these terms.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
