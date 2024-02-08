"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import MenuLinks from "./MenuLinks";

function Navbar() {
  const [isGlassy, setIsGlassy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const glassyThreshold = 50; // Adjust this threshold as needed

      // Check if the scroll position is beyond the threshold to determine transparency
      setIsGlassy(scrollPosition > glassyThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between pr-4 pl-6 md:px-8 py-2 md:py-3 ${
        isGlassy ? "bg-white shadow-lg" : "bg-transparent"
      } transition-all duration-200`}>
      <div className="relative z-50">
        <Logo />
      </div>
      <div className="relative flex items-center">
        <div className="hidden md:block">
          <MenuLinks />
        </div>
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
