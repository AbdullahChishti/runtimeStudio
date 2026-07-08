import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceSection } from "./ServiceSection";

interface ServiceApproachProps {
  service: Service;
}

export function ServiceApproach({ service }: ServiceApproachProps) {
  const styles = accentClasses[service.accent];

  return (
    <ServiceSection title="Our Approach" accent={service.accent} className="bg-surface-elevated">
      <ol className="space-y-10">
        {service.approach.map((step, index) => (
          <li key={step} className="flex gap-5">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm text-background",
                styles.dot,
              )}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="pt-0.5 text-lg leading-relaxed text-foreground">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </ServiceSection>
  );
}
