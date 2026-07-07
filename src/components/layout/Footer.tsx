import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="text-lg font-medium tracking-tight text-foreground">
                Runtime Studio
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <span className="text-border-strong" aria-hidden="true">
                /
              </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Company
              </p>
              <ul className="space-y-3">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Services
              </p>
              <ul className="space-y-3">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Legal
              </p>
              <ul className="space-y-3">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-light">
              © {new Date().getFullYear()} Runtime Studio
            </p>
            {process.env.NEXT_PUBLIC_APP_VERSION ? (
              <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
                v{process.env.NEXT_PUBLIC_APP_VERSION}
              </span>
            ) : null}
          </div>
          <p className="text-sm text-muted">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
