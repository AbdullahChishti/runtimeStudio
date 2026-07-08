import { ServiceAccent } from "@/content/services";
import { cn } from "@/lib/utils";

type ServiceTagProps = {
  children: React.ReactNode;
  accent: ServiceAccent;
};

const accentClasses = {
  teal: "bg-accent-teal-wash text-accent-teal-muted",
  violet: "bg-accent-violet-wash text-accent-violet-muted",
  amber: "bg-accent-amber-wash text-accent-amber-muted",
  indigo: "bg-accent-indigo-wash text-accent-indigo-muted",
};

export function ServiceTag({ children, accent }: ServiceTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        accentClasses[accent],
      )}
    >
      {children}
    </span>
  );
}
