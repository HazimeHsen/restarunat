"use client";
import React, { Suspense, useEffect, useState } from "react";
import Dash from "@/components/Dash";
import MenuCard from "@/components/MenuCard";
import Bg from "@/components/Bg/BgAnimation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Products } from "../../types/Products";
import {
  getCategoriesA,
  getCategoriesE,
  getProducts,
} from "@/app/sanity/schemas/sanity-utils";
import { Categories } from "../../types/Categories";
import ClientOnly from "@/components/ClientOnly";
import { useSearchParams } from "next/navigation";


const LoadingIndicator: React.FC = () => (
  <div className="flex justify-center items-center h-full w-full">
    Loading...
  </div>
);

const CategoryItem: React.FC<{
  category: Categories;
  isSelected: boolean;
  onClick: () => void;
}> = ({ category, isSelected, onClick }) => (
  <li
    className={`cursor-pointer p-1 hover:bg-accent/70 hover:text-white rounded-md whitespace-nowrap ${
      isSelected ? "bg-accent text-white " : ""
    }`}
    onClick={onClick}>
    {category.name}
  </li>
);

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang");
    setSelectedLanguage(lang || "english");
    setSelectedCategory(
      lang === "arabic"
        ? { _id: "الكل", name: "الكل" }
        : {
            _id: "all",
            name: "All",
          }
    );
  }, [searchParams]);

  const handleCategoryClick = (category: Categories | null) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      if (selectedLanguage === "arabic") {
        const categoriesData = await getCategoriesA();
        setCategories([{ _id: "الكل", name: "الكل" }, ...categoriesData]);
      } else {
        const categoriesData = await getCategoriesE();
        setCategories([{ _id: "all", name: "All" }, ...categoriesData]);
      }
    };
    getData();
  }, [selectedLanguage]);

  const getMenuTitle = () => {
    return selectedLanguage === "arabic" ? (
      "قائمتنا"
    ) : (
      <>
        Our <span className="text-accent">Menu</span>
      </>
    );
  };

  const filteredMenuData = selectedCategory
    ? selectedCategory._id === "all" || selectedCategory._id === "الكل"
      ? products
      : products.filter(
          (item) =>
            (selectedLanguage === "arabic"
              ? item.categoryA._id
              : item.categoryE._id) === selectedCategory._id
        )
    : products;

  return (
    <ClientOnly>
      <Suspense fallback={<LoadingIndicator />}>
        <Navbar />
        <Bg />

        <div
          dir={selectedLanguage === "arabic" ? "rtl" : "ltr"}
          className="container min-h-screen pt-28 flex-1 overflow-hidden">
          <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">{getMenuTitle()}</h2>
            <div className="w-fit mx-auto">
              <Dash />
            </div>
          </div>
          <ul className="mt-10 flex gap-6 justify-center md:gap-10 lg:gap-20 mx-auto overflow-x-auto">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                category={category}
                isSelected={selectedCategory?._id === category._id}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </ul>

          <div className="pt-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full">
              {filteredMenuData.map((item, index) => (
                <MenuCard
                  key={index}
                  lang={selectedLanguage}
                  images={item.image}
                  title={
                    selectedLanguage === "arabic" ? item.nameA : item.nameE
                  }
                  desc={
                    selectedLanguage === "arabic"
                      ? item.contentA
                      : item.contentE
                  }
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </Suspense>
    </ClientOnly>
  );
};

export default MenuPage;
