import { cn } from "@/lib/utils";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "mono" | "sans";
  accent?: boolean;
  kicker?: boolean;
};

/**
 * Label — a small meta voice. Mono for technical keys, sans for
 * editorial subheads. The accent variant adds the Flux tick; the kicker
 * variant adds a trailing rule for typographic hero openings.
 */
export function Label({
  children,
  className,
  variant = "mono",
  accent = false,
  kicker = false,
}: LabelProps) {
  return (
    <span
      className={cn(
        variant === "mono" ? "label-mono" : "label-sans",
        accent && "section-label-accent",
        kicker && "kicker-rule",
        className,
      )}
    >
      {children}
    </span>
  );
}
