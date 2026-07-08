"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setMobileOpen(false);

  // Focus trap + Escape-to-close + focus restore while the menu is open.
  useEffect(() => {
    if (!mobileOpen) return;

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border backdrop-blur-sm",
        mobileOpen ? "bg-background" : "bg-background/90",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.02em] text-foreground text-gradient-spectral transform-gpu transition-transform duration-300 hover:scale-105"
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "relative text-sm text-muted transition-colors hover:text-foreground group",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.label}
                <span className={cn(
                  "nav-accent-line absolute bottom-0 left-0 w-full h-[1px] bg-accent transition-all duration-300 origin-left",
                  pathname === item.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50",
                )} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/contact" size="sm" className="hidden sm:inline-flex btn-glow-hover">
              Contact
            </Button>

            <button
              ref={toggleRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-border-strong text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden transition-colors duration-200 hover:border-accent"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    d="M2 2L16 16M16 2L2 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M1 4.5H17M1 9H17M1 13.5H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={closeMenu}
                  className="border-b border-border py-3.5 text-base text-foreground last:border-b-0 transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" size="md" onClick={closeMenu} className="mt-5 w-full btn-glow-hover">
                Contact
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
