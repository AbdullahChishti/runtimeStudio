import { cn } from "@/lib/utils";
import type { ServiceAccent } from "@/content/services";

type CaseStudyVisualProps = {
  slug: string;
  accent: ServiceAccent;
  className?: string;
};

const strokeColor: Record<ServiceAccent, string> = {
  teal: "var(--accent-teal)",
  violet: "var(--accent-violet)",
  amber: "var(--accent-amber)",
  indigo: "var(--accent-indigo)",
};

export function CaseStudyVisual({ slug, accent, className }: CaseStudyVisualProps) {
  const color = strokeColor[accent];

  return (
    <div
      className={cn("relative overflow-hidden bg-surface-elevated", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <svg
        className="relative h-full w-full"
        viewBox="0 0 120 80"
        preserveAspectRatio="xMidYMid slice"
      >
        {slug === "ai-testing-platform" && (
          <g>
            <line
              x1="12"
              y1="40"
              x2="108"
              y2="40"
              stroke={color}
              strokeWidth="0.4"
              opacity="0.25"
            />
            {[18, 40, 62, 84].map((x, i) => (
              <g key={x}>
                <line
                  x1={x}
                  y1="40"
                  x2={x + (i % 2 === 0 ? -8 : 8)}
                  y2={i % 2 === 0 ? 18 : 62}
                  stroke={color}
                  strokeWidth="0.45"
                  opacity="0.35"
                />
                <circle
                  cx={x + (i % 2 === 0 ? -8 : 8)}
                  cy={i % 2 === 0 ? 18 : 62}
                  r="2.5"
                  fill={color}
                  opacity={0.45 + i * 0.08}
                />
              </g>
            ))}
            <circle cx="12" cy="40" r="3" fill={color} opacity="0.55" />
          </g>
        )}

        {slug === "qa-automation-transformation" && (
          <g>
            {[22, 40, 58].map((y, i) => (
              <g key={y}>
                <line
                  x1="14"
                  y1={y}
                  x2="106"
                  y2={y}
                  stroke={color}
                  strokeWidth="0.35"
                  opacity={0.2 + i * 0.05}
                  strokeDasharray="2 3"
                />
                <rect
                  x={18 + i * 12}
                  y={y - 3}
                  width={24 + i * 8}
                  height="6"
                  fill="none"
                  stroke={color}
                  strokeWidth="0.45"
                  opacity={0.35 + i * 0.1}
                />
              </g>
            ))}
            <polygon points="98,22 106,26 98,30" fill={color} opacity="0.5" />
            <polygon points="98,40 106,44 98,48" fill={color} opacity="0.55" />
            <polygon points="98,58 106,62 98,66" fill={color} opacity="0.6" />
          </g>
        )}

        {slug === "ai-knowledge-platform" && (
          <g>
            {[0, 1, 2, 3].map((i) => (
              <ellipse
                key={i}
                cx="60"
                cy="40"
                rx={12 + i * 10}
                ry={8 + i * 6}
                fill="none"
                stroke={color}
                strokeWidth="0.4"
                opacity={0.45 - i * 0.08}
              />
            ))}
            <circle cx="60" cy="40" r="2.5" fill={color} opacity="0.6" />
            <line
              x1="60"
              y1="40"
              x2="88"
              y2="22"
              stroke={color}
              strokeWidth="0.4"
              opacity="0.35"
            />
            <circle cx="88" cy="22" r="1.5" fill={color} opacity="0.45" />
          </g>
        )}
      </svg>
    </div>
  );
}
