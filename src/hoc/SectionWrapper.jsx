import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Custom hook for viewport
const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isSmallScreen: window.innerHeight < 800, // Adjust this threshold as needed
  });

  useEffect(() => {
    const handleWindowResize = () =>
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        isSmallScreen: window.innerHeight < 800,
      });
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return viewport;
};

const SectionWrapper = (Component, idName, motionViewportAmount = 0.25) =>
  function HOC() {
    const { isSmallScreen } = useViewport();

    // Adjust viewport amount based on screen size
    const adjustedViewportAmount = isSmallScreen
      ? Math.max(motionViewportAmount * 0.5, 0.05)
      : motionViewportAmount;

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: adjustedViewportAmount }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
