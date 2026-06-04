import { motion } from 'framer-motion';

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  download,
  target,
  rel,
  type = 'button',
  ariaLabel,
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
