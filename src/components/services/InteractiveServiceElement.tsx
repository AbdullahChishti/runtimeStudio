import { ArrowDown, ArrowRight, RefreshCw } from "lucide-react";
import {
  ServiceInteractiveElementConfig,
  ServiceAccent,
  accentClasses,
} from "@/content/services";
import { cn } from "@/lib/utils";

interface InteractiveServiceElementProps {
  config: ServiceInteractiveElementConfig;
  accent: ServiceAccent;
}

export function InteractiveServiceElement({
  config,
  accent,
}: InteractiveServiceElementProps) {
  const styles = accentClasses[accent];

  switch (config.type) {
    case "timeline":
      return (
        <div className="relative ml-4 max-w-3xl border-l border-border">
          <ol className="space-y-10">
            {config.stages.map((stage, index) => (
              <li key={stage.title} className="relative flex items-start gap-5 pl-2">
                <span
                  className={cn(
                    "absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm text-background",
                    styles.dot,
                  )}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-muted">{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "flowchart":
      return (
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            {config.nodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-3">
                <div
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-background",
                    styles.dot,
                  )}
                >
                  {node.label}
                </div>
                {index < config.nodes.length - 1 && (
                  <>
                    <ArrowRight
                      className="hidden h-5 w-5 text-muted md:block"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="h-5 w-5 text-muted md:hidden"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 text-muted">
              <RefreshCw className="h-5 w-5" aria-hidden="true" />
              <span className="label-mono">Iterate</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-light">
            Conceptual flow from problem definition through monitoring and
            feedback.
          </p>
        </div>
      );

    case "code-editor":
      return (
        <div className="overflow-hidden border-y border-border bg-surface-elevated">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-teal" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-indigo" />
            <span className="ml-2 label-mono text-muted-light">
              {config.language}
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground">
            <code>{config.codeSnippet}</code>
          </pre>
        </div>
      );

    case "decision-tree":
      return (
        <div className="max-w-3xl space-y-8">
          {config.steps.map((step) => (
            <div key={step.question} className="relative pl-8">
              <span
                className={cn(
                  "absolute left-0 top-1 h-3 w-3 rounded-full",
                  styles.dot,
                )}
                aria-hidden="true"
              />
              <p className="text-lg font-medium text-foreground">
                {step.question}
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                {step.options.map((option) => (
                  <span
                    key={option}
                    className="label-mono border-b border-border pb-1 text-muted"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
