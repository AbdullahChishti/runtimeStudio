import { createMetadata } from "@/lib/metadata";
import { NewHomePage } from "@/components/home/NewHomePage";
import { company } from "@/content/company";

export const metadata = createMetadata({
  title: "Home",
  description: company.tagline,
});

export default function HomePage() {
  return <NewHomePage />;
}
