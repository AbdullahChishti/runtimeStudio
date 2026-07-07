"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted group-hover:text-foreground transition-colors">
            RS
          </span>
          <span className="hidden sm:inline">Runtime Studio</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="ml-2">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-transform",
                mobileOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-transform",
                mobileOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border py-4 text-lg text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium tracking-tight text-background transition-colors hover:bg-accent"
              onClick={() => setMobileOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
