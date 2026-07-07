"use client";

import { motion, useReducedMotion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
};

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.04,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
