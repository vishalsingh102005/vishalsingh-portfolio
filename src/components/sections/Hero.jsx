import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import Button from '../ui/Button';
import ProfileAvatar from '../ui/ProfileAvatar';
import FloatingIcons from '../effects/FloatingIcons';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <FloatingIcons />

      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Open to Internship Opportunities</span>
          </motion.div>

          <p className="mb-2 text-lg text-slate-600 dark:text-slate-400">Hello, I&apos;m</p>

          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="mt-4 h-10 sm:h-12">
            <p className="font-display text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl lg:text-3xl">
              I&apos;m a{' '}
              <span className="gradient-text">
                {typedText}
                <span className="animate-pulse text-primary-400">|</span>
              </span>
            </p>
          </div>

          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {personalInfo.role}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <MapPin className="h-4 w-4 text-primary-400" />
            <span>Mumbai, India · LTCE</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Building intelligent software with Python, AI/ML, and modern web technologies.
            Passionate about creating impactful, real-world solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="/resume.pdf"
              download="Vishal_Singh_Resume.pdf"
              icon={Download}
              ariaLabel="Download resume PDF"
            >
              Download Resume
            </Button>
            <Button variant="outline" href="#contact" icon={Mail} ariaLabel="Contact me">
              Contact Me
            </Button>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              variant="ghost"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              icon={Github}
              ariaLabel="GitHub profile"
              className="!px-4"
            />
            <Button
              variant="ghost"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              icon={Linkedin}
              ariaLabel="LinkedIn profile"
              className="!px-4"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <ProfileAvatar />

            <motion.div
              className="absolute -bottom-2 -right-2 rounded-xl glass-card px-4 py-3 shadow-glow sm:-bottom-4 sm:-right-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs text-slate-400">Currently</p>
              <p className="font-semibold text-primary-400">Learning & Building</p>
            </motion.div>

            <motion.div
              className="absolute -left-2 top-8 rounded-xl glass-card px-4 py-3 shadow-glow sm:-left-6"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="text-xs text-slate-400">Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-primary-400"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to about section"
        >
          <span className="text-xs">Scroll Down</span>
          <div className="h-8 w-5 rounded-full border-2 border-slate-500 p-1">
            <motion.div
              className="mx-auto h-1.5 w-1 rounded-full bg-primary-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
