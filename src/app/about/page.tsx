import { AboutPageContent } from "@/components/about/AboutPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Runtime Studio is a senior technical consultancy for quality engineering, AI systems, and modern software delivery.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
