import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  variant?: "default" | "strong" | "accent";
};

export function Divider({ className, variant = "default" }: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        "w-full",
        variant === "default" && "divider",
        variant === "strong" && "divider-strong",
        variant === "accent" && "divider-accent",
        className,
      )}
    />
  );
}
