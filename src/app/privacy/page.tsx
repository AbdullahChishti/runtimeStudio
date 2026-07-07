import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Runtime Studio.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <Container size="narrow">
        <FadeIn>
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Placeholder privacy policy. Update this page with your legal privacy
            policy before launch. Runtime Studio respects your privacy and will
            only use contact information submitted through our website to respond
            to your enquiries.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
