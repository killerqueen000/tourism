import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "./useInViewAnimation";
import { linearSlide } from "./framerMotion";

const LinearSlideSC = ({ children, duration = 1, direction = "left"}) => {
  const { ref, controls } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={linearSlide(duration, direction)}
    >
      {children}
    </motion.div>
  );
};

export default LinearSlideSC;
