import { cn } from "@/lib/utils";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "mono" | "sans";
  accent?: boolean;
};

export function Label({
  children,
  className,
  variant = "mono",
  accent = false,
}: LabelProps) {
  return (
    <span
      className={cn(
        variant === "mono" ? "label-mono" : "label-sans",
        accent && "section-label-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
