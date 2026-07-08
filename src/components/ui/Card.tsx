import { type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Internal route — renders the card as a Next link. */
  href?: string;
  /** Treat an external href as a plain anchor. */
  external?: boolean;
  /** Enable the hover treatment (firmer border, hairline lift). */
  interactive?: boolean;
  /** Mark the primary card with a thin Flux edge along the top. */
  signal?: boolean;
  /** Trace the generative spectral edge around the card (rare, high emphasis). */
  spectral?: boolean;
  /** Padding scale. */
  padding?: "none" | "sm" | "md" | "lg";
};

const paddings: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-5",
  md: "p-6 lg:p-7",
  lg: "p-8 lg:p-10",
};

/**
 * Card — a restrained content surface. Hairline frame, crisp radius, no
 * heavy shadow. Reach for a `Panel` (static, framed) or `Field` (spec
 * rows) first; use `Card` when a block is a discrete, often clickable
 * unit. `interactive` firms the border and lifts a hair on hover;
 * `signal` marks the single primary card with the Flux edge.
 */
export function Card({
  children,
  className,
  as,
  href,
  external,
  interactive,
  signal,
  spectral,
  padding = "md",
}: CardProps) {
  const classes = cn(
    "card block",
    (interactive || href) && "card-interactive",
    signal && "card-signal",
    spectral && "spectral-edge",
    (interactive || href) &&
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    paddings[padding],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const Tag = as ?? "div";

  return <Tag className={classes}>{children}</Tag>;
}
