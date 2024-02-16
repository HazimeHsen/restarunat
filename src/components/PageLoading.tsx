import React from "react";
import Logo from "./Logo";

const PageLoading = () => {
  return (
    <div className="flex-col h-screen w-screen relative gap-4 flex items-center justify-center">
      <div className="w-28 h-28 border-8 text-accent text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-accent rounded-full"></div>
      <div className="animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>
    </div>
  );
};

export default PageLoading;
