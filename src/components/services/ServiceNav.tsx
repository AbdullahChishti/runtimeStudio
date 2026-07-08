import { Service, accentClasses } from "@/content/services";
import { withBasePath, cn } from "@/lib/utils";

const SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "problems", label: "Problems" },
  { id: "approach", label: "Approach" },
  { id: "model", label: "Model" },
  { id: "outcomes", label: "Outcomes" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

interface ServiceNavProps {
  service: Service;
}

export function ServiceNav({ service }: ServiceNavProps) {
  const styles = accentClasses[service.accent];

  return (
    <nav className="sticky top-28 hidden self-start lg:block">
      <p className={cn("label-mono mb-4 text-muted", styles.text)}>
        {service.number} / {service.title}
      </p>
      <ul className="space-y-1 border-l border-border pl-4">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={withBasePath(`/services/${service.slug}#${section.id}`)}
              className="group relative block py-1 text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              <span
                className={cn(
                  "absolute -left-4 top-1/2 h-px w-0 -translate-y-1/2 transition-all duration-200 group-hover:w-2",
                  styles.dot,
                )}
                aria-hidden="true"
              />
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
