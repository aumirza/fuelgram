"use client";

import { motion, useAnimation } from "motion/react";
import { useCallback, useEffect } from "react";

const SearchIcon = ({ animate }: { animate: boolean }) => {
  const controls = useAnimation();

  const startAnimation = useCallback(
    () => controls.start("animate"),
    [controls]
  );

  const stopAnimation = useCallback(() => controls.start("normal"), [controls]);

  useEffect(() => {
    if (animate === undefined || null) return;

    if (animate) startAnimation();
    if (!animate) stopAnimation();
  }, [animate, startAnimation, stopAnimation]);

  return (
    <div
      className="flex items-center justify-center p-2 overflow-hidden transition-colors duration-200 rounded-md cursor-pointer select-none"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          normal: { x: 0, y: 0 },
          animate: {
            x: [0, 0, -3, 0],
            y: [0, -4, 0, 0],
          },
        }}
        transition={{
          duration: 1,
          bounce: 0.3,
          // repeatType: "loop",
          // repeat: Infinity,
        }}
        animate={controls}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </motion.svg>
    </div>
  );
};

export { SearchIcon };
