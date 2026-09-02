'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LightboxProps {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, alt, index, onClose, onNavigate }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const total = images.length;

  useEffect(() => setMounted(true), []);

  const next = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && total > 1) next();
      if (e.key === 'ArrowLeft' && total > 1) prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [next, prev, onClose, total]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[300] bg-[rgba(3,4,8,0.94)] backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Fermer */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-[var(--text)] text-lg flex items-center justify-center hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
      >
        ✕
      </button>

      {/* Compteur */}
      <div className="absolute top-6 left-6 text-[11px] tracking-[0.2em] text-[var(--text-muted)] font-medium">
        <span className="text-[var(--accent-2)]">{String(index + 1).padStart(2, '0')}</span>
        {' / '}
        {String(total).padStart(2, '0')}
      </div>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl flex-1 min-h-0 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${alt} — vue ${index + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Navigation */}
      {total > 1 && (
        <div
          className="flex items-center gap-4 mb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Image précédente"
            className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-[var(--text)] flex items-center justify-center hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
          >
            ←
          </button>

          {/* Vignettes */}
          <div className="hidden sm:flex items-center gap-2 max-w-[60vw] overflow-x-auto hide-scrollbar">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onNavigate(i)}
                aria-label={`Vue ${i + 1}`}
                className={`relative w-14 h-9 rounded-lg overflow-hidden border transition-all duration-300 shrink-0 ${
                  i === index
                    ? 'border-[#8b5cf6] opacity-100 scale-105'
                    : 'border-[var(--line)] opacity-40 hover:opacity-80'
                }`}
              >
                <Image src={src} alt="" fill sizes="56px" className="object-cover object-top" />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Image suivante"
            className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--bg-card)] text-[var(--text)] flex items-center justify-center hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-300"
          >
            →
          </button>
        </div>
      )}
    </motion.div>,
    document.body
  );
}