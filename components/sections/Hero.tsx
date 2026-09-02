'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '7+', label: "années d'expérience" },
  { value: '10+', label: 'projets livrés' },
  { value: '20+', label: 'technologies maîtrisées' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Aurora */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-48 left-[15%] w-[520px] h-[520px] rounded-full bg-[#8b5cf6] opacity-20 blur-[140px]"
          animate={{ y: [0, -30, 0], x: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 right-[10%] w-[420px] h-[420px] rounded-full bg-[#22d3ee] opacity-10 blur-[140px]"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-x w-full relative z-10 pt-36 pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--bg-card)] backdrop-blur-md text-[12px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]" />
              </span>
              Disponible pour de nouvelles missions
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--text)]"
          >
            Jean Dieu Donné
            <br />
            <span className="text-gradient">Ramiandrison</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={item}
            className="mt-7 text-lg md:text-xl leading-relaxed text-[var(--text-muted)] max-w-[600px]"
          >
            Ingénieur & Développeur Full Stack — 7 ans d&apos;expérience. Du Symfony legacy au
            Next.js moderne, du plugin navigateur à l&apos;application mobile. Basé à Fianarantsoa,
            je travaille à distance avec des clients européens.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link href="#projects" className="btn-primary group">
              Voir mes projets
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="#contact" className="btn-secondary">
              Me contacter
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-[var(--line-soft)] max-w-[680px]"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[var(--text-muted)]"
        aria-hidden
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Défiler</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#8b5cf6] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}