"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Dash = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-accent origin-left h-[5px] w-[70px] mt-10"
      initial={{ scale: 0 }}
      animate={controls}
      transition={{ duration: 0.4 }}
    />
  );
};

export default Dash;
