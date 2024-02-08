"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/" className={`flex items-center font-bold gap-2`}>
      <Image width={60} height={60} src="/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
