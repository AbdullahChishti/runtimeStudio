import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-accent border border-foreground",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-foreground hover:bg-surface-elevated",
  ghost: "bg-transparent text-muted hover:text-foreground border border-transparent",
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
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
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

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
