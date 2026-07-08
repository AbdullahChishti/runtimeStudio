"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { cn, withBasePath } from "@/lib/utils";

function normalizePath(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const activePath = normalizePath(pathname ?? "/");

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
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
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-[14px]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href={withBasePath("/")}
            className="group flex items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-accent"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center border border-border-strong text-[0.625rem] font-bold leading-none transition-colors group-hover:border-accent">
              RS
            </span>
            <span>{siteConfig.name}</span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNav.map((item) => {
              const isActive = activePath === normalizePath(item.href);
              return (
                <a
                  key={item.href}
                  href={withBasePath(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm tracking-[-0.01em] transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1px] w-full origin-left bg-accent transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={withBasePath("/contact")}
              className="hidden items-center justify-center rounded-sm bg-foreground px-3.5 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-background transition-colors duration-200 hover:bg-accent hover:text-[var(--primary-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
            >
              Contact
            </a>

            <button
              ref={toggleRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-strong text-foreground transition-colors duration-200 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="flex flex-col py-5">
                {mainNav.map((item) => {
                  const isActive = activePath === normalizePath(item.href);
                  return (
                    <a
                      key={item.href}
                      href={withBasePath(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "border-b border-border py-3.5 text-base tracking-[-0.01em] transition-colors duration-200 last:border-b-0",
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href={withBasePath("/contact")}
                  className="mt-5 flex items-center justify-center rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium tracking-[-0.01em] text-background transition-colors duration-200 hover:bg-accent hover:text-[var(--primary-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Contact
                </a>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
