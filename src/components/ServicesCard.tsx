"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface propsType {
  img: string;
  index: number;
  title: string;
  desc: string;
}

const ServicesCard: React.FC<propsType> = ({ img, title, index, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div ref={ref}>
      <div className="space-y-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}>
          <Image
            className="mx-auto"
            src={img}
            width={70}
            height={70}
            alt={title}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
          className="uppercase">
          {title}
          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
          className="text-[14px] text-gray-700">
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default ServicesCard;
