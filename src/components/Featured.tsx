"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dash from "./Dash";
import AnimatedImage from "./Image";

const featuredData = [
  {
    src: "/grid__1.png",
    width: 300,
    height: 600,
    title: "Shrimp Salad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nesciunt distinctio.",
  },
  {
    src: "/grid__2.png",
    width: 500,
    height: 900,
    title: "Baked apples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nesciunt distinctio.",
  },
  {
    src: "/grid__3.png",
    width: 300,
    height: 600,
    title: "Cherries chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nesciunt distinctio.",
  },
];

const Featured = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div ref={ref} className="container mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-6xl font-bold">
        Our
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-[550px] pt-10 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </motion.p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        {featuredData.map((item, index) => (
          <FeaturedCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
interface FeaturedCardProps {
  item: {
    src: string;
    width: number;
    height: number;
    title: string;
    description: string;
  };
  index: number;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div ref={ref} key={index} className="w-fit mx-auto self-end">
      <AnimatedImage
        className="w-full"
        src={item.src}
        width={item.width}
        height={item.height}
        alt={`grid image ${index}`}
      />

      <div className="space-y-4">
        <Dash />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-medium text-xl">
          {item.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-700 text-[14px] xl:text-[16px]">
          {item.description}
        </motion.p>
      </div>
    </div>
  );
};
