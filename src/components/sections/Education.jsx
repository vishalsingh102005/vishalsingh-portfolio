import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

const timelineItems = [
  {
    year: '2022',
    title: 'Started B.E. CSE',
    description: 'Enrolled in Computer Science Engineering program with focus on software development fundamentals.',
    highlight: false,
  },
  {
    year: '2023',
    title: 'AIML Specialization',
    description: 'Began specializing in Artificial Intelligence and Machine Learning with hands-on projects and coursework.',
    highlight: true,
  },
  {
    year: '2026',
    title: 'AI Exam Proctoring System',
    description:
      'Built an advanced AI-based online exam proctoring system using Python, computer vision, and machine learning.',
    highlight: true,
  },
  {
    year: 'Present',
    title: 'Internship Ready',
    description: 'Actively seeking internship opportunities to apply skills in industry settings and grow professionally.',
    highlight: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative" aria-label="Education">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />

      <div className="section-container relative">
        <SectionHeading
          tag="Education"
          title="Academic Journey"
          subtitle="My educational path in Computer Science with AI/ML specialization"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="glass-card p-6 sm:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-violet">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {personalInfo.education.degree}
                </h3>
                <p className="text-primary-400">{personalInfo.education.college}</p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400">
                <Award className="h-4 w-4" />
                {personalInfo.education.specialization}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-400">
                <Calendar className="h-4 w-4" />
                {personalInfo.education.period}
              </span>
            </div>

            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Pursuing a comprehensive Computer Science Engineering degree with deep focus on
              Artificial Intelligence, Machine Learning, Python development, and modern web
              technologies.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-violet to-accent-cyan md:left-1/2 md:-translate-x-px" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year + item.title}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className={`hidden flex-1 md:block ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    {index % 2 === 0 && (
                      <div className={`glass-card inline-block p-4 text-left ${item.highlight ? 'border-primary-500/30' : ''}`}>
                        <span className="text-sm font-bold text-primary-400">{item.year}</span>
                        <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-surface-dark md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className={`h-3 w-3 rounded-full ${item.highlight ? 'bg-primary-400 shadow-glow' : 'bg-primary-600'}`} />
                  </div>

                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-8' : 'md:hidden'}`}>
                    <div className={`glass-card p-4 ${item.highlight ? 'border-primary-500/30 shadow-glow' : ''}`}>
                      <span className="text-sm font-bold text-primary-400">{item.year}</span>
                      <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                      {item.highlight && (
                        <span className="mt-2 inline-block rounded-full bg-primary-500/10 px-2 py-0.5 text-xs text-primary-400">
                          AIML Focus
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`hidden flex-1 md:block ${index % 2 !== 0 ? 'md:pl-8' : ''}`}>
                    {index % 2 !== 0 && (
                      <div className={`glass-card p-4 ${item.highlight ? 'border-primary-500/30' : ''}`}>
                        <span className="text-sm font-bold text-primary-400">{item.year}</span>
                        <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
