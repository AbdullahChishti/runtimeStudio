'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'; // For scroll-triggered animations
import { Container } from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { Badge } from '@/components/ui/Badge';
import { caseStudies } from '@/content/caseStudies';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WorkList() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            variants={variants}
            className="group relative flex flex-col items-start rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--color-background), var(--color-background-soft))',
              borderColor: 'var(--color-border)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <div className="relative z-10">
              <Badge>{study.industry}</Badge>
              <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent-strong">
                <Link href={`/work/${study.slug}`} className="before:absolute before:inset-0">
                  {study.title}
                </Link>
              </h2>
              <Text className="mt-2 text-muted">{study.summary}</Text>
              <p className="relative z-10 mt-4 flex items-center text-sm font-medium text-accent-strong">
                Read case study
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
            <div
              className="absolute inset-0 transform bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
