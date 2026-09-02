'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Parcours' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-20% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'bg-[rgba(8,9,15,0.82)] backdrop-blur-xl border border-[var(--line)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand */}
          <Link href="#top" className="flex items-center gap-2.5 group">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
            <span className="font-display font-bold text-lg text-[var(--text)] tracking-tight">
              JDD<span className="text-gradient">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--text)] bg-white/[0.06]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="btn-primary hidden lg:inline-flex py-2.5 px-5 text-[13px]">
              Me contacter
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-[var(--line)] bg-[var(--bg-card)] gap-[5px]"
            >
              <span
                className={`w-4 h-px bg-[var(--text)] transition-transform duration-300 ${
                  open ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`w-4 h-px bg-[var(--text)] transition-transform duration-300 ${
                  open ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 rounded-2xl bg-[rgba(8,9,15,0.95)] backdrop-blur-xl border border-[var(--line)] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-[var(--text)] bg-white/[0.06]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center mt-2"
              >
                Me contacter
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}