import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export function Text({
  className,
  weight = "normal",
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "text-base text-foreground",
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        className,
      )}
      {...props}
    />
  );
}
