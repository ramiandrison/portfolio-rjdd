'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const infos = [
  { label: 'Localisation', value: 'Fianarantsoa, Madagascar' },
  {
    label: 'Téléphone',
    value: '+261 34 84 821 84',
    href: 'tel:+261348482184',
  },
  { label: 'Fuseau', value: 'GMT+3' },
  { label: 'Statut', value: 'Disponible — sur projet', live: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative max-w-[900px] mx-auto"
        >
          {/* Halo + bordure gradient */}
          <div className="absolute -inset-px rounded-[26px] bg-gradient-to-r from-[#8b5cf6]/50 via-[#6366f1]/25 to-[#22d3ee]/50 opacity-70 blur-[2px]" />
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-[#8b5cf6]/15 to-[#22d3ee]/15 blur-3xl" />

          <div className="relative glass-card rounded-[26px] bg-[var(--bg-elev)] p-8 md:p-14 text-center overflow-hidden">
            {/* Glow interne */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[240px] rounded-full bg-[#8b5cf6] opacity-15 blur-[100px] pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]" />
                </span>
                Disponible pour de nouvelles missions
              </span>

              <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
                Un projet en tête ?
                <br />
                <span className="text-gradient">Parlons-en.</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-[var(--text-muted)] max-w-[480px] mx-auto leading-relaxed">
                Disponible pour des missions longues. Je réponds sous 48h, en français ou en
                anglais.
              </p>

              <div className="mt-10">
                <a
                  href="mailto:ramiandrison.jdd@gmail.com"
                  className="btn-primary group px-8 py-4 text-[15px]"
                >
                  Écrire un message
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </div>

              {/* Infos */}
              <div className="mt-12 pt-8 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {infos.map((info) => (
                  <div key={info.label}>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-1.5 font-medium">
                      {info.label}
                    </div>
                    <div className="text-[14px] text-[var(--text)] flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          info.live
                            ? 'bg-[#22d3ee] animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                            : 'bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee]'
                        }`}
                      />
                      {'href' in info && info.href ? (
                        <a
                          href={info.href}
                          className="transition-colors duration-300 hover:text-[#a78bfa]"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}