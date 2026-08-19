import { siteConfig } from "@/lib/metadata";
import { withBasePath } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-white border-t border-accent/20 w-full py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 max-w-[1400px] mx-auto gap-8">
        <div
          className="text-2xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {siteConfig.name}
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/70 uppercase tracking-widest font-semibold">
          <a
            className="hover:text-accent transition-colors"
            href={withBasePath("/privacy")}
          >
            Privacy Policy
          </a>
          <a
            className="hover:text-accent transition-colors"
            href={withBasePath("/terms")}
          >
            Terms of Service
          </a>
          <a
            className="hover:text-accent transition-colors"
            href={withBasePath("/contact")}
          >
            Contact
          </a>
        </div>
        <div className="text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Premium Delivery.
        </div>
      </div>
    </footer>
  );
}
