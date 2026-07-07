/** Shared motion configuration for consistent, accessible animations. */

/* Expo-out — decisive entrances that settle quickly. Mirrors the
   --ease-out token in globals.css so CSS and JS motion stay unified. */
export const motionEasing = [0.16, 1, 0.3, 1] as const;

export const motionDurations = {
  fast: 0.28,
  default: 0.44,
  slow: 0.6,
} as const;

export const fadeInVariants = {
  hidden: (direction: "up" | "down" | "none" = "up") => ({
    opacity: 0,
    y: direction === "up" ? 16 : direction === "down" ? -16 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.default,
      ease: motionEasing,
    },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.default,
      ease: motionEasing,
    },
  },
};

export const textRevealVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: motionDurations.default,
      delay: index * 0.04,
      ease: motionEasing,
    },
  }),
};

export const viewportDefaults = {
  once: true,
  margin: "-80px" as const,
};

export const reducedMotionTransition = { duration: 0 };
