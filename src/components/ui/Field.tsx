import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  /** Monospaced label, rendered as a small technical key. */
  label: string;
  children: ReactNode;
  className?: string;
  /** Stack the value under the key, or align them on a ruled row. */
  layout?: "row" | "stack";
};

/**
 * Field — a spec/data primitive. A monospaced key paired with a value,
 * ruled with a hairline. Use these to present facts (metrics, meta,
 * engagement details) as an engineering datasheet instead of cards.
 */
export function Field({
  label,
  children,
  className,
  layout = "row",
}: FieldProps) {
  if (layout === "stack") {
    return (
      <div className={cn("flex flex-col gap-2 border-t border-border pt-4", className)}>
        <dt className="label-mono text-muted-light">{label}</dt>
        <dd className="text-base text-foreground">{children}</dd>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-6 border-t border-border py-4",
        className,
      )}
    >
      <dt className="label-mono text-muted-light">{label}</dt>
      <dd className="text-right text-sm text-foreground">{children}</dd>
    </div>
  );
}

type FieldListProps = {
  children: ReactNode;
  className?: string;
};

/** Semantic wrapper for a set of `Field` rows. */
export function FieldList({ children, className }: FieldListProps) {
  return <dl className={cn("w-full", className)}>{children}</dl>;
}
