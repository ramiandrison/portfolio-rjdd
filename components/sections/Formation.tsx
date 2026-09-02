'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const formation = [
  {
    title: 'Master en Informatique',
    school: 'EMIT — École de Management et d’Innovation Technologique',
    place: 'Fianarantsoa, Madagascar',
    period: '2017 — 2019',
  },
  {
    title: 'Licence en Informatique',
    school: 'EMIT — École de Management et d’Innovation Technologique',
    place: 'Fianarantsoa, Madagascar',
    period: '2014 — 2017',
  },
  {
    title: 'Baccalauréat série D',
    school: 'Lycée RAKOTO Andrianarijaona',
    place: 'Fianarantsoa, Madagascar',
    period: '2013',
  },
];

export default function Formation() {
  return (
    <section id="formation" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Formation"
          title={
            <>
              Un parcours <span className="text-gradient font-light">académique solide.</span>
            </>
          }
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative max-w-[820px]"
        >
          {/* Halo gradient */}
          <div className="absolute -inset-px rounded-[22px] bg-gradient-to-r from-[#8b5cf6]/40 via-[#6366f1]/20 to-[#22d3ee]/40 opacity-60 blur-[2px]" />
          <div className="relative glass-card rounded-[22px] p-8 md:p-10 bg-[var(--bg-elev)]">
            {formation.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 py-5 ${
                  i > 0 ? 'border-t border-[var(--line)]' : 'pt-0'
                } ${i < formation.length - 1 ? 'pb-5' : 'pb-0'} group/row`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] shrink-0 group-hover/row:scale-125 transition-transform duration-300" />
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[var(--text)] leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.school}
                      <br />
                      {item.place}
                    </div>
                  </div>
                </div>
                <span className="chip text-[var(--accent-2)] border-[rgba(34,211,238,0.3)] self-start sm:self-center shrink-0">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}