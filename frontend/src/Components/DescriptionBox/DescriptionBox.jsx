import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox my-[120px] mx-[170px] max-xl:m-14 max-md:my-14 max-md:mx-5'>
        <div className="descriptionbox-navigator flex">
            <div className="descriptionbox-nav-box flex justify-center items-center text-base font-semibold w-[171px] h-[70px] border border-[#D0D0D0]">Description</div>
            <div className="descriptionbox-nav-box fade flex justify-center items-center text-base font-semibold w-[171px] h-[70px] border border-[#D0D0D0] bg-[#FBFBFB] text-[#555]">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description flex flex-col gap-6 border border-[#D0D0D0] p-12 pb-[70px] text-base max-sm:p-5">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individual can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (eg: sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox