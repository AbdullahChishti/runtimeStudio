import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  variant?: "default" | "strong" | "accent" | "spectral";
};

/**
 * Divider — a horizontal rule, not a card separator. Use the accent or
 * spectral variants to mark a shift in the Open Field narrative.
 */
export function Divider({ className, variant = "default" }: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        "w-full",
        variant === "default" && "divider",
        variant === "strong" && "divider-strong",
        variant === "accent" && "divider-accent",
        variant === "spectral" && "divider-spectral",
        className,
      )}
    />
  );
}
