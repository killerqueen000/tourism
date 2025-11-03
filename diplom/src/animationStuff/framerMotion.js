import { transform } from "framer-motion";

export const slideInFromLeft = (duration = 1) => ({
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const bounce = (duration = 1) => ({
  hidden: { y: 0 },
  visible: {
    y: [0, -20, 0, -10, 0],
    transition: {
      duration,
      ease: "easeOut",
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
});

export const pulse = (duration = 1.5) => ({
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 0.95, 1.05, 1],
    transition: {
      duration,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
    },
  },
});

export const linearSlide = (duration = 1, direction = "left") => {
  let hiddenTransform = {};
  let visibleTransform = {};

  switch (direction) {
    case "right":
      hiddenTransform = { x: "100%" };
      visibleTransform = { x: 0 };
      break;
    case "left":
      hiddenTransform = { x: "-100%" };
      visibleTransform = { x: 0 };
      break;
    case "top":
      hiddenTransform = { y: "-100%" };
      visibleTransform = { y: 0 };
      break;
    case "bottom":
      hiddenTransform = { y: "100%" };
      visibleTransform = { y: 0 };
      break;
    default:
      hiddenTransform = { x: "-100%" };
      visibleTransform = { x: 0 };
  }

  return {
    hidden: {
      ...hiddenTransform,
      opacity: 0,
    },
    visible: {
      ...visibleTransform,
      opacity: 1,
      transition: {
        duration,
        ease: "linear",
      },
    },
  };
};

