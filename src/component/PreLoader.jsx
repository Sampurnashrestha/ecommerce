import React from "react";
import Loader from "../assets/image/loader.gif";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col  items-center mt-60 bg-white">
      <div className=" h-[120px]  ">
        <img src={Loader} alt="" className="" />
      </div>

      <div className="flex pl-5   text-lg sm:text-2xl font-semibold text-yellow-400">
        Loading
        <span className="ml-1 animate-bounce">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.15s]">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.3s]">.</span>
      </div>
    </div>
  );
};

export default PreLoader;
