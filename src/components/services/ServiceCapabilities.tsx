import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceSection } from "./ServiceSection";

interface ServiceCapabilitiesProps {
  service: Service;
}

export function ServiceCapabilities({ service }: ServiceCapabilitiesProps) {
  const styles = accentClasses[service.accent];

  return (
    <ServiceSection title="Capabilities" accent={service.accent} className="bg-surface-elevated">
      <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
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
