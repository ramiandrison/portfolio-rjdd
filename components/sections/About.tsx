'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '5+', label: 'Années' },
  { value: '10+', label: 'Projets' },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="À propos"
          title={
            <>
              Le métier d&apos;abord,{' '}
              <span className="text-gradient font-light">le code ensuite.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-14 lg:gap-20 items-start">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative max-w-[380px]"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/25 via-transparent to-[#22d3ee]/20 blur-xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden border border-[var(--line)] aspect-[4/5] bg-[var(--bg-elev)]">
              <Image
                src="/images/portrait.jpg"
                alt="Jean Dieu Donné RAMIANDRISON"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-[center_20%] transition-all duration-700 hover:scale-[1.03]"
                style={{ filter: 'grayscale(0.25) contrast(1.05)' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,6,10,0.55)] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-soft)]">
              Un excellent développeur connaît d&apos;abord le métier de ceux pour qui il code.
              Avant d&apos;ouvrir l&apos;éditeur, je veux comprendre : qui saisit ce formulaire à
              9h, qui lit cet écran à 23h.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--text-muted)]">
              Plus de 5 ans de pratique — trois ans chez Open Atlas, puis
              deux ans et demi chez MadaIT-Lab sur du React, NestJS et Stripe Connect.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12 max-w-[420px]">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}