import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  Code2: LucideIcons.Code2,
  Layers: LucideIcons.Layers,
  Brain: LucideIcons.Brain,
};

const techIconColors = {
  python: 'text-yellow-400',
  javascript: 'text-yellow-300',
  html: 'text-orange-400',
  css: 'text-blue-400',
  c: 'text-blue-300',
  cpp: 'text-blue-500',
  django: 'text-green-400',
  database: 'text-cyan-400',
  git: 'text-orange-300',
  github: 'text-slate-300',
  ai: 'text-purple-400',
  ml: 'text-pink-400',
  web: 'text-primary-300',
};

function SkillBar({ name, level, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LucideIcons.Circle
            className={`h-2 w-2 fill-current ${techIconColors[icon] || 'text-primary-400'}`}
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        </div>
        <span className="text-xs font-semibold text-primary-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" aria-hidden="true" />

      <div className="section-container relative">
        <SectionHeading
          tag="Skills"
          title="Technical Expertise"
          subtitle="Technologies and domains I work with to build impactful solutions"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = iconMap[category.icon] || LucideIcons.Code2;

            return (
              <motion.div
                key={category.id}
                className="glass-card p-6 sm:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent-violet/20">
                    <CategoryIcon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
