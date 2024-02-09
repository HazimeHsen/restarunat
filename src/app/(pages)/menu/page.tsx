"use client";
import React, { useState } from "react";
import Dash from "@/components/Dash";
import Image from "next/image";
import MenuCard from "@/components/MenuCard";

const menuData = [
  {
    category: "Appetizers",
    images: ["/pizza.jpg", "/pizza.jpg", "/pizza.jpg"],

    title: "Caprese Salad",
    desc: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    price: "$12.99",
  },
  {
    category: "Appetizers",
    images: ["/pizza.jpg", "/pizza.jpg"],

    title: "Garlic Bread",
    desc: "Toasted baguette slices rubbed with garlic and topped with herbs.",
    price: "$8.99",
  },
  {
    category: "Breakfast",
    images: ["/pizza.jpg"],

    title: "Classic Pancakes",
    desc: "Fluffy pancakes served with maple syrup and butter.",
    price: "$10.99",
  },
  {
    category: "Breakfast",
    images: ["/pizza.jpg", "/pizza.jpg", "/pizza.jpg"],

    title: "Avocado Toast",
    desc: "Sliced avocado on whole-grain toast with cherry tomatoes.",
    price: "$9.99",
  },
];

const categories = [
  "Appetizers",
  "Breakfast",
  "Salads",
  "Meat & Fish",
  "Soup",
  "Desert",
  "Drinks",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredMenuData = selectedCategory
    ? menuData.filter((item) => item.category === selectedCategory)
    : menuData;

  return (
    <div className="container pt-28 flex-1 overflow-hidden">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 flex gap-6 md:gap-10 lg:gap-20 mx-auto overflow-x-auto">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer p-1 hover:bg-accent/70 hover:text-white rounded-md whitespace-nowrap ${
              selectedCategory === category ? "bg-accent text-white " : ""
            }`}
            onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>

      <div className="pt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {filteredMenuData.map((item, index) => (
            <MenuCard
              key={index}
              images={item.images}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
