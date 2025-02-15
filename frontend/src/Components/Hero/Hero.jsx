import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero h-screen bg-linear-[180deg,#FDE1FF,#E1FFEA22_60%] flex">
        <div className="hero-left flex flex-col flex-1 justify-center gap-5 pl-44 leading-[1.1]">
            <h2 className='text-3xl font-semibold text-[#090909]'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-5'>
                    <p className='text-[#171717] text-[80px] font-bold'>new</p>
                    <img src={hand_icon} alt="Hand Icon" className='w-[105px]' />
                </div>
                <p className='text-[#171717] text-[80px] font-bold'>collections</p>
                <p className='text-[#171717] text-[80px] font-bold'>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center gap-4 w-[280px] h-[48px] rounded-full mt-8 bg-[#FF4141] text-white text-xl font-medium">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
        <div className="hero-right flex flex-1 justify-center items-center">
            <img className='w-[600px] h-[700px]' src={hero_image} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero