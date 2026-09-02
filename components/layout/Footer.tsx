'use client';

import Link from 'next/link';

const sectionLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: 'https://letrocfute.com/', label: 'Le Troc Futé' },
  { href: 'https://www.kafmaron.re/', label: 'Kafmaron' },
  {
    href: 'https://addons.mozilla.org/fr/firefox/addon/le-troc-fut%C3%A9/',
    label: 'Extension Firefox',
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line-soft)]">
      <div className="container-x py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          {/* Brand */}
          <div className="max-w-[320px]">
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
              <span className="font-display font-bold text-lg text-[var(--text)] tracking-tight">
                JDD<span className="text-gradient">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              Ingénieur & Développeur Full Stack.
              <br />
              Fianarantsoa · Madagascar
            </p>
          </div>

          {/* Sections */}
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-4 font-medium">
              Sections
            </div>
            <ul className="space-y-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-soft)] hover:text-[#a78bfa] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ailleurs */}
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-4 font-medium">
              Ailleurs
            </div>
            <ul className="space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-soft)] hover:text-[#a78bfa] transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <span className="text-[11px] opacity-60">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--line-soft)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
          <span>© 2025 — JDD Ramiandrison</span>
          <span>
            Conçu à Fianarantsoa · <span className="text-gradient">v2025</span>
          </span>
        </div>
      </div>
    </footer>
  );
}