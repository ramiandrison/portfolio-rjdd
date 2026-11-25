'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const skillCategories = [
  {
    name: 'Langages',
    skills: [
      { name: 'JavaScript', context: 'Front, back, extensions' },
      { name: 'TypeScript', context: 'Par défaut sur tout nouveau projet JS' },
      { name: 'PHP', context: 'Symfony — sites institutionnels' },
      { name: 'Java', context: 'POO, applications robustes côté serveur' },
      { name: 'Python', context: 'Scripting, automation, outillage' },
      { name: 'HTML5 / CSS', context: 'Intégration précise, animations, responsive' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React.js / Next.js', context: 'Frontend principal — SSR / SSG' },
      { name: 'Node.js / NestJS', context: 'APIs REST structurées, typage strict' },
      { name: 'Symfony', context: 'PHP enterprise — Open Atlas' },
      //{ name: 'React Native / Expo', context: 'Applications mobiles cross-platform' },
      { name: 'Redux.js / Zustand', context: 'State management — applications complexes et modernes' },
      { name: 'Tailwind CSS', context: 'Styling utility-first — v3 & v4' },
      { name: 'Framer Motion', context: 'Animations React — transitions, gestes' },
    ],
  },
  {
    name: 'Bases de données',
    skills: [
      { name: 'PostgreSQL', context: 'SQL par défaut — données strictes' },
      { name: 'MySQL', context: 'Projets Symfony' },
      { name: 'MongoDB', context: 'Documents — schémas flexibles' },
      { name: 'Firebase', context: 'Prototypes, real-time, authentification' },
      { name: 'Supabase', context: 'BaaS PostgreSQL — auth, real-time, storage' },
      { name: 'Prisma', context: 'ORM TypeScript — migrations, typage strict' },
    ],
  },
  {
    name: 'Outils, DevOps & Payments',
    skills: [
      {
        name: 'Stripe Connect',
        context:
          'Paiements de marketplace : répartition automatique des fonds, commissions plateforme, onboarding des vendeurs',
      },
      { name: 'Stripe', context: 'Paiements, abonnements, webhooks' },
      { name: 'Docker', context: 'Conteneurisation — environnements reproductibles' },
      { name: 'Git', context: 'Branches, rebase, résolution de conflits' },
      { name: 'Linux', context: 'Environnement de développement et de déploiement' },
      { name: 'Extensions Navigateur', context: 'WebExtension API (Firefox / Chrome)' },
    ],
  },
  {
    name: 'API & Temps réel',
    skills: [
      { name: 'APIs REST', context: 'Conception, versioning, authentification JWT' },
      { name: 'Socket.io / WebSocket', context: 'Temps réel — chat, notifications live' },
      { name: 'GraphQL', context: 'Requêtes typées, résolveurs, schéma unique' },
      { name: 'PWA', context: 'Applications web installables — offline-first' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title={
            <>
              Une boîte à outils{' '}
              <span className="text-gradient font-light">éprouvée en production.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (catIndex % 2) * 0.1 }}
              className={`glass-card p-7 md:p-8 group relative overflow-hidden ${
                catIndex === skillCategories.length - 1 && skillCategories.length % 2 === 1
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              {/* Liseré gradient au survol */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="font-display text-xl font-bold text-[var(--text)] tracking-tight mb-5 flex items-center gap-3">
                {category.name}
                <span className="text-[11px] font-medium text-[var(--text-muted)] chip py-0.5 px-2.5 pointer-events-none">
                  {String(category.skills.length).padStart(2, '0')}
                </span>
              </h3>

              <div>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-3.5 border-b border-[var(--line-soft)] last:border-0 group/row"
                  >
                    <div className="text-[15px] font-medium text-[var(--text-soft)] transition-colors duration-300 group-hover/row:text-[#a78bfa]">
                      {skill.name}
                    </div>
                    <div className="text-[12px] text-[var(--text-muted)] sm:text-right sm:max-w-[55%]">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}