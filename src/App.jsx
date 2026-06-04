import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';
import ParticleBackground from './components/effects/ParticleBackground';
import Home from './pages/Home';
import { personalInfo } from './data/personal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | AI & ML Developer Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.role}. Portfolio showcasing AI/ML projects, Python development, and web applications.`}
        />
        <html lang="en" />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <ParticleBackground />
          <div className="relative z-10">
            <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
            <main>
              <Home />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </div>
      )}
    </>
  );
}
