import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TimelineProps = {
  children: ReactNode;
  className?: string;
  /** Render the timeline horizontally on larger screens. */
  horizontal?: boolean;
};

/**
 * Timeline — a ruled sequence of events, steps, or milestones. Use it
 * for process narratives, roadmaps, and chronological content. The
 * structure is the rule, not a card stack.
 */
export function Timeline({ children, className, horizontal = false }: TimelineProps) {
  return (
    <ul
      className={cn(
        "timeline",
        horizontal && "timeline--horizontal",
        className,
      )}
    >
      {children}
    </ul>
  );
}

type TimelineItemProps = {
  /** The step index or date. */
  label: ReactNode;
  /** The title or headline. */
  title: ReactNode;
  /** The description. */
  children: ReactNode;
  className?: string;
  active?: boolean;
};

export function TimelineItem({
  label,
  title,
  children,
  className,
  active = false,
}: TimelineItemProps) {
  return (
    <li
      className={cn(
        "timeline-item",
        active && "timeline-item--active",
        className,
      )}
    >
      <div className="label-mono text-muted-light mb-1">{label}</div>
      <div className="heading-block text-foreground mb-2">{title}</div>
      <div className="text-sm text-muted">{children}</div>
    </li>
  );
}
