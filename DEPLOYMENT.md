# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# If you haven't created a GitHub repo yet:
# 1. Go to github.com and create a new repository named "project-task-dashboard"
# 2. Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/project-task-dashboard.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `project-task-dashboard` repository
5. Vercel will auto-detect these settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment
8. Get your live URL: `https://project-task-dashboard.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Alternative: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

## Alternative: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Alternative: GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/project-task-dashboard",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  base: '/project-task-dashboard/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you need environment variables:

1. Create `.env` file (already in .gitignore):
```
VITE_API_URL=your_api_url
```

2. In Vercel:
   - Go to Project Settings → Environment Variables
   - Add your variables

3. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Build Optimization

The project is already optimized with:
- ✅ Vite's fast build system
- ✅ Tree-shaking for smaller bundles
- ✅ CSS purging with Tailwind
- ✅ Asset optimization

## Troubleshooting

### Build fails on Vercel
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Styles not loading
- Ensure Tailwind CSS is properly configured
- Check that index.css is imported in main.jsx
- Verify postcss.config.js exists

### 404 on refresh
- For Vercel: Automatically handled
- For other hosts: Add `vercel.json` or configure redirects

## Post-Deployment Checklist

- [ ] Test all features on live site
- [ ] Check mobile responsiveness
- [ ] Verify all screenshots load
- [ ] Test task creation and filtering
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Share your live URL!

## Your Live URL

After deployment, your app will be available at:
- Vercel: `https://project-task-dashboard-[random].vercel.app`
- Custom domain: `https://your-domain.com`

Update this README with your actual deployment URL!
