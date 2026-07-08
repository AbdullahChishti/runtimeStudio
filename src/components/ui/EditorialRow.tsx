import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type EditorialRowProps = {
  /** The leading label or index. */
  label?: ReactNode;
  /** The main content block. */
  children: ReactNode;
  /** Optional trailing note or figure. */
  aside?: ReactNode;
  className?: string;
  /** Use a three-column layout when an aside is present. */
  split?: boolean;
  /** Add a top rule to the row. */
  ruled?: boolean;
};

/**
 * EditorialRow — a horizontal narrative unit: label / body / aside. It
 * replaces the card-grid pattern with an editorial line that reads like
 * a magazine spread. Use it for services, case studies, process steps,
 * and any content that used to be a card.
 */
export function EditorialRow({
  label,
  children,
  aside,
  className,
  split = false,
  ruled = false,
}: EditorialRowProps) {
  return (
    <div
      className={cn(
        "editorial-row",
        split && "editorial-row--split",
        ruled && "border-t border-border pt-6",
        className,
      )}
    >
      {label && (
        <div className="label-mono text-muted-light">
          {label}
        </div>
      )}
      <div className="text-foreground">{children}</div>
      {aside && <div className="text-sm text-muted">{aside}</div>}
    </div>
  );
}
