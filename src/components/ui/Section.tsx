import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  border?: boolean;
  size?: "default" | "narrow" | "wide";
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  border = false,
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]",
        border && "border-t border-border",
        className,
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {label && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
      )}
      <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
