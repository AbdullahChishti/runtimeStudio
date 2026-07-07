import { InsightsListing } from "@/components/insights/InsightsListing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Perspectives on quality engineering, AI systems, and modern software development from Runtime Studio.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsListing />;
}
