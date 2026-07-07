"use client";

import { company } from "@/content/company";
import { trustClientAccents } from "@/components/home/Accents";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-2xl font-semibold text-muted-foreground"
        >
          {company.trust.label}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
        >
          {company.trust.clients.map((client, index) => (
            <span
              key={client}
              className={`text-4xl font-bold`}
              style={{ color: trustClientAccents[client] }}
            >
              {client}
            </span>
          ))}
        </motion.div>
        {company.trust.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-16 max-w-3xl rounded-3xl bg-secondary p-8 shadow-lg"
          >
            <p className="mb-6 text-xl italic text-foreground">
              "{company.trust.testimonial.quote}"
            </p>
            <p className="text-lg font-semibold text-foreground">
              {company.trust.testimonial.author}
            </p>
            <p className="text-muted-foreground">
              {company.trust.testimonial.role}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
