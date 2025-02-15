import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-12'>
        <div className="footer-logo flex items-center gap-5">
            <img src={footer_logo} alt="Logo Big" />
            <p className='text-[#383838] text-5xl font-bold'>FASHION VISTA</p>
        </div>
        <ul className="footer-links flex list-none gap-12 text-[#252525] text-xl">
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="footer-social-icon flex gap-5">
            <div className="footer-icons-container cursor-pointer p-2 pb-1 bg-[#FBFBFB] border border-[#EBEBEB] ">
                <img src={instagram_icon} alt="Instagram Icon" />
            </div>
            <div className="footer-icons-container cursor-pointer p-2 pb-1 bg-[#FBFBFB] border border-[#EBEBEB] ">
                <img src={pinterest_icon} alt="Pinterest Icon" />
            </div>
            <div className="footer-icons-container cursor-pointer p-2 pb-1 bg-[#FBFBFB] border border-[#EBEBEB] ">
                <img src={whatsapp_icon} alt="Whatsapp Icon" />
            </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-8 w-full text-[1A1A1A] text-xl mb-[30px]">
            <hr className='w-[80%] border-none rounded-xl h-1 bg-[#C7C7C7]' />
            <p>Copyright @ 2025 - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer