import { clsx } from "clsx";
import { type ComponentPropsWithoutRef } from "react";

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
