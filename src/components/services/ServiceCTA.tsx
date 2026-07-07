"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Service, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type ServiceCTAProps = {
  service?: Service;
  className?: string;
};

export function ServiceCTA({ service, className }: ServiceCTAProps) {
  const reducedMotion = useReducedMotion();
  const accent = service ? accentClasses[service.accent] : null;

  return (
    <section className={cn("border-t border-border py-24 lg:py-32", className)}>
      <Container>
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: motionDurations.slow,
            ease: motionEasing,
          }}
          className={cn(
            "relative overflow-hidden p-10 lg:p-16",
            accent?.bgWash,
          )}
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to build with <span className="italic">confidence</span>?
            </h2>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              {service
                ? `Let's discuss how ${service.title.toLowerCase()} expertise can help your team.`
                : "Let's discuss your project and how we can help your team."}
            </p>
            <div className="mt-10">
              <Button href="/contact" className="px-8 py-4 text-base">
                Get in touch
              </Button>
            </div>
          </div>

          {accent && (
            <div
              className="absolute -right-16 -bottom-16 -z-0 h-80 w-80 opacity-10"
              aria-hidden="true"
            >
              <div className={cn("h-full w-full rounded-full blur-3xl", accent.dot)} />
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
