import { Suspense } from "react";
import React from "react";
import { Container } from "@/components/ui/Container";
import { CategoryFilter } from "@/components/insights/CategoryFilter";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Practical thinking on AI-native software, quality engineering, and modern delivery from the Runtime Studio team.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="relative isolate min-h-screen">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <p className="label-mono text-muted">Runtime Studio Insights</p>
          <h1 className="heading-display mt-4 max-w-3xl text-balance">
            Practical thinking on engineering with{" "}
            <span className="text-gradient-spectral">confidence.</span>
          </h1>
          <p className="description-standard mt-6 max-w-2xl">
            Perspectives on AI-native software, quality engineering, and modern
            delivery from the engineers building production systems.
          </p>
        </Container>
      </section>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-10 flex justify-center pt-16 lg:mb-14 lg:pt-24">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </nav>

        <main className="pb-24 lg:pb-32">
          <Suspense fallback={null}>
            <InsightsGrid />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
