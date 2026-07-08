import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { CategoryFilter } from "@/components/insights/CategoryFilter";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { Suspense } from "react";
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
      <GenerativeBackground className="absolute inset-0 z-0" density={0.5} accentRatio={0.05} />
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="heading-display text-gradient-spectral mb-4">
            Insights from the Latent Field
          </h1>
          <p className="description-standard mx-auto max-w-3xl text-balance">
            Explore our latest thinking on AI-native software, quality engineering,
            and emergent systems. Designed to inform, inspire, and provoke.
          </p>
        </header>

        <nav className="mb-12 flex justify-center">
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </nav>

        <Suspense fallback={null}>
          <InsightsGrid />
        </Suspense>
      </div>
    </div>
  );
}
