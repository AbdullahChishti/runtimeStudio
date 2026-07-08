import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Use the muted body color for descriptive paragraphs. */
  muted?: boolean;
  /** Tighten leading for punchier body copy. */
  tight?: boolean;
}

/**
 * Text — the body primitive. Default is the foreground ink; set `muted`
 * for the secondary description tone. Keep paragraphs inside the
 * editorial grid, not inside boxes.
 */
export function Text({
  className,
  weight = "normal",
  muted = false,
  tight = false,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "text-base",
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        muted ? "text-muted" : "text-foreground",
        tight ? "leading-snug" : "leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}
