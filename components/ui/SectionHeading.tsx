'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode;
}

export default function SectionHeading({ index, eyebrow, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--accent-2)] uppercase">
          {index}
        </span>
        <span className="h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--text-muted)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight leading-[1.1] text-[var(--text)]">
        {title}
      </h2>
    </motion.div>
  );
}