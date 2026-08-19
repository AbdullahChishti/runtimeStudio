import { Service } from "@/content/services";
import { ServiceSection } from "./ServiceSection";

interface ServiceOutcomesProps {
  service: Service;
  id?: string;
}

export function ServiceOutcomes({ service, id }: ServiceOutcomesProps) {
  return (
    <ServiceSection
      id={id}
      title="Key outcomes"
      accent={service.accent}
      contained={false}
      className="bg-accent-wash"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {service.outcomes.map((outcome) => (
          <div key={outcome} className="flex items-start gap-4">
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="text-2xl font-medium tracking-tight text-foreground">
              {outcome}
            </p>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}
