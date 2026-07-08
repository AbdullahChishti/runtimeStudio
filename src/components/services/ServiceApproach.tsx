import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceSection } from "./ServiceSection";

interface ServiceApproachProps {
  service: Service;
  id?: string;
}

export function ServiceApproach({ service, id }: ServiceApproachProps) {
  const styles = accentClasses[service.accent];

  return (
    <ServiceSection
      id={id}
      title="Our approach"
      accent={service.accent}
      contained={false}
      className="bg-surface-elevated"
    >
      <ol className="relative ml-4 space-y-10 border-l border-border">
        {service.approach.map((step, index) => (
          <li key={step} className="relative pl-8">
            <span
              className={cn(
                "absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm text-background",
                styles.dot,
              )}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="pt-1 text-lg leading-relaxed text-foreground">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </ServiceSection>
  );
}
