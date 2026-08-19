"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
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
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-accent/10">
      <div className="flex justify-between items-center px-6 lg:px-12 py-5 max-w-[1400px] mx-auto">
        <a
          href={withBasePath("/")}
          className="font-[var(--font-serif)] text-2xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {siteConfig.name}
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-10"
        >
          {mainNav.map((item) => {
            const isActive = activePath === normalizePath(item.href);
            return (
              <a
                key={item.href}
                href={withBasePath(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm tracking-wide uppercase transition-colors duration-200",
                  isActive
                    ? "text-accent font-semibold"
                    : "text-foreground/70 hover:text-accent",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={withBasePath("/services")}
            className="hidden md:block text-xs font-semibold text-foreground/70 hover:text-accent transition-colors uppercase tracking-widest"
          >
            View Packages
          </a>
          <a
            href={withBasePath("/contact")}
            className="text-xs font-semibold bg-accent text-white px-7 py-3.5 hover:bg-accent-strong transition-colors uppercase tracking-widest shadow-md"
          >
            Start Project
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-accent/10 bg-background md:hidden"
          >
            <div className="px-6 py-5">
              <nav aria-label="Mobile" className="flex flex-col gap-4">
                {mainNav.map((item) => {
                  const isActive = activePath === normalizePath(item.href);
                  return (
                    <a
                      key={item.href}
                      href={withBasePath(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "text-base uppercase tracking-wide transition-colors duration-200",
                        isActive
                          ? "text-accent font-semibold"
                          : "text-foreground/70 hover:text-accent",
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href={withBasePath("/contact")}
                  className="mt-4 inline-flex justify-center text-xs font-semibold bg-accent text-white px-7 py-3.5 hover:bg-accent-strong transition-colors uppercase tracking-widest"
                >
                  Start Project
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
