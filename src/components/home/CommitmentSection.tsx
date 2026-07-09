import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { commitmentContent } from "@/content/home";
import { withBasePath } from "@/lib/utils";

export function CommitmentSection() {
  return (
    <Section accent="violet" field="lattice">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-9">
          <p className="heading-display text-balance text-foreground">
            {commitmentContent.statement}
          </p>
        </div>
        <div className="flex items-end lg:col-span-3 lg:justify-end">
          <Button
            href={withBasePath(commitmentContent.href)}
            variant="secondary"
            size="lg"
          >
            {commitmentContent.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
