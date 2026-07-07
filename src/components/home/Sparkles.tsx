"use client";

"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface SparklesProps {
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  id: string;
}

export const SparklesCore = memo(
  ({
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 75,
    className,
    particleColor = "#FFFFFF",
    id,
  }: SparklesProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

    useEffect(() => {
      if (isReducedMotion) {
        return;
      }
      // Load tsParticles library dynamically
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@2.12.0/tsparticles.confetti.bundle.min.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [isReducedMotion]);

    useEffect(() => {
      if (isReducedMotion || !scriptLoaded || !canvasRef.current) {
        return;
      }

      let animationFrameId: number | undefined;
      let tsParticlesInstance: any; // Type for tsParticles instance

      const startParticles = async () => {
        const { loadFireworksPreset } = (window as any).tsparticles;
        await loadFireworksPreset((window as any).tsParticles);

        tsParticlesInstance = await (window as any).tsParticles.load(id, {
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          emitters: [
            {
              position: {
                x: 50,
                y: 30,
              },
              rate: {
                quantity: particleDensity,
                delay: 0.1,
              },
              life: {
                duration: 2,
                count: 1,
              },
            },
          ],
          particles: {
            color: {
              value: particleColor,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "destroy",
              },
              speed: 2,
            },
            size: {
              value: {
                min: minSize,
                max: maxSize,
              },
            },
            opacity: {
              value: {
                min: 0.2,
                max: 0.8,
              },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
                startValue: "max",
                destroy: "min",
              },
            },
            links: {
              enable: false,
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
        });

        const canvas = canvasRef.current;
        if (canvas && tsParticlesInstance) {
          const engine = tsParticlesInstance.dom[0];
          if (engine) {
            engine.canvas.element.style.position = "absolute";
            engine.canvas.element.style.top = "0";
            engine.canvas.element.style.left = "0";
            engine.canvas.element.style.width = "100%";
            engine.canvas.element.style.height = "100%";
          }
        }
      };

      startParticles();

      const resizeObserver = new ResizeObserver(() => {
        tsParticlesInstance?.refresh();
      });

      if (canvasRef.current) {
        resizeObserver.observe(canvasRef.current);
      }

      return () => {
        cancelAnimationFrame(animationFrameId as number);
        if (tsParticlesInstance) {
          tsParticlesInstance.destroy();
        }
        resizeObserver.disconnect();
      };
    }, [id, minSize, maxSize, particleDensity, particleColor, scriptLoaded, isReducedMotion]);

    return (
      <div className={cn("h-full w-full", className)}>
        <canvas ref={canvasRef} id={id} className="h-full w-full"></canvas>
      </div>
    );
  },
);

SparklesCore.displayName = "SparklesCore";
