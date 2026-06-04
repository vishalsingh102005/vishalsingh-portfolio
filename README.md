# Vishal Singh — Portfolio Website

A modern, premium, fully responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

- Dark/light theme toggle with persistence
- Glassmorphism UI with smooth Framer Motion animations
- Particle background and floating tech icons
- Animated typing effect, skill progress bars, and counters
- Loading screen and back-to-top button
- SEO optgit initimized with react-helmet-async
- Fully responsive (mobile, tablet, desktop)
- Accessible navigation and form validation

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

1. **Profile photo**: Replace the initials placeholder in `src/components/sections/Hero.jsx` with an `<img>` tag pointing to your photo in `src/assets/`.
2. **Resume**: Run `npm run resume` to regenerate `public/resume.pdf` from your portfolio data (or replace the file with your own PDF).
3. **Project links**: Update GitHub URLs in `src/data/projects.js` with individual repository links.
4. **Content**: Edit `src/data/personal.js`, `skills.js`, and `projects.js` for your information.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/
│   ├── effects/     # Particle background, floating icons
│   ├── layout/      # Navbar, Footer, LoadingScreen
│   ├── sections/    # Hero, About, Skills, Projects, etc.
│   └── ui/          # Reusable UI components
├── data/            # Portfolio content (personal, skills, projects)
├── hooks/           # Custom React hooks
├── pages/           # Page components
└── styles/          # Global CSS and Tailwind
public/              # Static files (favicon, resume)
```

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Framer Motion 11
- Lucide React
- react-helmet-async

## Deployment

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static hosting provider.

```bash
npm run build
```

## License

MIT — Feel free to use and modify for your own portfolio.
