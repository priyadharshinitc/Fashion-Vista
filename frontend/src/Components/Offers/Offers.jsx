import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      className="offers w-[65%] h-[60vh] flex m-auto my-10 py-0 px-[50px] mb-[150px] bg-linear-[180deg,#FDE1FF_0%,#E1FFEA22_60%] max-xl:py-0 max-xl:px-20 max-xl:mb-[120px] max-lg:px-14 max-lg:mb-[80px] max-lg:h-[40vh] max-md:mb-[60px] max-sm:h-[25vh] max-sm:mb-[50px] max-sm:mt-[50px]"
    >
      <div className="offers-left flex flex-col flex-1 justify-center">
        <h1 className="text-[55px] font-semibold text-[#171717] max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base">Exclusive</h1>
        <h1 className="text-[55px] font-semibold text-[#171717] max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base">
          Offers For You
        </h1>
        <p className="text-[#171717] text-xl font-semibold max-xl:text-base max-sm:text-[10px]">ONLY BEST SELLERS PRODUCTS</p>
        {/* <button className="w-[280px] h-[48px] rounded-full bg-[#FF4141] text-white border-none text-xl font-medium cursor-pointer mt-[30px]">Check Now</button> */}
      </div>
      <div className="offers-right flex flex-1 items-center justify-end pt-12 max-xl:pt-8 max-lg:pt-2">
        <img className="w-[350px] h-[80%] max-xl:w-[300px] max-lg:w-[200px] max-md:w-[180px] max-sm:w-[120px]" src={exclusive_image} alt="Exclusive Image" />
      </div>
    </div>
  );
};

export default Offers;
