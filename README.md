# Mololuwa Ajiteru - Portfolio Website

A modern, production-ready portfolio website for Mololuwa Ajiteru, Data Analyst & Business Analyst. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Theme**: next-themes (dark mode default)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Features

- ✅ Dark mode by default with polished light mode toggle
- ✅ Subtle, elegant animations (fade-ins, smooth transitions)
- ✅ Smooth scrolling with Lenis
- ✅ Responsive design (mobile-first, cinematic on desktop)
- ✅ SEO-optimized with Open Graph tags
- ✅ Separate project detail pages for better SEO
- ✅ Formspree integration for contact form
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Easy content management via central data file

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd mololuwa-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mololuwa-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Home page
│   │   ├── projects/
│   │   │   └── [slug]/page.tsx # Project detail pages
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── About.tsx       # About section
│   │   │   ├── Experience.tsx  # Experience section
│   │   │   ├── Projects.tsx    # Projects grid
│   │   │   ├── Skills.tsx      # Skills section
│   │   │   ├── Education.tsx   # Education section
│   │   │   ├── Certifications.tsx # Certifications
│   │   │   └── Contact.tsx     # Contact form
│   │   ├── ThemeToggle.tsx     # Theme toggle button
│   │   └── providers/
│   │       └── ThemeProvider.tsx
│   ├── lib/
│   │   ├── data.ts             # All portfolio content
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── index.ts            # TypeScript types
├── public/
│   └── images/                 # Project images
└── package.json
```

## Updating Content

All portfolio content is managed in `src/lib/data.ts`. You can update:

- Personal information (name, title, contact details)
- Professional summary
- Experience
- Projects (title, tools, case study details)
- Skills
- Education
- Certifications

No code changes needed - just edit the data file!

## Configuring Formspree

The contact form uses Formspree for email delivery. To enable it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Open `src/components/sections/Contact.tsx`
5. Replace `YOUR_FORM_ID` on line 37 with your actual form ID:

```typescript
const FORM_ID = "your-actual-form-id";
```

## Adding Project Images

To add real project screenshots:

1. Add your images to `public/images/`
2. Update `src/lib/data.ts` to include image paths in the project objects
3. Currently using colored placeholders - replace with your actual screenshots

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Environment Variables

Currently no environment variables are required. If you add any, create a `.env.local` file:

```env
# Example environment variables
# NEXT_PUBLIC_FORMSPREE_ID=your-form-id
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Update colors in `tailwind.config.ts` and `src/app/globals.css` to match your brand.

### Animations

Adjust animation durations and effects in component files using Framer Motion props.

### Typography

Change fonts in `src/app/layout.tsx` by updating the Google Fonts import.

## Performance

The site is optimized for performance:
- Image optimization with Next.js Image component
- Lazy loading of components
- Minimal JavaScript bundle
- Optimized Core Web Vitals

## Accessibility

The site follows WCAG 2.1 AA guidelines:
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Alt text for images

## License

This project is open source and available for personal use.

## Support

For questions or issues, please contact [ajiterumololuwa@gmail.com](mailto:ajiterumololuwa@gmail.com).
