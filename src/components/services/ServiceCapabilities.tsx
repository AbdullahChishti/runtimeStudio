import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceSection } from "./ServiceSection";

interface ServiceCapabilitiesProps {
  service: Service;
  id?: string;
}

export function ServiceCapabilities({ service, id }: ServiceCapabilitiesProps) {
  const styles = accentClasses[service.accent];

  return (
    <ServiceSection
      id={id}
      title="Capabilities"
      accent={service.accent}
      contained={false}
      className="bg-surface-elevated"
    >
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">
        {service.intro}
      </p>
      <ul className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full",
                styles.dot,
              )}
              aria-hidden="true"
            />
            <span className="text-lg leading-relaxed text-foreground">
              {capability}
            </span>
          </li>
        ))}
      </ul>
    </ServiceSection>
  );
}
