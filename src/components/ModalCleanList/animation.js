export const overlayVariants = {
  initial: { opacity: 0, transition: { duration: 0.5 } },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export const modalVariants = {
  initial: {
    y: -1000,
    opacity: 0,
    visibility: "hidden",
    transition: { duration: 0.5 },
    translateX: "-50%",
    translateY: "-50%",
  },
  animate: {
    y: 0,
    opacity: 1,
    visibility: "visible",
    transition: { duration: 0.5 },
    translateX: "-50%",
    translateY: "-50%",
  },
};
