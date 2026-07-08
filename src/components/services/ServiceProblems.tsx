import { Service } from "@/content/services";
import { ServiceSection } from "./ServiceSection";

interface ServiceProblemsProps {
  service: Service;
  id?: string;
}

export function ServiceProblems({ service, id }: ServiceProblemsProps) {
  return (
    <ServiceSection
      id={id}
      title="Problems we solve"
      accent={service.accent}
      contained={false}
    >
      <div className="max-w-4xl divide-y divide-border">
        {service.problems.map((problem) => (
          <div
            key={problem}
            className="flex items-start gap-4 py-6 first:pt-0 last:pb-0"
          >
            <span className="font-mono text-muted" aria-hidden="true">
              —
            </span>
            <p className="text-xl leading-relaxed text-foreground">
              {problem}
            </p>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}
