import { footerNav, mainNav } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { withBasePath } from "@/lib/utils";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a
              href={withBasePath("/")}
              className="inline-block text-sm font-semibold tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-accent"
            >
              {siteConfig.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted text-pretty">
              {siteConfig.tagline}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <h2 className="label-mono text-accent-strong">Services</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <a
                    href={withBasePath(item.href)}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-mono text-accent-strong">Company</h2>
            <ul className="mt-4 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={withBasePath(item.href)}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-mono text-accent-strong">Legal</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={withBasePath(item.href)}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-light">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
