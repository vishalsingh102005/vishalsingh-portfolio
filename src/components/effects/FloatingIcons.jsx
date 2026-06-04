import { motion } from 'framer-motion';
import { floatingTechIcons } from '../../data/skills';

const positions = [
  { top: '15%', left: '8%' },
  { top: '25%', right: '10%' },
  { top: '55%', left: '5%' },
  { top: '70%', right: '8%' },
  { top: '40%', left: '12%' },
  { top: '80%', left: '15%' },
  { top: '20%', right: '15%' },
  { top: '65%', right: '12%' },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floatingTechIcons.map((icon, index) => (
        <motion.div
          key={icon}
          className="absolute hidden rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-xs font-semibold text-primary-400/60 backdrop-blur-sm lg:block"
          style={positions[index % positions.length]}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}
