import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type StickyNarrativeProps = {
  /** The sticky figure or statement. */
  figure: ReactNode;
  /** The scrolling body content. */
  children: ReactNode;
  className?: string;
  /** Put the figure on the right on large screens. */
  reverse?: boolean;
};

/**
 * StickyNarrative — a sticky figure alongside a scrolling body. The
 * figure holds the reader's place while the narrative scrolls past. Use
 * it for long-form explanations, detailed process breakdowns, and
 * layered case-study stories. No cards, only scroll and rule.
 */
export function StickyNarrative({
  figure,
  children,
  className,
  reverse = false,
}: StickyNarrativeProps) {
  return (
    <div
      className={cn(
        "sticky-narrative",
        reverse && "sticky-narrative--reverse",
        className,
      )}
    >
      <div className="sticky-side">
        {figure}
      </div>
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
}
