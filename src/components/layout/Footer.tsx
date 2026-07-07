import Link from "next/link";
import { footerNav } from "@/content/navigation";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated text-muted-light py-12 border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-foreground text-lg font-semibold">RuntimeStudio</h3>
            <p className="text-sm">
              Building the future of developer tools with modern design and powerful features.
            </p>
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground text-sm gradient-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground text-sm gradient-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-strong text-center text-sm">
          &copy; {currentYear} RuntimeStudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
