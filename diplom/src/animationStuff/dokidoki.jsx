import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "./useInViewAnimation";
import { pulse } from "./framerMotion";

const Dokidoki = ({ children, duration = 1.5}) => {
  const { ref, controls } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={pulse(duration)}
    >
      {children}
    </motion.div>
  );
};

export default Dokidoki;