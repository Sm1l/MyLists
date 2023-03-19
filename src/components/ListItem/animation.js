export const listItemVariants = {
  initial: { opacity: 0, y: 1000 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "just",
      ease: "easeInOut",
      duration: 0.5,
    },
  }),
  exit: { opacity: 0, x: 1000, transition: { duration: 1 } },
};

export const buttonVariants = {
  initial: {
    opacity: 0,
    scale: 3,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
