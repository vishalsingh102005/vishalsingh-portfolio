import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  Shield: LucideIcons.Shield,
  Dumbbell: LucideIcons.Dumbbell,
  Receipt: LucideIcons.Receipt,
  Truck: LucideIcons.Truck,
};

function ProjectCard({ project, index, className = '' }) {
  const ProjectIcon = iconMap[project.icon] || LucideIcons.Folder;

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-sm transition-all duration-500 hover:border-primary-500/40 hover:shadow-glow ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity group-hover:bg-slate-900/70" />

      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <ProjectIcon className="h-6 w-6 text-primary-400" />
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <h3
            className={`font-display font-bold text-white ${
              project.featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            {project.title}
          </h3>
          {project.year && (
            <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-300">
              {project.year}
            </span>
          )}
        </div>

        <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400 sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-primary-500/50 hover:text-primary-400"
            aria-label={`Learn more about ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
            Details
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative" aria-label="Projects">
      <div className="section-container">
        <SectionHeading
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Real-world applications showcasing my skills in AI, web development, and software engineering"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured && <ProjectCard project={featured} index={0} className="md:col-span-2" />}
          {others.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
