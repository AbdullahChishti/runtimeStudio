import { PortfolioList } from "@/components/work/PortfolioList";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export const metadata = createMetadata({
  title: "Our Work",
  description: "Selected projects where we helped clients build software they can trust.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="space-y-16 py-16 sm:space-y-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level="h1">Our Work</Heading>
          <Text className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            Selected projects where we helped teams build software they can
            trust.
          </Text>
        </div>
      </Container>
      <PortfolioList />
    </main>
  );
}
