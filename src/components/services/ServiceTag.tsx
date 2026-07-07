"use client";

import { cn } from "@/lib/utils";
import { accentClasses, type ServiceAccent } from "@/content/services";

type ServiceTagProps = {
  children: React.ReactNode;
  accent: ServiceAccent;
  className?: string;
};

export function ServiceTag({ children, accent, className }: ServiceTagProps) {
  const styles = accentClasses[accent];

  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 label-mono",
        styles.border,
        styles.bgSubtle,
        styles.text,
        className,
      )}
    >
      {children}
    </span>
  );
}
