import { motion } from 'framer-motion';

/**
 * HOW TO ADD YOUR PHOTO:
 * 1. Save your photo as: public/profile.jpg  (or profile.png)
 * 2. Set SHOW_PROFILE_PHOTO to true below
 * 3. If using .png, change PROFILE_IMAGE to '/profile.png'
 */
const SHOW_PROFILE_PHOTO = true;
const PROFILE_IMAGE = '/profile.jpg';

export default function ProfileAvatar() {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-600/30 via-accent-violet/20 to-accent-cyan/30 blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="relative">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan opacity-75 blur-sm"
          aria-hidden="true"
        />
        <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-glow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          {SHOW_PROFILE_PHOTO ? (
            <img
              src={PROFILE_IMAGE}
              alt="Vishal Singh"
              className="h-full w-full object-contain object-center"
              width={384}
              height={384}
              loading="eager"
            />
          ) : (
            <div className="flex flex-col items-center justify-center" aria-label="Vishal Singh initials avatar">
              <span className="font-display text-6xl font-bold gradient-text sm:text-7xl lg:text-8xl">
                VS
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
