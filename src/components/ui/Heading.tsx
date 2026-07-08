import { cn } from "@/lib/utils";
import { type ElementType, type HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Editorial size treatment, independent of the semantic level. */
  size?: "display" | "hero" | "section" | "block" | "body";
}

/**
 * Heading — semantic + typographic level, remapped onto the fluid Open
 * Field scale. Use the `level` prop for document outline and `size` for
 * visual scale. The default is intentionally large and display-ready.
 */
export function Heading({
  className,
  level,
  size,
  ...props
}: HeadingProps) {
  const H = level as ElementType;
  const resolvedSize = size ?? (level === "h1" ? "hero" : level === "h2" ? "section" : "block");

  return (
    <H
      className={cn(
        "font-semibold tracking-tight text-foreground text-balance",
        resolvedSize === "display" && "heading-display",
        resolvedSize === "hero" && "heading-hero",
        resolvedSize === "section" && "heading-section",
        resolvedSize === "block" && "heading-block",
        resolvedSize === "body" && "text-base font-medium",
        className,
      )}
      {...props}
    />
  );
}
