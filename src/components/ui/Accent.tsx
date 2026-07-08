import { clsx } from "clsx";
import { type ComponentPropsWithoutRef } from "react";

/**
 * Accent — an inline span that carries the live signal color. Use it
 * for the one weighted word in a headline, not for highlighting whole
 * blocks.
 */
export function Accent({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={clsx(
        "text-accent [-webkit-text-fill-color:unset] inline-block",
        className
      )}
      {...props}
    />
  );
}
