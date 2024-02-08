import React from "react";

const PageLoading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center ">
          <div className="font-semibold">Loading</div>
          <div className="loader">
            <li className="ball"></li>
            <li className="ball"></li>
            <li className="ball"></li>
          </div>
        </div>
        <div className="progress-loader">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
