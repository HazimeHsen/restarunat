"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import { motion } from "framer-motion";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../public/head.ttf" });
const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative overflow-hidden">
      <div className="absolute top-[180px] md:-right-[800px] -right-[1450px] md:rotate-[135deg] rotate-[120deg] transform rounded-[-1000px] -z-10 block h-[2000px] w-[2000px] bg-[#e9f50ba8]/30"></div>
      <div className="relative flex text-center md:text-start items-center md:mt-0 gap-8 mt-8 flex-col justify-center md:flex-row md:justify-between mx-4 md:mx-10 min-h-screen">
        <motion.div
          variants={fadeIn}
          className="flex flex-col md:items-start items-center md:justify-start justify-center w-fit">
          <p
            className={`uppercase mb-2  bg-accent whitespace-nowrap text-white rounded-full px-3 py-1 w-fit text-[10px] font-semibold  `}>
            Wide options of choice
          </p>
          <motion.h2
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={` text-4xl whitespace-nowrap sm:text-6xl font-extrabold`}>
            Delicious <span className="text-accent">Food</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="font-semibold my-5 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste.
            <br /> What are you waiting for?
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center gap-4">
            <Button>View Menu</Button>
            <Button variant="outline">Call Us</Button>
          </motion.div>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex gap-5 text-white text-2xl mt-5 ">
            <FaFacebookF
              className="bg-accent rounded-full p-2 cursor-pointer hover:bg-accent/80 transition-colors duration-200"
              size={32}
            />
            <BsTwitter
              className="bg-accent rounded-full p-2 cursor-pointer hover:bg-accent/80 transition-colors duration-200"
              size={32}
            />
            <FaInstagram
              className="bg-accent rounded-full p-2 cursor-pointer hover:bg-accent/80 transition-colors duration-200"
              size={32}
            />
            <FaLinkedinIn
              className="bg-accent rounded-full p-2 cursor-pointer hover:bg-accent/80 transition-colors duration-200"
              size={32}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full hero-image flex justify-evenly"
          variants={fadeIn}
          transition={{ delay: 1, duration: 0.4 }}>
          <Image
            className="w-full lg:max-w-[500px] md:max-w-[400px] max-w-[300px] "
            alt="hero"
            width={600}
            height={200}
            src="/hero.svg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
