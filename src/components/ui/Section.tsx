import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type AccentColor = "indigo" | "coral" | "teal";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  border?: boolean;
  accent?: AccentColor | false;
  size?: "default" | "narrow" | "wide";
};

const accentBorderClasses: Record<AccentColor, string> = {
  indigo: "border-t border-accent-indigo-border",
  coral: "border-t border-accent-coral-border",
  teal: "border-t border-accent-teal-border",
};

const accentWashClasses: Record<AccentColor, string> = {
  indigo: "bg-gradient-to-b from-accent-indigo-subtle/40 to-transparent",
  coral: "bg-gradient-to-b from-accent-coral-subtle/30 to-transparent",
  teal: "bg-gradient-to-b from-accent-teal-subtle/35 to-transparent",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  border = false,
  accent = false,
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]",
        border && !accent && "border-t border-border",
        accent && accentBorderClasses[accent],
        accent && accentWashClasses[accent],
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
  accentLabel?: boolean;
  accentTitle?: ReactNode;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  accentLabel = false,
  accentTitle,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-4 label-mono text-muted",
            accentLabel && "section-label-accent",
          )}
        >
          {label}
        </p>
      )}
      <h2 className="heading-section text-balance">
        {accentTitle ?? title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl description-standard">
          {description}
        </p>
      )}
    </div>
  );
}
