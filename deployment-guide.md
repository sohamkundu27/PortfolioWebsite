# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## 🚀 Quick Deployment

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the root directory**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Choose your account
   - Link to existing project? → `N` (for first deployment)
   - What's your project's name? → `portfolio-website` (or your preferred name)
   - In which directory is your code located? → `./` (current directory)

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Import your GitHub repository**
   - Click "New Project"
   - Import from GitHub
   - Select your portfolio repository

4. **Configure the project**
   - Project Name: `portfolio-website`
   - Framework Preset: `Create React App`
   - Root Directory: `./` (leave as default)
   - Build Command: `cd frontend && yarn build`
   - Output Directory: `frontend/build`
   - Install Command: `cd frontend && yarn install`

5. **Deploy**
   - Click "Deploy"
   - Your site will be available at a Vercel URL

## ⚙️ Configuration Details

### Build Settings
- **Framework**: Create React App
- **Build Command**: `cd frontend && yarn build`
- **Output Directory**: `frontend/build`
- **Install Command**: `cd frontend && yarn install`
- **Development Command**: `cd frontend && yarn start`

### Environment Variables
If you need environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add any required variables

### Custom Domain
To use your own domain:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## 🔧 Troubleshooting

### Common Issues

**1. Build fails with "command not found: yarn"**
- Solution: Vercel should auto-detect yarn from package.json, but if issues persist, you can set install command to `npm install` and build command to `npm run build`

**2. Assets not loading correctly**
- Check that all file paths are relative
- Ensure images are in the `frontend/public` folder or imported properly

**3. Routing issues (404 on refresh)**
- The `vercel.json` file includes rewrites to handle SPA routing
- Make sure the `vercel.json` is in the root directory

**4. Build optimization warnings**
- These are usually safe to ignore for deployment
- Can be addressed by optimizing images and removing unused dependencies

### Performance Optimization

**1. Image Optimization**
```bash
# Install image optimization tools
cd frontend
yarn add next-optimized-images
```

**2. Bundle Analysis**
```bash
cd frontend
yarn add --dev webpack-bundle-analyzer
```

**3. Code Splitting**
- Implement React.lazy() for route-based code splitting
- Add Suspense boundaries for loading states

## 📊 Monitoring and Analytics

### Add Analytics
1. **Vercel Analytics**
   ```bash
   cd frontend
   yarn add @vercel/analytics
   ```

2. **Update your main component**
   ```jsx
   import { Analytics } from '@vercel/analytics/react'
   
   function App() {
     return (
       <>
         <YourApp />
         <Analytics />
       </>
     )
   }
   ```

### Performance Monitoring
- Use Vercel's built-in performance monitoring
- Check Core Web Vitals in the Vercel dashboard
- Monitor bundle size and loading times

## 🔄 Continuous Deployment

### Automatic Deployments
- Every push to main branch triggers a deployment
- Pull requests create preview deployments
- Use branch protection rules for production

### Preview Deployments
- Each PR gets a unique preview URL
- Test changes before merging to main
- Share preview links with stakeholders

## 📱 Testing Your Deployment

### Post-Deployment Checklist
- [ ] All sections load correctly
- [ ] Navigation works smoothly
- [ ] Contact form functions properly
- [ ] Images display correctly
- [ ] Site is responsive on all devices
- [ ] Social links work (update with real URLs)
- [ ] Performance scores are acceptable

### Tools for Testing
- **Lighthouse**: Built into Chrome DevTools
- **GTmetrix**: Web performance testing
- **Mobile-Friendly Test**: Google's mobile testing tool

## 🎯 Next Steps

1. **Customize Content**: Replace all placeholder content with your real information
2. **Add Real Projects**: Update portfolio section with actual projects
3. **Connect Domain**: Add your custom domain
4. **SEO Optimization**: Add meta tags and structured data
5. **Analytics**: Set up tracking and monitoring

Your portfolio website is now ready for the world! 🌟