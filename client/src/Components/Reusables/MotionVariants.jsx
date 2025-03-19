// left to right Variants
export const leftToRightVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.3, ease: "easeOut" } },
};

// left to right Variants
export const rightToLeftVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.3, ease: "easeOut" } },
};

// Opacity Variants
export const opacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

// bottom to top Variants
export const bottomToTopVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};
