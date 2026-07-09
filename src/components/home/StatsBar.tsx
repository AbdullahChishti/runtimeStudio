"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/company";
import { motionEasing } from "@/components/animations/motion";

type StatCounterProps = {
  value: number;
  decimals: number;
  suffix: string;
};

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StatCounter({ value, decimals, suffix }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1.4,
      ease: motionEasing,
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="data-readout text-4xl text-foreground sm:text-5xl">
      {formatValue(display, decimals)}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <div className="relative z-10 border-t border-border">
      <Container className="py-10 lg:py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {company.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </dd>
              <p className="label-mono text-muted-light">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
