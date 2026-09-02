'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Lightbox from '@/components/ui/Lightbox';

export interface Project {
  num: string;
  domain: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  link: string;
  image: string;
  gallery?: string[];
}

interface Props {
  project: Project;
  index: number;
  variants: Variants;
}

const SIZES = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw';

export default function ProjectCard({ project, index, variants }: Props) {
  const images = project.gallery?.length ? project.gallery : [project.image];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const hasMultiple = images.length > 1;

  const go = (dir: number) =>
    setCurrent((c) => (c + dir + images.length) % images.length);

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 3) * 0.1 }}
      className="glass-card group flex flex-col overflow-hidden p-0 hover:-translate-y-1.5"
    >
      {/* Image / Carrousel */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${project.title} — vue ${current + 1}`}
              fill
              sizes={SIZES}
              className="object-cover object-top"
              style={{ filter: 'saturate(0.9) contrast(1.02)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Voile + bouton zoom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-70" />
        <button
          type="button"
          onClick={() => setLightbox(current)}
          aria-label={`Agrandir ${project.title}`}
          className="absolute inset-0 z-10 cursor-zoom-in"
        />

        <span className="absolute top-4 left-4 z-20 chip bg-[rgba(5,6,10,0.7)] backdrop-blur-md">
          {project.num}
        </span>

        {/* Flèches carrousel */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Capture précédente"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[var(--line)] bg-[rgba(5,6,10,0.75)] backdrop-blur-md text-[var(--text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#8b5cf6]/25"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Capture suivante"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[var(--line)] bg-[rgba(5,6,10,0.75)] backdrop-blur-md text-[var(--text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#8b5cf6]/25"
            >
              ›
            </button>

            {/* Points */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Capture ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-5 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee]'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6 md:p-7 flex flex-col flex-1 gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-between gap-3 group/link"
        >
          <h3 className="font-display text-xl font-bold text-[var(--text)] tracking-tight leading-snug transition-colors duration-300 group-hover/link:text-[#a78bfa]">
            {project.title}
          </h3>
          <span className="shrink-0 w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--text-muted)] text-sm transition-all duration-300 group-hover/link:border-[#8b5cf6]/50 group-hover/link:text-[var(--text)] group-hover/link:bg-[#8b5cf6]/10 group-hover/link:rotate-45">
            ↗
          </span>
        </a>

        <p className="text-[14px] leading-relaxed text-[var(--text-muted)] flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-[var(--line-soft)] flex items-center justify-between">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
            {project.role}
          </span>
          <span className="text-[11px] text-[var(--text-muted)] truncate max-w-[55%]">
            {project.domain}
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          alt={project.title}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </motion.article>
  );
}