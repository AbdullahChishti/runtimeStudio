import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "prose" | "full";
  /** Remove the horizontal gutter for edge-to-edge, full-bleed layers. */
  bleed?: boolean;
};

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  prose: "max-w-2xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

/**
 * Container — the measure. Gutters are fluid (they scale with the
 * viewport via the space token scale) rather than snapping at fixed
 * breakpoints, so line length adapts smoothly across devices. In the
 * Open Field system, this is the primary boundary; content is not wrapped
 * in cards.
 */
export function Container({
  children,
  className,
  size = "default",
  bleed = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        !bleed && "px-[var(--space-sm)] sm:px-[var(--space-md)] lg:px-[var(--space-lg)]",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
