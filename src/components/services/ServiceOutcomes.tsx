import { Service } from "@/content/services";
import { ServiceSection } from "./ServiceSection";

interface ServiceOutcomesProps {
  service: Service;
}

export function ServiceOutcomes({ service }: ServiceOutcomesProps) {
  return (
    <ServiceSection title="Key Outcomes" accent={service.accent}>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="border-l border-border pl-5">
            <p className="text-xl font-medium tracking-tight text-foreground">
              {outcome}
            </p>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
