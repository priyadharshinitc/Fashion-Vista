import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
// import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero h-screen bg-linear-[180deg,#FDE1FF,#E1FFEA22_60%] flex max-sm:flex-col max-sm:items-center">
        <div className="hero-left flex flex-col flex-1 justify-center gap-5 pl-44 leading-[1.1] max-xl:pl-[100px] max-lg:pl-[80px] max-md:pl-[30px]">
            <h2 className='text-3xl font-semibold text-[#090909] max-xl:text-xl max-md:text-base max-sm:text-xl'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-5'>
                    <p className='text-[#171717] text-[80px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]'>New</p>
                    <img src={hand_icon} alt="Hand Icon" className='w-[105px] max-xl:w-[80px] max-lg:w-[65px] max-md:w-[50px] max-sm:w-[55px]' />
                </div>
                <p className='text-[#171717] text-[80px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]'>Collections</p>
                <p className='text-[#171717] text-[80px] font-bold max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[50px]'>For Everyone</p>
            </div>
            {/* <div className="hero-latest-btn flex justify-center items-center gap-4 w-[280px] h-[48px] rounded-full mt-8 bg-[#FF4141] text-white text-xl font-medium max-xl:gap-2 max-xl:w-[250px] max-xl:h-[60px] max-xl:mt-[20px]">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div> */}
        </div>
        <div className="hero-right flex flex-1 justify-center items-center max-sm:hidden">
            <img className='w-[600px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-[300px]' src={hero_image} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero