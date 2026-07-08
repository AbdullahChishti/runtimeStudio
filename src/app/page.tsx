import { createMetadata } from "@/lib/metadata";
import { NewHomePage } from "@/components/home/NewHomePage";

export const metadata = createMetadata({});

export default function HomePage() {
  return <NewHomePage />;
}
