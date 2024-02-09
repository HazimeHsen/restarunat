"use client";
import React, { useEffect, useState } from "react";
import Dash from "@/components/Dash";
import MenuCard from "@/components/MenuCard";
import Bg from "@/components/Bg/BgAnimation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Products } from "../../../../types/Products";
import { getCategories, getProducts } from "@/app/sanity/schemas/sanity-utils";
import { Categories } from "../../../../types/Categories";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryClick = (category: Categories) => {
    setSelectedCategory(category);
  };

  const filteredMenuData = selectedCategory
    ? products.filter((item) => item.category._id === selectedCategory._id)
    : products;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const products = await getProducts();
      setProducts(products);
      const categories = await getCategories();
      setCategories(categories);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Bg />

      <div className="container min-h-screen pt-28 flex-1 overflow-hidden">
        <div className="space-y-4 w-fit mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-accent">Menu</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dolorem
            <br />
            quidem esse eum animi?
          </p>
          <div className="w-fit mx-auto">
            <Dash />
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full">
            ...Loading
          </div>
        ) : (
          <>
            <ul className="mt-10 flex gap-6 justify-center md:gap-10 lg:gap-20 mx-auto overflow-x-auto">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-1 hover:bg-accent/70 hover:text-white rounded-md whitespace-nowrap ${
                    selectedCategory?.slug === category.slug
                      ? "bg-accent text-white "
                      : ""
                  }`}
                  onClick={() => {
                    handleCategoryClick(category);
                  }}>
                  {category.name}
                </li>
              ))}
            </ul>

            <div className="pt-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full">
                {filteredMenuData.map((item, index) => (
                  <MenuCard
                    key={index}
                    images={item.image}
                    title={item.name}
                    desc={item.content}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
