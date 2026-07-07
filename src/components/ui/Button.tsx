"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent" | "inverted";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  pending?: boolean;
};

const variants = {
  primary:
    "bg-foreground text-background border border-foreground hover:bg-accent hover:border-accent",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-foreground",
  ghost:
    "bg-transparent text-muted hover:text-foreground border border-transparent hover:border-border",
  accent:
    "bg-accent text-white border border-accent hover:bg-accent-strong hover:border-accent-strong",
  inverted:
    "bg-background text-foreground border border-background hover:bg-surface-elevated",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  onClick,
  disabled,
  loading,
  pending,
}: ButtonProps) {
  const isLoading = loading || pending;
  const isDisabled = disabled || isLoading;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-[-0.01em] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none btn-glow-hover",
    variants[variant],
    className,
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
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
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
}
