# Portfolio - Jean Dieu Donné RAMIANDRISON

Portfolio personnel moderne développé avec Next.js 16, TypeScript et Tailwind CSS 4.

## 🚀 Technologies

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + CSS Transitions
- **Fonts**: Google Fonts (Dosis)
- **Images**: Next.js Image Optimization

## 📁 Structure du Projet

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux et CSS variables
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Navigation sticky avec scroll tracking
│   │   └── Footer.tsx       # Footer avec liens
│   ├── sections/
│   │   ├── Hero.tsx         # Section héro avec animations
│   │   ├── About.tsx        # À propos avec portrait
│   │   ├── Experience.tsx   # Parcours professionnel
│   │   ├── Formation.tsx    # Formation académique
│   │   ├── Skills.tsx       # Compétences techniques
│   │   ├── Projects.tsx     # Projets avec scroll horizontal
│   │   └── Contact.tsx      # Section contact
│   └── ui/
│       ├── CustomCursor.tsx # Curseur personnalisé (desktop)
│       └── ScrollProgress.tsx # Barre de progression
└── public/
    └── images/              # Images statiques
```

## 🎨 Caractéristiques

### Design
- **Dark Theme**: Palette de couleurs sombre avec accents dorés
- **Typography**: Police Dosis avec différentes épaisseurs
- **Responsive**: Optimisé pour mobile, tablette et desktop
- **Accessibility**: Focus visible, ARIA labels, navigation clavier

### Animations
- **Hero Animation**: Animation séquentielle en 4 temps au chargement
- **Scroll Animations**: IntersectionObserver pour les animations au scroll
- **Hover Effects**: Transitions fluides sur les éléments interactifs
- **Custom Cursor**: Curseur animé avec effet de suivi (desktop uniquement)
- **Smooth Scroll**: Défilement fluide entre les sections

### Sections
1. **Hero**: Introduction avec titre animé et CTA
2. **About**: Portrait avec description de l'approche
3. **Experience**: Timeline des expériences professionnelles
4. **Formation**: Diplôme académique avec carte stylisée
5. **Skills**: 4 catégories de compétences avec animations
6. **Projects**: 7 projets en scroll horizontal avec progression
7. **Contact**: Informations de contact et CTA

## 🛠️ Installation

```bash
# Installation des dépendances
pnpm install

# Développement
pnpm run dev

# Build de production
pnpm run build

# Démarrer en production
pnpm run start
```

## 📝 Personnalisation

### Variables CSS (globals.css)
```css
:root {
  --bg: #0a0a0a;              /* Fond principal */
  --bg-elev: #0f0f0f;         /* Fond élevé */
  --text: #ffffff;             /* Texte principal */
  --text-soft: #dadada;        /* Texte doux */
  --text-muted: #777777;       /* Texte atténué */
  --accent: rgba(200,170,130,1); /* Couleur d'accent */
  --line: rgba(255,255,255,0.1); /* Lignes de séparation */
}
```

### Modifier le contenu

1. **Informations personnelles**: Modifier `app/layout.tsx` (metadata)
2. **Sections**: Éditer les fichiers dans `components/sections/`
3. **Navigation**: Ajuster `components/layout/Navigation.tsx`
4. **Projets**: Modifier le tableau `projects` dans `Projects.tsx`
5. **Compétences**: Modifier `skillCategories` dans `Skills.tsx`

## 🎯 Optimisations

- **Performance**: Next.js App Router avec génération statique
- **Images**: Optimisation automatique avec next/image
- **Fonts**: Optimisation avec next/font
- **Bundle**: Tree-shaking et code splitting automatiques
- **SEO**: Métadonnées complètes et structure sémantique

## 📱 Responsive

- **Mobile**: < 640px - Navigation simplifiée, grilles en colonne
- **Tablet**: 640px - 1024px - Mise en page adaptative
- **Desktop**: > 1024px - Curseur personnalisé, scroll horizontal

## ♿ Accessibilité

- Navigation au clavier
- Focus visible sur tous les éléments interactifs
- Contraste de couleurs WCAG AA
- Support du mode mouvement réduit (prefers-reduced-motion)
- Structure HTML sémantique
- Textes alternatifs sur les images

## 🌐 Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

```bash
# Build pour production
pnpm run build

# Les fichiers sont dans le dossier .next/
```

## 📄 Licence

Tous droits réservés © 2025 Jean Dieu Donné RAMIANDRISON

## 🤝 Contact

Pour toute question ou collaboration :
- **Email**: ramiandrison.jdd@gmail.com
- **Téléphone**: +261 34 84 821 84
- **Localisation**: Fianarantsoa, Madagascar
- **Fuseau horaire**: GMT+3
