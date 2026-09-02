'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/sections/ProjectCard';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const appShots = Array.from(
  { length: 9 },
  (_, i) => `/images/app.letrocfute.com/app-0${i + 1}.png`
);

const projects = [
  {
    num: '01',
    domain: 'letrocfute.com',
    title: 'Le Troc Futé',
    description:
      "Site vitrine de la plateforme Le Troc Futé : présentation du concept, des tarifs et des fonctionnalités, avec redirection vers le CRM sur app.letrocfute.com.",
    tags: ['Next.js'],
    role: 'Full Stack',
    link: 'https://letrocfute.com/',
    image: '/images/letrocfute.com/home.png',
  },
  {
    num: '02',
    domain: 'app.letrocfute.com',
    title: 'Le Troc Futé — App',
    description:
      "Application d'automatisation pour vendeurs Vinted : création d'annonces assistée par IA, républication et modification de prix en masse, réponses et négociation automatiques aux acheteurs, messages aux favoris — avec abonnements et facturation Stripe.",
    tags: ['Next.js', 'Symfony', 'MySQL', 'Firebase'],
    role: 'Full Stack',
    link: 'https://app.letrocfute.com/',
    image: '/images/app.letrocfute.com/app-01.png',
    gallery: appShots,
  },
  {
    num: '03',
    domain: 'cpts-la-providence.ivehte.fr',
    title: 'CPTS La Providence',
    description:
      "Solution française d'e-santé qui simplifie l'éducation thérapeutique pour les personnes atteintes de maladies chroniques. Site web pour une Communauté Professionnelle Territoriale de Santé : présentation des professionnels, actualités et coordination des parcours de soins.",
    tags: ['React.js', 'Symfony', 'MySQL', 'Firebase Messaging'],
    role: 'Full Stack',
    link: 'https://cpts-la-providence.ivehte.fr/',
    image: '/images/cpts-la-providence.ivehte.fr/logo.jpg',
  },
  {
    num: '04',
    domain: 'dumg-toulouse.ivehte.fr',
    title: 'DUMG Toulouse',
    description:
      "Solution française d'e-santé qui simplifie l'éducation thérapeutique pour les personnes atteintes de maladies chroniques. Site institutionnel pour le Département Universitaire de Médecine Générale de Toulouse : présentation du département, actualités et ressources pour étudiants et professionnels.",
    tags: ['React.js', 'Symfony', 'MySQL', 'Firebase Messaging'],
    role: 'Full Stack',
    link: 'https://dumg-toulouse.ivehte.fr',
    image: '/images/dumg-toulouse.ivehte.fr/ivehte.jpg',
  },
  {
    num: '05',
    domain: 'kafmaron.re',
    title: 'Kafmaron',
    description:
      `Site vitrine et plateforme e-commerce pour l'artiste réunionnais Kafmaron : présentation de son album "Lankraz", téléchargement de musique (MP3/livret de paroles), calendrier des concerts, galerie photos/vidéos et localisation des points de vente physiques à La Réunion`,
    tags: ['jQuery', 'Yii (PHP)', 'MongoDB'],
    role: 'Full Stack',
    link: 'https://www.kafmaron.re/',
    image: '/images/kafmaron.re/home.png',
  },
  {
    num: '06',
    domain: 'addons.mozilla.org',
    title: 'Extension Firefox — Le Troc Futé',
    description:
      "Extension Firefox connectée à la plateforme Le Troc Futé : notifications des nouveaux échanges et accès rapide aux annonces depuis le navigateur.",
    tags: ['JavaScript', 'WebExtension API'],
    role: 'Auteur',
    link: 'https://addons.mozilla.org/fr/firefox/addon/le-troc-fut%C3%A9/',
    image: '/images/extension.firefox.ltf/home.png',
  },
  {
    num: '07',
    domain: 'chromewebstore.google.com',
    title: 'Extension Chrome — Le Troc Futé',
    description:
      "Portage Chrome de l'extension Le Troc Futé : suivi des échanges et notifications, publiée sur le Chrome Web Store.",
    tags: ['JavaScript', 'Chrome API'],
    role: 'Auteur',
    link: 'https://chromewebstore.google.com/detail/le-troc-fut%C3%A9/adpnhgmdgemdmnjmfdcndjccppjfdgdo',
    image: '/images/extension.chrome.ltf/home.png',
  },
  {
    num: '08',
    domain: 'avotraina.vercel.app',
    title: 'Avot’raina — Centre Médical',
    description:
      "Logiciel de gestion complète pour centre médical : patients, rendez-vous, consultations, pharmacie, stocks et comptabilité — avec dashboard analytique et PWA installable.",
    tags: ['Firebase', 'Next.js', 'Express.js'],
    role: 'Full Stack',
    link: 'https://avotraina.vercel.app',
    image: '/images/avotraina.vercel.com/shot-01.png',
    gallery: Array.from(
      { length: 8 },
      (_, i) => `/images/avotraina.vercel.com/shot-0${i + 1}.png`
    ),
  },
  {
    num: '09',
    domain: 'goblackbird.fr',
    title: 'Blackbird — Livraison de repas',
    description:
      "Site bordelais de livraison de repas à vélo (plus de 60 restaurants partenaires) — projet existant sur lequel je suis intervenu, sans en être le propriétaire. Ce que j'ai réalisé : mise en place du paiement par carte via Stripe et amélioration de la configuration des prix de livraison selon la distance.",
    tags: ['Stripe'],
    role: 'Développeur',
    link: 'https://www.goblackbird.fr/',
    image: '/images/goblackbird.fr/og.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Projets"
          title={
            <>
              Des projets réels,{' '}
              <span className="text-gradient font-light">utilisés chaque jour.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              variants={fadeUp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}