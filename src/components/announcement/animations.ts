export const slideVariants = {
  enter: {
    opacity: 0
  },
  center: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
} as const;

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 1.2,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
} as const;