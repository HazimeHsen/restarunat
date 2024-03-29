"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";
import { PortableTextBlock } from "sanity";
import { Images } from "../../types/Images";

interface propsType {
  images: Images[];
  lang: string;
  title: string;
  desc: PortableTextBlock[];
  price: number;
}

const MenuCard: React.FC<propsType> = ({
  images,
  lang,
  title,
  desc,
  price,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-1 items-center text-black group bg-gray-50 py-2 hover:bg-accent transition-colors duration-200 px-5 gap-3 cursor-pointer rounded-md justify-between">
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="flex items-center gap-2">
        <p className="text-accent group-hover:text-white">${price}</p>
        <BsArrowRight
          className={`${
            lang === "arabic" && "rotate-180"
          } text-accent group-hover:text-white`}
        />
      </div>
      <Modal
        lang={lang}
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
