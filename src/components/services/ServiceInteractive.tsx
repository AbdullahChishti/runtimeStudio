import { Service } from "@/content/services";
import { InteractiveServiceElement } from "./InteractiveServiceElement";
import { ServiceSection } from "./ServiceSection";

interface ServiceInteractiveProps {
  service: Service;
  id?: string;
}

const TITLE_BY_TYPE: Record<string, string> = {
  timeline: "Delivery timeline",
  flowchart: "Process flow",
  "code-editor": "Implementation sketch",
  "decision-tree": "Decision framework",
};

export function ServiceInteractive({ service, id }: ServiceInteractiveProps) {
  const config = service.interactiveElementConfig;
  if (!config) return null;

  return (
    <ServiceSection
      id={id}
      title={TITLE_BY_TYPE[config.type] ?? "How it works"}
      accent={service.accent}
      contained={false}
    >
      <InteractiveServiceElement config={config} accent={service.accent} />
    </ServiceSection>
  );
}
