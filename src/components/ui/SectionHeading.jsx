import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      className="mb-12 text-center md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-400">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan" />
    </motion.div>
  );
}
