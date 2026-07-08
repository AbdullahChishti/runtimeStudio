"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type GenerativeBackgroundProps = {
  className?: string;
  /** Particle density multiplier (0.25–2). Lower is quieter. */
  density?: number;
  /** Advection speed multiplier. */
  speed?: number;
  /**
   * How often a particle inherits the live accent hue vs. neutral ink.
   * 0 = all ink, 1 = all accent. Kept low by default: the field is
   * structure, not decoration.
   */
  accentRatio?: number;
  /** Trail persistence, 0–1. Higher leaves longer flow lines. */
  trail?: number;
};

type Particle = { x: number; y: number; px: number; py: number; accent: boolean };

/**
 * GenerativeBackground — a live algorithmic substrate. Particles are
 * advected through a smooth pseudo–flow field (layered trigonometric
 * noise), leaving hairline traces that read as the "shape" of a scalar
 * field rather than decoration. It is a deterministic, dependency-free
 * canvas that:
 *
 *   · samples its colors from the CSS design tokens (so it adapts to
 *     light/dark and any --signal-hue rotation automatically),
 *   · pauses when off-screen or when the tab is hidden,
 *   · renders a single static frame under prefers-reduced-motion.
 *
 * It is purely presentational (aria-hidden, pointer-events: none) and
 * meant to sit behind content via absolute positioning.
 */
export function GenerativeBackground({
  className,
  density = 1,
  speed = 1,
  accentRatio = 0.12,
  trail = 0.9,
}: GenerativeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement ?? canvas;
    const styles = getComputedStyle(canvas);
    const inkColor = styles.getPropertyValue("--foreground").trim() || "#1a1712";
    const accentColor = styles.getPropertyValue("--accent").trim() || "#dc3f10";
    const bgColor = styles.getPropertyValue("--background").trim() || "#f4f2ec";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let time = 0;
    let running = true;

    // Smooth, tileable pseudo-noise → an angle in radians. Cheap, stable,
    // and deterministic (no RNG in the hot loop).
    const flowAngle = (x: number, y: number, t: number) => {
      const n =
        Math.sin(x * 0.0016 + t) +
        Math.cos(y * 0.0016 - t * 0.7) +
        Math.sin((x + y) * 0.0011 + t * 0.5);
      return n * Math.PI;
    };

    const seedParticles = () => {
      const target = Math.min(
        420,
        Math.max(24, Math.floor((width * height) / 20000) * density),
      );
      particles = Array.from({ length: target }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return { x, y, px: x, py: y, accent: Math.random() < accentRatio };
      });
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
      // Prime the frame with the substrate color.
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
    };

    const step = () => {
      // Fade the previous frame toward the background to build trails.
      ctx.globalAlpha = 1 - trail;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;
        const a = flowAngle(p.x, p.y, time);
        p.x += Math.cos(a) * 0.9 * speed;
        p.y += Math.sin(a) * 0.9 * speed;

        // Wrap at the edges to keep the field endless.
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Don't draw the seam when a particle wraps.
        if (Math.abs(p.x - p.px) > width / 2 || Math.abs(p.y - p.py) > height / 2) {
          continue;
        }

        ctx.globalAlpha = p.accent ? 0.5 : 0.14;
        ctx.strokeStyle = p.accent ? accentColor : inkColor;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      time += 0.0016 * speed;
    };

    const loop = () => {
      if (!running) return;
      step();
      raf = requestAnimationFrame(loop);
    };

    const drawStaticFrame = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      // A single settled snapshot of the field: short strokes along the
      // flow, no animation.
      for (const p of particles) {
        const a = flowAngle(p.x, p.y, 0);
        ctx.globalAlpha = p.accent ? 0.45 : 0.12;
        ctx.strokeStyle = p.accent ? accentColor : inkColor;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + Math.cos(a) * 8, p.y + Math.sin(a) * 8);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    resize();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawStaticFrame();
    });
    ro.observe(parent);

    if (reduceMotion) {
      drawStaticFrame();
    } else {
      // Only animate while visible.
      const io = new IntersectionObserver(
        ([entry]) => {
          const visible = entry.isIntersecting;
          if (visible && !raf) {
            running = true;
            raf = requestAnimationFrame(loop);
          } else if (!visible && raf) {
            running = false;
            cancelAnimationFrame(raf);
            raf = 0;
          }
        },
        { threshold: 0 },
      );
      io.observe(parent);

      const onVisibility = () => {
        if (document.hidden) {
          running = false;
          if (raf) cancelAnimationFrame(raf);
          raf = 0;
        } else if (!raf) {
          running = true;
          raf = requestAnimationFrame(loop);
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      running = true;
      raf = requestAnimationFrame(loop);

      return () => {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }

    return () => {
      ro.disconnect();
    };
  }, [density, speed, accentRatio, trail]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("generative-canvas", className)}
    />
  );
}
