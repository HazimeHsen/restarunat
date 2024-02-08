import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import { links } from "./MenuItems";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      controls.start("opened");
    } else {
      document.body.style.overflow = "auto";
      controls.start("closed");
    }
  }, [isOpen, controls]);

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      top: "-100vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <div className="relative z-[40]">
      <div className="relative z-50">
        <BurgerButton
          isOpen={isOpen}
          setIsOpen={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        />
      </div>

      <motion.nav
        initial={false}
        variants={menuVariants}
        animate={controls}
        className="fixed top-0 !z-[40] left-0 flex flex-col justify-center items-center h-screen w-screen text-white bg-accent/90">
        {links.map((link, index) => (
          <motion.div
            onClick={() => setIsOpen(false)}
            key={index}
            variants={linkVariants}
            className="mb-6 text-lg">
            <Link href={link.href}>{link.title}</Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

export default BurgerMenu;
