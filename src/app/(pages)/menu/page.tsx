import MenuPage from "@/components/MenuPage";
import { Metadata } from "next";
import React, { Suspense } from "react";
export const metadata: Metadata = {
  title: "Our Menu",
};
const Menu = () => {
  return (
    <Suspense>
      <MenuPage />
    </Suspense>
  );
};

export default Menu;
