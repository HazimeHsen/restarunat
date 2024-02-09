import MenuPage from "@/components/MenuPage";
import React, { Suspense } from "react";

const Menu = () => {
  return (
    <Suspense>
      <MenuPage />
    </Suspense>
  );
};

export default Menu;
