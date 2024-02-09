"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";
import { PortableTextBlock } from "sanity";
import { Images } from "../../types/Images";

interface propsType {
  images: Images[];
  title: string;
  desc: PortableTextBlock[];
  price: number;
}

const MenuCard: React.FC<propsType> = ({ images, title, desc, price }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-1 items-center peer bg-gray-50 py-2 hover:bg-accent/20 transition-colors duration-200 px-5 gap-3 cursor-pointer rounded-md justify-between">
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="flex items-center gap-2">
        <p className="text-accent">${price}</p>
        <BsArrowRight className="text-accent" />
      </div>
      <Modal
        images={images}
        title={title}
        desc={desc}
        price={price}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default MenuCard;
