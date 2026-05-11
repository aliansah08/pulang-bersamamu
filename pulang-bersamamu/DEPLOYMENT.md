# 🚀 Deployment Guide - Pulang Bersamamu

This guide walks you through deploying your couple's website to various platforms.

## Quick Deploy Options

### ⭐ Recommended: Vercel + GitHub

**Why Vercel?**
- Free tier included
- Automatic deployments on git push
- Custom domain support
- Very fast edge network
- Zero configuration needed

**Steps:**

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up and verify email

2. **Create GitHub Repository**
   ```bash
   cd pulang-bersamamu
   git init
   git add .
   git commit -m "Initial commit: Pulang Bersamamu website"
   git branch -M main
   ```

3. **Push to GitHub**
   - Create new repo at github.com/new
   - Name it `pulang-bersamamu`
   - Run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pulang-bersamamu.git
   git push -u origin main
   ```

4. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (or Sign In with GitHub)
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo
   - Click "Import"
   - Click "Deploy"
   - **Your site is live!** 🎉

5. **Add Custom Domain (Optional)**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your domain (e.g., pulangbersamamu.com)
   - Follow DNS instructions from your domain provider

**Cost:** Free! (with optional paid plans for more features)

---

## Alternative: Netlify + GitHub

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Connect your GitHub account
   - Click "New site from Git"
   - Choose your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain**
   - In Netlify, go to "Settings" → "Domain management"
   - Add your custom domain

**Cost:** Free!

---

## Manual: Self-Hosted (VPS/Shared Hosting)

**Requirements:**
- Web hosting account with Node.js support (or static file serving)
- FTP/SFTP access or command line access
- Basic server knowledge

**Steps:**

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder**
   - Via FTP: Upload entire `dist/` folder to `public_html/`
   - Via SSH: Upload using SCP or rsync

3. **Configure server**
   - If static hosting: Upload files directly
   - If dynamic: Ensure server serves `index.html` for all routes

4. **Set up HTTPS**
   - Most hosts provide free SSL
   - Contact support or use your hosting panel

---

## GitHub Pages (Free Static Hosting)

**Limitations:**
- Only works if your project is public
- Deployed at `username.github.io` or `username.github.io/pulang-bersamamu`
- No custom domain support (free tier)

**Steps:**

1. **Configure Vite for GitHub Pages**
   
   In `vite.config.js`, add:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/pulang-bersamamu/', // if deploying to repo name
     // or base: '/' if deploying to username.github.io
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist/
   git commit -m "Add build files"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select `main` branch and `/dist` folder
   - Save

**Your site is now live at:** `https://username.github.io/pulang-bersamamu`

---

## Domain Setup Guide

### Buying a Domain

1. **Popular registrars:**
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Domain name ideas:**
   - `pulangbersamamu.com`
   - `ourlovestory.com`
   - `[your-names].love`
   - `home-with-you.com`

### Connecting Custom Domain to Vercel

1. **In Vercel Dashboard:**
   - Project Settings → Domains
   - Enter your domain
   - Copy nameservers provided

2. **In Domain Registrar:**
   - Go to DNS settings
   - Update nameservers with Vercel's
   - Wait 24-48 hours for propagation

3. **Verify in Vercel:**
   - Green checkmark appears when live
   - Site accessible at your custom domain

---

## Pre-Deployment Checklist

- [ ] All images optimized and placed in `public/images/`
- [ ] Content updated in `src/data/content.js`
- [ ] No console errors when running `npm run dev`
- [ ] Site responsive on mobile (test with DevTools)
- [ ] Build succeeds: `npm run build`
- [ ] No broken links or images in built site
- [ ] Favicons/metadata updated in `index.html`
- [ ] Email/contact info verified (if included)

---

## Post-Deployment

### Monitor Your Site

1. **Vercel Dashboard**
   - Check recent deployments
   - View analytics
   - Monitor performance

2. **Test the Site**
   - Visit your live URL
   - Test all sections and links
   - Check mobile responsiveness
   - Verify images load correctly

3. **Get SSL Certificate**
   - Vercel/Netlify handle automatically ✓
   - Self-hosted: Use Let's Encrypt (free)

### Updates & Maintenance

**To update content:**
1. Edit `src/data/content.js`
2. Push to GitHub
3. Vercel automatically redeploys
4. Changes live in ~60 seconds

**To add new images:**
1. Place images in `public/images/`
2. Update `src/data/content.js` with image paths
3. Push to GitHub
4. Auto-deployed

---

## Troubleshooting

### Deploy Failed
- Check build logs in dashboard
- Run `npm run build` locally to test
- Ensure Node version compatibility
- Check for missing dependencies

### Images Not Loading
- Verify images in `public/images/` folder
- Check image path names match code
- Ensure correct file formats

### Site Shows Old Version
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Wait a few minutes for CDN cache clear

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS settings in registrar
- Verify nameservers match provider's instructions

---

## Getting Help

**Vercel Support:** [vercel.com/docs](https://vercel.com/docs)
**Netlify Support:** [netlify.com/docs](https://netlify.com/docs)
**GitHub Pages:** [pages.github.com](https://pages.github.com)
**Vite Docs:** [vitejs.dev](https://vitejs.dev)

---

## Cost Breakdown

| Platform | Cost | Custom Domain | SSL | Bandwidth |
|----------|------|---------------|-----|-----------|
| Vercel | Free | Yes* | Yes | Unlimited |
| Netlify | Free | Yes* | Yes | Unlimited |
| GitHub Pages | Free | Yes* | Yes | Unlimited |
| Shared Hosting | $5-15/mo | Yes | Free/Paid | Limited |
| VPS | $5-30/mo | Yes | Free (Let's Encrypt) | Depends |

*Custom domains require domain registration separately ($10-15/year typically)

---

## Recommended Setup

For the best combination of **free, easy, and reliable**:

1. **Domain:** Namecheap or Cloudflare (~$10/year)
2. **Hosting:** Vercel (free)
3. **DNS:** Point domain to Vercel
4. **SSL:** Automatic
5. **Code:** GitHub (free)

**Total Cost:** ~$10/year for domain only! 💕

---

**Happy deploying! Your love story is now online for the world to see.** 🌍✨
