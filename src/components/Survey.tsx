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
    <div ref={ref} className="container mt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
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
            className="text-gray-700 pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.4 }}
            className="text-gray-700 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </motion.p>
        </div>
        <div>
          <AnimatedImage
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>
      </div>
    </div>
  );
};

export default Survey;
