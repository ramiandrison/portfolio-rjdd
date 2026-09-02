import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navigation from '@/components/layout/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jean Dieu Donné RAMIANDRISON — Ingénieur & Full Stack',
  description:
    "Portfolio de Jean Dieu Donné RAMIANDRISON, Ingénieur et Développeur Full Stack. 7 ans d'expérience en développement web, du Symfony legacy au Next.js moderne.",
  keywords: [
    'développeur full stack',
    'ingénieur logiciel',
    'React',
    'Next.js',
    'Symfony',
    'TypeScript',
    'Madagascar',
  ],
  authors: [{ name: 'Jean Dieu Donné RAMIANDRISON' }],
  openGraph: {
    title: 'Jean Dieu Donné RAMIANDRISON — Ingénieur & Full Stack',
    description: "Portfolio de développeur Full Stack avec 7 ans d'expérience",
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen antialiased`}>
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}