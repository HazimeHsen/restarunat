"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedImage from "./Image";

const Survey = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div ref={ref} id="survey" className="container mt-24 text-center">
      <div className="">
        <div className="self-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold">
            Survey
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="text-gray-700 max-w-3xl mx-auto pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="text-gray-700 max-w-3xl mx-auto pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
