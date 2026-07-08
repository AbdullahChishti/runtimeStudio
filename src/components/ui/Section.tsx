import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type AccentColor = "indigo" | "coral" | "teal" | "violet" | "amber";

/** Optional algorithmic field layer drawn behind the section content. */
type SectionField = "lattice" | "dots" | "contour";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  border?: boolean;
  accent?: AccentColor | false;
  size?: "default" | "narrow" | "wide" | "full";
  /** Draw a subtle generative substrate behind the section. */
  field?: SectionField | false;
  /** Force the section to be a full-bleed act on the page canvas. */
  bleed?: boolean;
  /** Layout shorthand — does not wrap content in a container when false. */
  contain?: boolean;
};

const accentBorderClasses: Record<AccentColor, string> = {
  indigo: "border-t border-accent-indigo-border",
  coral: "border-t border-accent-coral-border",
  teal: "border-t border-accent-teal-border",
  violet: "border-t border-accent-violet-border",
  amber: "border-t border-accent-amber-border",
};

const accentWashClasses: Record<AccentColor, string> = {
  indigo: "bg-gradient-to-b from-accent-indigo-subtle/40 to-transparent",
  coral: "bg-gradient-to-b from-accent-coral-subtle/30 to-transparent",
  teal: "bg-gradient-to-b from-accent-teal-subtle/35 to-transparent",
  violet: "bg-gradient-to-b from-accent-violet-subtle/35 to-transparent",
  amber: "bg-gradient-to-b from-accent-amber-subtle/30 to-transparent",
};

const fieldClasses: Record<SectionField, string> = {
  lattice: "field-lattice",
  dots: "field-dots",
  contour: "field-contour",
};

/**
 * Section — a full-bleed act in the Open Field composition. Content is
 * held by the editorial grid, not by cards. Use `field` for a generative
 * substrate, `accent` for a thematic top rule, and `bleed` for an
 * edge-to-edge canvas.
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  border = false,
  accent = false,
  size = "default",
  field = false,
  bleed = false,
  contain = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]",
        bleed && "bleed",
        border && !accent && "border-t border-border",
        accent && accentBorderClasses[accent],
        accent && accentWashClasses[accent],
        className,
      )}
    >
      {field && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            fieldClasses[field],
          )}
        />
      )}
      {contain ? (
        <Container size={size} className={containerClassName}>
          {children}
        </Container>
      ) : (
        <div className={containerClassName}>{children}</div>
      )}
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  accentLabel?: boolean;
  kicker?: boolean;
};

/**
 * SectionHeader — a typographic section marker. The label is rendered as
 * a mono kicker; the title is a large section heading. No boxed header,
 * just a clear vertical rhythm.
 */
export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  accentLabel = false,
  kicker = false,
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
            kicker && "kicker-rule",
          )}
        >
          {label}
        </p>
      )}
      <h2 className="heading-section text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl description-standard">
          {description}
        </p>
      )}
    </div>
  );
}
