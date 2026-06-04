import { Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-100/50 dark:bg-black/30" role="contentinfo">
      <div className="section-container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-xl font-bold">
              <span className="gradient-text">{personalInfo.name}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">{personalInfo.role}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary-400 dark:text-slate-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-400">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-500">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
