import React from "react";
import { ServiceInteractiveElementConfig, ServiceAccent, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";

interface InteractiveServiceElementProps {
  config: ServiceInteractiveElementConfig;
  accent: ServiceAccent;
}

export const InteractiveServiceElement: React.FC<InteractiveServiceElementProps> = ({
  config,
  accent,
}) => {
  if (!config) return null;

  const styles = accentClasses[accent];

  switch (config.type) {
    case "timeline":
      return (
        <div className="relative ml-4 border-l border-border">
          {config.stages.map((stage, index) => (
            <div key={index} className="mb-8 flex items-start last:mb-0">
              <div
                className={cn(
                  "-ml-3 mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-background",
                  styles.dot,
                )}
              >
                {index + 1}
              </div>
              <div>
                <h3 className="heading-card text-foreground">{stage.title}</h3>
                <p className="mt-1 description-sm">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "flowchart":
      return (
        <div className="panel relative flex h-64 w-full flex-wrap items-center justify-center gap-4 rounded-[var(--radius-lg)] p-4">
          {config.nodes.map((node) => (
            <div
              key={node.id}
              className={cn("rounded-[var(--radius-md)] px-4 py-2 text-background", styles.dot)}
            >
              {node.label}
            </div>
          ))}
          <p className="absolute bottom-2 label-mono text-muted-light">Conceptual flowchart</p>
        </div>
      );
    case "code-editor":
      return (
        <div className="panel overflow-x-auto rounded-[var(--radius-lg)] p-4 font-mono text-sm text-foreground">
          <pre className="whitespace-pre-wrap">
            <code>{config.codeSnippet}</code>
          </pre>
          <p className="mt-2 label-mono text-muted-light">Code snippet ({config.language})</p>
        </div>
      );
    case "decision-tree":
      return (
        <div className="panel rounded-[var(--radius-lg)] p-4">
          <p className="mb-4 description-sm">Decision tree visualization:</p>
          {config.steps.map((step, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <p className="font-medium text-foreground">{step.question}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {step.options.map((option: string, optIndex: number) => (
                  <span
                    key={optIndex}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-sm text-muted"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-4 label-mono text-muted-light">Conceptual decision tree</p>
        </div>
      );
    default:
      return null;
  }
};
