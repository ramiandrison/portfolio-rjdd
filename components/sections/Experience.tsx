'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const experiences = [
  {
    company: 'MadaIT-Lab',
    role: 'Développeur Full Stack',
    period: 'Fév. 2024 — Présent',
    duration: '2 ans 7 mois',
    description:
      'Plateformes SaaS avec intégration Stripe Connect, applications React Native et extensions navigateur Firefox/Chrome.',
    current: true,
  },
  {
    company: 'Open Atlas',
    role: 'Développeur Web',
    period: 'Janv. 2021 — Fév. 2024',
    duration: '3 ans 2 mois',
    description:
      'Sites institutionnels pour le secteur santé et universitaire français. Plateformes métier sur mesure avec Symfony.',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Parcours"
          title={
            <>
              Sept ans, deux maisons,{' '}
              <span className="text-gradient font-light">mille contextes.</span>
            </>
          }
        />

        <div className="relative max-w-[820px]">
          {/* Ligne verticale */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#8b5cf6] via-[var(--line)] to-transparent" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.12 }}
              className="relative pl-10 pb-10 last:pb-0"
            >
              {/* Point timeline */}
              <span
                className={`absolute left-0 top-8 w-[15px] h-[15px] rounded-full border-2 ${
                  exp.current
                    ? 'border-[#22d3ee] bg-[#22d3ee] shadow-[0_0_16px_rgba(34,211,238,0.6)]'
                    : 'border-[#8b5cf6] bg-[var(--bg)] shadow-[0_0_16px_rgba(139,92,246,0.5)]'
                }`}
              />

              <div className="glass-card p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-bold text-[var(--text)] tracking-tight">
                      {exp.company}
                    </h3>
                    <div className="mt-1 text-[12px] tracking-[0.14em] uppercase font-medium bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                      {exp.role}
                    </div>
                  </div>
                  <div className="md:text-right shrink-0">
                    <div className="inline-flex items-center gap-2 chip normal-case tracking-normal text-[12px]">
                      {exp.current && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                      )}
                      {exp.period}
                    </div>
                    <div className="mt-2 text-[11px] text-[var(--text-muted)]">{exp.duration}</div>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}