import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border py-12 relative overflow-hidden">
      <div className="field-noise absolute inset-0 z-0 opacity-20" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-gradient-spectral text-balance">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted description-sm text-pretty">{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className="label-mono text-accent-strong">Services</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent gradient-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-mono text-accent-strong">Legal</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent gradient-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-light text-pretty">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent gradient-underline"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent gradient-underline"
            >
            GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
