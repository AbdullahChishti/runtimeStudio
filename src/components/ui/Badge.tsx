import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "indigo"
  | "coral"
  | "teal"
  | "violet"
  | "amber"
  | "spectral"
  | "neutral"
  | "outline";

/**
 * Badge — an inline status label, not a button or a card. The default is
 * a simple text marker with a dot or rule; the spectral variant keeps
 * the generative edge. Avoids the pill/box cliché while still scanning
 * as a category tag.
 */
const badgeVariants: Record<BadgeVariant, string> = {
  default: "text-muted",
  indigo: "text-accent-indigo",
  coral: "text-accent-coral",
  teal: "text-accent-teal",
  violet: "text-accent-violet",
  amber: "text-accent-amber",
  spectral: "spectral-edge text-foreground bg-surface",
  neutral: "text-muted-light",
  outline: "text-foreground border-b border-border",
};

const dotVariants: Record<BadgeVariant, string> = {
  default: "bg-border-strong",
  indigo: "bg-accent-indigo",
  coral: "bg-accent-coral",
  teal: "bg-accent-teal",
  violet: "bg-accent-violet",
  amber: "bg-accent-amber",
  spectral: "bg-accent",
  neutral: "bg-border-strong",
  outline: "bg-foreground",
};

const categoryVariantMap: Record<string, BadgeVariant> = {
  "quality engineering": "teal",
  "ai systems": "indigo",
  "artificial intelligence": "indigo",
  engineering: "indigo",
  strategy: "coral",
  consulting: "coral",
  technology: "teal",
};

export function resolveBadgeVariant(label: string): BadgeVariant {
  const key = label.trim().toLowerCase();
  return categoryVariantMap[key] ?? "default";
}

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  /** Render the badge with a leading dot instead of just text. */
  dot?: boolean;
};

export function Badge({ children, className, variant, dot = true }: BadgeProps) {
  const resolvedVariant =
    variant ??
    (typeof children === "string" ? resolveBadgeVariant(children) : "default");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 label-mono",
        badgeVariants[resolvedVariant],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full", dotVariants[resolvedVariant])}
        />
      )}
      {children}
    </span>
  );
}

type StatusIndicatorProps = {
  label: string;
  status?: "active" | "idle";
  color?: "teal" | "indigo" | "coral";
  variant?: "mono" | "sans";
};

export function StatusIndicator({
  label,
  status = "active",
  color = "teal",
  variant = "mono",
}: StatusIndicatorProps) {
  const dotClass =
    status === "active"
      ? color === "indigo"
        ? "status-dot status-dot--indigo"
        : color === "coral"
          ? "status-dot status-dot--coral"
          : "status-dot status-dot--active"
      : "status-dot status-dot--idle";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-muted",
        variant === "mono" ? "label-mono" : "label-sans",
      )}
    >
      <span className={dotClass} aria-hidden="true" />
      {label}
    </span>
  );
}
