import { motion } from 'framer-motion';
import { GraduationCap, Target, User } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import { useCounter } from '../../hooks/useCounter';

function StatCard({ label, value, suffix }) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div ref={ref} className="glass-card p-6 text-center" whileHover={{ y: -4 }}>
      <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About me">
      <div className="section-container">
        <SectionHeading
          tag="About Me"
          title="Crafting Intelligent Solutions"
          subtitle="Passionate about AI, Python, and building software that makes a difference"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20">
                  <User className="h-5 w-5 text-primary-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                  Professional Summary
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">{personalInfo.about}</p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-violet/20">
                  <Target className="h-5 w-5 text-accent-violet" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {personalInfo.careerObjective}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/20">
                  <GraduationCap className="h-5 w-5 text-accent-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{personalInfo.education.degree}</p>
                  <p className="text-primary-400">{personalInfo.education.college}</p>
                  <span className="mt-2 inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400">
                    {personalInfo.education.specialization}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{personalInfo.education.period}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
