import { useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useInViewAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold, triggerOnce: true });

  if (inView) {
    controls.start('visible');
  }

  return { ref, controls };
};
