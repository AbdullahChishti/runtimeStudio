import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusIndicator({
  label,
  status = "active",
}: {
  label: string;
  status?: "active" | "idle";
}) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "active" ? "bg-foreground animate-pulse" : "bg-border-strong",
        )}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
