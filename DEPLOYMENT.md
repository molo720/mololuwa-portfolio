# Deployment Guide

## Quick Deploy to Vercel

Since Vercel CLI requires authentication, the easiest way to deploy is through the Vercel Dashboard:

### Step 1: Push to GitHub

1. Go to [github.com](https://github.com) and create a new repository named `mololuwa-portfolio`
2. Make sure the repository is **Public** (for free Vercel deployment)
3. After creating, GitHub will show you commands to push your existing code. Run these commands in your terminal:

```bash
cd mololuwa-portfolio
git remote add origin https://github.com/YOUR_USERNAME/mololuwa-portfolio.git
git branch -M master
git push -u origin master
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (you can use your GitHub account)
3. Click **"Add New Project"** or **"Import Project"**
4. Select your `mololuwa-portfolio` repository from GitHub
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

Vercel will build and deploy your site in 1-2 minutes. You'll get a live URL like `https://mololuwa-portfolio.vercel.app`

### Step 3: Configure Formspree (Optional)

To enable the contact form:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID (it looks like a random string)
4. Edit `src/components/sections/Contact.tsx` line 37:
   ```typescript
   const FORM_ID = "your-actual-form-id";
   ```
5. Commit and push the change:
   ```bash
   git add .
   git commit -m "Configure Formspree"
   git push
   ```
6. Vercel will automatically redeploy

### Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project settings in Vercel
2. Click **"Domains"**
3. Add your custom domain (e.g., `mololuwaajiteru.com`)
4. Follow the DNS instructions provided by Vercel

## Troubleshooting

**Build fails:**
- Make sure all dependencies are installed: `npm install`
- Check the build logs in Vercel for specific errors

**Formspree not working:**
- Verify you replaced `YOUR_FORM_ID` with your actual form ID
- Check Formspree dashboard for form activity

**Dark mode not default:**
- The theme is set to dark by default in `src/app/layout.tsx`
- Ensure `defaultTheme="dark"` is set in ThemeProvider

## After Deployment

Your site will be live at the Vercel URL. You can:
- Share the URL with others
- Add it to your LinkedIn profile
- Use it for job applications
- Update your resume with the link

The site is fully responsive, SEO-optimized, and ready for production use!
