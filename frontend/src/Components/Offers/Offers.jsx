import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      className="offers w-[65%] h-[60vh] flex py-0 px-[50px] mb-[150px] bg-linear-[180deg,#FDE1FF_0%,#E1FFEA22_60%] m-auto"
    >
      <div className="offers-left flex flex-col flex-1 justify-center">
        <h1 className="text-[55px] font-semibold text-[#171717]">Exclusive</h1>
        <h1 className="text-[55px] font-semibold text-[#171717]">
          Offers For You
        </h1>
        <p className="text-[#171717] text-xl font-semibold">ONLY BEST SELLERS PRODUCTS</p>
        <button className="w-[280px] h-[48px] rounded-full bg-[#FF4141] text-white border-none text-xl font-medium cursor-pointer mt-[30px]">Check Now</button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-end pt-12">
        <img className="w-[75%] h-[90%]" src={exclusive_image} alt="Exclusive Image" />
      </div>
    </div>
  );
};

export default Offers;
