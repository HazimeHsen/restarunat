"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/star.gif",
    title: "Professonal Kitchen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/delivery.gif",
    title: "Delivery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/wine.gif",
    title: "Wine List",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/wifi.gif",
    title: "Free Wifi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
];

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div id="service" className="container pt-24">
      <div ref={ref} className="space-y-4 w-fit mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.4 }}
          className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </motion.p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            index={index}
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
