import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { PortfolioList } from "@/components/work/PortfolioList";

export const metadata = createMetadata({
  title: "Our Work",
  description: "Selected projects where we helped clients build software they can trust.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <p className="label-mono text-muted">Selected Work</p>
          <h1 className="heading-display mt-4 max-w-3xl text-balance">
            Projects where teams ship with{" "}
            <span className="text-gradient-spectral">confidence.</span>
          </h1>
          <p className="description-standard mt-6 max-w-2xl">
            Three case studies across AI validation, quality automation, and
            knowledge systems — each showing how rigorous engineering turns
            ambition into reliable production systems.
          </p>
        </Container>
      </section>

      <PortfolioList />
    </main>
  );
}
