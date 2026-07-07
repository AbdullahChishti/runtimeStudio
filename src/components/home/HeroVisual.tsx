"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const nodes = [
  { x: 20, y: 30, label: "QA" },
  { x: 50, y: 20, label: "AI" },
  { x: 80, y: 35, label: "API" },
  { x: 35, y: 65, label: "CI" },
  { x: 65, y: 70, label: "DATA" },
  { x: 50, y: 50, label: "CORE" },
];

const connections: [number, number][] = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [0, 3],
  [1, 2],
  [2, 4],
];

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 12);
      mouseY.set(y * 12);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [shouldReduceMotion, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface"
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {connections.map(([from, to], i) => (
            <motion.line
              key={`line-${i}`}
              x1={nodes[from].x}
              y1={nodes[from].y}
              x2={nodes[to].x}
              y2={nodes[to].y}
              stroke="currentColor"
              strokeWidth="0.15"
              className="text-border-strong"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                delay: shouldReduceMotion ? 0 : i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {nodes.map((node, i) => (
            <g key={node.label}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.label === "CORE" ? 2.5 : 1.5}
                className={
                  node.label === "CORE" ? "fill-foreground" : "fill-muted-light"
                }
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.3 + i * 0.08,
                }}
              />
              <text
                x={node.x}
                y={node.y - 3.5}
                textAnchor="middle"
                className="fill-muted font-mono text-[2.5px] uppercase tracking-wider"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border border-border bg-background/80 px-3 py-2 backdrop-blur-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          System status
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
          Operational
        </span>
      </div>
    </div>
  );
}
