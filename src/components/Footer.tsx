"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const openingHours = {
    Monday: "8:00 AM - 10:00 PM",
    Tuesday: "8:00 AM - 10:00 PM",
    Wednesday: "8:00 AM - 10:00 PM",
    Thursday: "8:00 AM - 10:00 PM",
    Friday: "8:00 AM - 12:00 AM",
    Saturday: "10:00 AM - 12:00 AM",
    Sunday: "10:00 AM - 8:00 PM",
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const animatedContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="mt-16 pb-8"
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4 }}
      variants={animatedContainer}>
      <div className="container mx-auto md:grid grid-cols-3 space-y-5 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Opening Hours</h2>
          <ul className="space-y-2">
            {Object.entries(openingHours).map(([day, hours]) => (
              <li key={day}>
                <span className="font-semibold">{day}:</span> {hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="space-y-2">
            <li>
              <FaMapMarkerAlt className="inline-block mr-2" />
              123 Main St, Cityville
            </li>
            <li>
              <FaPhoneAlt className="inline-block mr-2" />
              +1 (123) 456-7890
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Connect With Us</h2>
          <div className="flex gap-8 text-accent text-2xl pt-4">
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-8 text-sm">
        &copy; Copyright 2023 All rights reserved
      </div>
    </motion.div>
  );
};

export default Footer;
