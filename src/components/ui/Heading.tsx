import { cn } from "@/lib/utils";
import { type ElementType, type HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  className,
  level,
  ...props
}: HeadingProps) {
  const H = level as ElementType;
  return (
    <H
      className={cn(
        "text-4xl font-bold tracking-tight text-foreground",
        level === "h1" && "sm:text-5xl lg:text-6xl",
        level === "h2" && "sm:text-4xl lg:text-5xl",
        level === "h3" && "sm:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    />
  );
}
