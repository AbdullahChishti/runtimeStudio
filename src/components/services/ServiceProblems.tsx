import { Service } from "@/content/services";
import { ServiceSection } from "./ServiceSection";

interface ServiceProblemsProps {
  service: Service;
}

export function ServiceProblems({ service }: ServiceProblemsProps) {
  return (
    <ServiceSection title="Problems We Solve" accent={service.accent}>
      <div className="max-w-2xl space-y-6">
        {service.problems.map((problem) => (
          <div key={problem} className="flex items-start gap-4">
            <span className="font-mono text-muted" aria-hidden="true">
              —
            </span>
            <p className="text-lg leading-relaxed text-foreground">
              {problem}
            </p>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}
