import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type LedgerProps = {
  children: ReactNode;
  className?: string;
  /** Add a bottom rule to close the ledger. */
  closed?: boolean;
};

/**
 * Ledger — a ruled data sheet. Use it for facts, deliverables, metrics,
 * and metadata. The row is the unit; the rule is the structure. No cards.
 */
export function Ledger({ children, className, closed = false }: LedgerProps) {
  return (
    <div
      className={cn(
        "ledger",
        closed && "border-b border-border",
        className,
      )}
    >
      {children}
    </div>
  );
}

type LedgerRowProps = {
  /** The monospaced key for the row. */
  label: ReactNode;
  /** The value or description. */
  children: ReactNode;
  /** Optional trailing meta (date, status, tag). */
  meta?: ReactNode;
  className?: string;
};

export function LedgerRow({ label, children, meta, className }: LedgerRowProps) {
  return (
    <div
      className={cn(
        "ledger-row",
        !!meta && "ledger-row--meta",
        className,
      )}
    >
      <div className="label-mono text-muted-light">{label}</div>
      <div className="text-foreground">{children}</div>
      {meta && <div className="text-sm text-muted md:text-right">{meta}</div>}
    </div>
  );
}

type LedgerListProps = {
  children: ReactNode;
  className?: string;
};

/** Semantic wrapper for a set of ledger rows. */
export function LedgerList({ children, className }: LedgerListProps) {
  return <dl className={cn("w-full", className)}>{children}</dl>;
}
