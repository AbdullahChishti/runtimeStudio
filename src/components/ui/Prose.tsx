import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Prose — long-form reading measure tuned to the identity's type scale.
 * Comfortable 68ch measure, generous leading, hairline rules on block
 * elements, and the signal reserved for links only.
 */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-[68ch] text-[1.0625rem] leading-[1.75] text-muted",
        // Headings
        "[&_h2]:heading-section [&_h2]:mt-16 [&_h2]:mb-5 [&_h2]:text-foreground",
        "[&_h3]:heading-block [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-foreground",
        // Body
        "[&_p]:my-6",
        "[&_strong]:font-medium [&_strong]:text-foreground",
        // Links — the only place the signal appears in body copy. Uses
        // accent-strong (not accent) so inline links clear 4.5:1 on paper.
        "[&_a]:text-accent-strong [&_a]:underline [&_a]:decoration-accent-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent",
        // Lists
        "[&_ul]:my-6 [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0",
        "[&_ul>li]:relative [&_ul>li]:pl-6",
        "[&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.72em] [&_ul>li]:before:h-px [&_ul>li]:before:w-3 [&_ul>li]:before:bg-accent",
        "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5",
        // Quotes + rules
        "[&_blockquote]:pull-quote [&_blockquote]:my-8",
        "[&_hr]:my-12 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-border",
        // Code
        "[&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}
