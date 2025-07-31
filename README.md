# Soham Kundu Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features server-side rendering (SSR), SEO optimization, and PostHog analytics integration.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Server-Side Rendering (SSR)** for better SEO
- **PostHog Analytics** integration
- **Responsive Design** for all devices
- **SEO Optimized** with meta tags and Open Graph
- **Smooth Scrolling** navigation
- **Interactive Components** with hover effects

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with PostHog provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── sections/           # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Awards.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── Portfolio.tsx       # Main portfolio component
│   └── SectionTracker.tsx  # PostHog section tracking
├── hooks/
│   └── usePostHog.ts      # PostHog tracking hook
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: PostHog
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The primary color scheme uses `#1261A0` (blue). Update this in the components and CSS variables.

### Content

- Update personal information in each section component
- Replace images in the `public/assets/` directory
- Modify the resume PDF in `public/SohamKunduResume.pdf`

### SEO

Update metadata in:

- `src/app/layout.tsx` (global metadata)
- `src/app/page.tsx` (page-specific metadata)

## 📊 Analytics

PostHog analytics is integrated with:

- Resume download tracking
- Section view tracking
- Page view tracking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Soham Kundu**

- Email: skundu6@wisc.edu
- GitHub: [@sohamkundu27](https://github.com/sohamkundu27)
- LinkedIn: [sohamkundu27](https://linkedin.com/in/sohamkundu27)
