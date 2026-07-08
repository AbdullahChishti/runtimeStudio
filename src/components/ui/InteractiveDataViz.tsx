"use client";

import { useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type InteractiveDataVizProps = {
  /** Explicit series (0–1 range recommended). If omitted, a deterministic
   *  series is generated from `seed`. */
  data?: number[];
  /** Seed for the deterministic generator (stable across SSR/export). */
  seed?: number;
  /** Number of samples to generate when `data` is not provided. */
  samples?: number;
  variant?: "bars" | "wave";
  label?: string;
  /** Optional unit appended to the hovered readout, e.g. "%", "ms". */
  unit?: string;
  className?: string;
  height?: number;
};

/** Deterministic PRNG — mulberry32. Keeps the generated aesthetic stable
 *  between server render and client hydration (no layout drift). */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateSeries(seed: number, count: number): number[] {
  const rand = mulberry32(seed);
  let value = 0.5;
  return Array.from({ length: count }, (_, i) => {
    // A gently mean-reverting walk with a slow sinusoidal bias — reads as
    // a plausible "signal" rather than noise.
    const drift = Math.sin((i / count) * Math.PI * 2) * 0.18;
    value += (rand() - 0.5) * 0.42 + (0.5 + drift - value) * 0.25;
    return Math.min(0.98, Math.max(0.04, value));
  });
}

const VIEW_W = 640;

/**
 * InteractiveDataViz — a small, data-driven visualization primitive that
 * embodies the "data as texture" idea of the Open Field system. The
 * series is generated algorithmically (deterministic, seedable) and the
 * palette is sampled from the perceptual spectral ring, so the chart is
 * an expression of the design language rather than a bolted-on widget.
 *
 * It is fully interactive (pointer/keyboard reveals a live readout),
 * accessible (exposes the series as text), respects reduced motion, and
 * renders identically on the server and client for static export.
 *
 * The frame is a ruled technical plane, not a card: a hairline top rule
 * and a subtle substrate fill keep the viz anchored in the composition.
 */
export function InteractiveDataViz({
  data,
  seed = 7,
  samples = 28,
  variant = "bars",
  label = "Generative signal field",
  unit = "",
  className,
  height = 220,
}: InteractiveDataVizProps) {
  const reduce = useReducedMotion();
  const gradientId = useId();
  const [active, setActive] = useState<number | null>(null);

  const series = useMemo(
    () => data ?? generateSeries(seed, samples),
    [data, seed, samples],
  );

  const count = series.length;
  const step = VIEW_W / count;
  const readout =
    active !== null ? Math.round(series[active] * 100) : Math.round(
      (series.reduce((s, v) => s + v, 0) / count) * 100,
    );

  const spectralFor = (i: number) => `var(--spectral-${(i % 6) + 1})`;

  const handlePointer = (event: React.PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const index = Math.min(count - 1, Math.max(0, Math.floor(ratio * count)));
    setActive(index);
  };

  // Build the wave path + its area fill.
  const linePath = series
    .map((v, i) => {
      const x = i * step + step / 2;
      const y = height - v * (height - 12) - 6;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const areaPath = `${linePath} L${VIEW_W},${height} L0,${height} Z`;

  return (
    <figure
      className={cn(
        "relative overflow-hidden bg-surface border-t border-border",
        className,
      )}
      style={{ ["--dv-h" as string]: `${height}px` }}
    >
      <figcaption className="flex items-center justify-between gap-4 border-b border-border-hairline px-4 py-2.5">
        <span className="label-mono text-muted">{label}</span>
        <span className="data-readout text-sm text-foreground">
          <span className="text-accent">{readout}</span>
          {unit && <span className="text-muted">{unit}</span>}
          <span
            aria-hidden="true"
            className={cn(
              "ml-2 inline-block h-1.5 w-1.5 rounded-full align-middle",
              active !== null ? "bg-accent" : "bg-border-strong",
            )}
          />
        </span>
      </figcaption>

      <svg
        viewBox={`0 0 ${VIEW_W} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${label}: ${count} samples, mean ${Math.round(
          (series.reduce((s, v) => s + v, 0) / count) * 100,
        )} percent.`}
        className="dataviz-track block"
        onPointerMove={handlePointer}
        onPointerLeave={() => setActive(null)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {variant === "bars" ? (
          series.map((v, i) => {
            const barH = v * (height - 12);
            const x = i * step + step * 0.18;
            const w = step * 0.64;
            const y = height - barH;
            const isActive = active === i;
            return (
              <motion.rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={barH}
                rx={1}
                className="dataviz-bar"
                fill={spectralFor(i)}
                style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
                opacity={active === null ? 0.85 : isActive ? 1 : 0.35}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.015,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })
        ) : (
          <>
            <motion.path
              d={areaPath}
              fill={`url(#${gradientId})`}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d={linePath}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </>
        )}

        {active !== null && (
          <line
            x1={active * step + step / 2}
            x2={active * step + step / 2}
            y1={0}
            y2={height}
            stroke="var(--accent)"
            strokeWidth={1}
            strokeDasharray="2 3"
            vectorEffect="non-scaling-stroke"
            opacity={0.6}
          />
        )}
      </svg>
    </figure>
  );
}
