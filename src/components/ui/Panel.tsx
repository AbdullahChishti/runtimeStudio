import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PanelProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Surface tone. `base` sits on the page, `elevated` lifts a step. */
  tone?: "base" | "elevated";
  /** Padding scale. */
  padding?: "none" | "sm" | "md" | "lg";
  /** Draw engineered corner ticks for a drafting-table feel. */
  ticks?: boolean;
};

const paddings: Record<NonNullable<PanelProps["padding"]>, string> = {
  none: "",
  sm: "p-5",
  md: "p-6 lg:p-8",
  lg: "p-8 lg:p-12",
};

/**
 * Panel — the single surface primitive of the system. Depth is expressed
 * with a hairline frame, never with shadow or rounding. Prefer this over
 * stacking decorative cards.
 */
export function Panel({
  children,
  className,
  as: Tag = "div",
  tone = "base",
  padding = "md",
  ticks = false,
}: PanelProps) {
  return (
    <Tag
      className={cn(
        "rounded-sm",
        tone === "elevated" ? "panel-elevated" : "panel",
        ticks && "panel-ticks",
        paddings[padding],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
