"use client";

import { company } from "@/content/company";
import { services } from "@/content/services";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { AccentKey, accents } from "@/components/home/Accents";

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const accentColors: AccentKey[] = ["teal", "violet", "amber", "indigo"];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative rounded-3xl p-8 border-2 border-[${accents[accent]}] group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      <div
        className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity`}
        style={{ backgroundColor: accents[accent] }}
      ></div>
      <div className="relative z-10">
        <h3 className={`mb-4 text-3xl font-bold text-[${accents[accent]}]`}>
          {service.title}
        </h3>
        <p className="mb-6 text-lg text-foreground/90">
          {service.shortDescription}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className={`inline-flex items-center text-[${accents[accent]}] group-hover:text-foreground/90 transition-colors`}
        >
          Learn more
          <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export function ServicesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-5xl font-bold tracking-tight text-foreground"
        >
          Our Expertise
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
