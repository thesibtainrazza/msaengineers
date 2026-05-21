export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 40, x: 0 },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: (delay = 0) => ({
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    }),
  },
  fadeInDown: {
    initial: { opacity: 0, y: -40, x: 0 },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: (delay = 0) => ({
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    }),
  },
  fadeInLeft: {
    initial: { opacity: 0, x: 40, y: 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: (delay = 0) => ({
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    }),
  },
  fadeInRight: {
    initial: { opacity: 0, x: -40, y: 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: (delay = 0) => ({
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    }),
  },
  hoverScale: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
};
