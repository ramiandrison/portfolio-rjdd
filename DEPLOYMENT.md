# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /home/gova/projects/portfolio
vercel

# Follow the prompts
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: portfolio (or custom)
# - Directory: ./
# - Override settings: No
```

### Option 2: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "Add New Project"
4. Import your Git repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Environment Variables** (if needed):
- None required for basic deployment

## 🌐 Other Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
pnpm run build

# Deploy
netlify deploy --prod

# Or use Netlify Drop (drag & drop .next folder)
```

**netlify.toml** (optional):
```toml
[build]
  command = "pnpm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your Git repository
3. Configure build settings:
   - Build command: `pnpm run build`
   - Output directory: `.next`
4. Deploy

### Docker

**Dockerfile**:
```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

**Build & Run**:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Traditional VPS (Ubuntu/Debian)

```bash
# On your server
sudo apt update
sudo apt install nodejs npm -y

# Install pnpm
npm install -g pnpm

# Clone or copy your project
git clone <your-repo>
cd portfolio

# Install dependencies
pnpm install

# Build
pnpm run build

# Start with PM2 (process manager)
npm install -g pm2
pm2 start "pnpm start" --name portfolio
pm2 save
pm2 startup
```

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Pre-Deployment Checklist

### 1. Update Content
- [ ] Replace placeholder images with real images
- [ ] Update contact email in `Contact.tsx`
- [ ] Verify all project links are correct
- [ ] Update metadata in `layout.tsx`
- [ ] Add your actual portrait image

### 2. Environment Setup
- [ ] Set up any required environment variables
- [ ] Configure image domains in `next.config.ts`
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

### 3. Performance
- [ ] Run `pnpm run build` to check for errors
- [ ] Test on multiple devices/browsers
- [ ] Verify image optimization is working
- [ ] Check lighthouse scores

### 4. SEO
- [ ] Verify metadata in `layout.tsx`
- [ ] Add robots.txt if needed
- [ ] Add sitemap.xml if needed
- [ ] Set up Google Search Console
- [ ] Submit to search engines

### 5. Security
- [ ] No sensitive data in code
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting if needed

## 🎯 Post-Deployment

### DNS Configuration
Point your domain to your hosting provider:
- **Vercel**: Add your domain in project settings
- **Netlify**: Configure custom domain in site settings
- **Others**: Point A record to server IP or CNAME to provider

### SSL Certificate
- **Vercel/Netlify**: Automatic with Let's Encrypt
- **Others**: Use Certbot for Let's Encrypt

### Monitoring
- Set up uptime monitoring (UptimeRobot, etc.)
- Configure error tracking (Sentry, etc.)
- Set up analytics (Google Analytics, Plausible)

### CDN & Caching
- Most providers (Vercel, Netlify) include CDN
- Configure cache headers if needed
- Set up image CDN if using external images

## 📊 Performance Optimization

### Image Optimization
```typescript
// Already configured in next.config.ts
// Add more domains as needed:
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'your-cdn.com' },
  ],
}
```

### Caching Headers
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### Bundle Analysis
```bash
# Install bundle analyzer
pnpm add -D @next/bundle-analyzer

# Analyze
ANALYZE=true pnpm run build
```

## 🔄 Continuous Deployment

### GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm run build
```

### Images Not Loading
- Check `next.config.ts` remote patterns
- Verify image URLs are accessible
- Check CORS headers on image host

### Fonts Not Loading
- Verify Google Fonts connection
- Check network tab for font loading
- Ensure proper font-display: swap

### Animations Not Working
- Check JavaScript is enabled
- Verify IntersectionObserver support
- Test in different browsers

## 📞 Support

For deployment issues:
- **Next.js Docs**: https://nextjs.org/docs/deployment
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: Create an issue in your repo

## ✅ Deployment Complete!

Once deployed, test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Animations play
- [ ] Images load and are optimized
- [ ] Forms submit (if any)
- [ ] Mobile responsive
- [ ] Performance scores (Lighthouse)
- [ ] SEO metadata visible
- [ ] Social sharing previews
