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

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border-border bg-surface text-muted",
  indigo:
    "border-accent-indigo-border bg-accent-indigo-subtle text-accent-indigo",
  coral:
    "border-accent-coral-border bg-accent-coral-subtle text-accent-coral",
  teal:
    "border-accent-teal-border bg-accent-teal-subtle text-accent-teal",
  violet:
    "border-accent-violet-border bg-accent-violet-subtle text-accent-violet",
  amber:
    "border-accent-amber-border bg-accent-amber-subtle text-accent-amber",
  spectral: "spectral-edge border-transparent bg-surface text-foreground",
  neutral:
    "border-border bg-surface-elevated text-muted",
  outline: "border-border bg-transparent text-foreground"
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
};

export function Badge({ children, className, variant }: BadgeProps) {
  const resolvedVariant =
    variant ??
    (typeof children === "string" ? resolveBadgeVariant(children) : "default");

  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 label-mono rounded-[var(--radius-md)]",
        badgeVariants[resolvedVariant],
        className,
      )}
    >
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
