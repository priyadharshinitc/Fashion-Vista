import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay flex my-0 mx-[170px] mb-10 max-xl:my-0 max-xl:mx-14 max-lg:mx-8 max-md:mx-2 max-sm:flex-col'>
        <div className="productdisplay-left flex gap-4 max-xl:gap-2 max-lg:gap-1">
            <div className="productdisplay-img-list flex flex-col gap-4 max-xl:gap-2 max-md:hidden">
                <img className='h-[163px] max-xl:h-[120px] max-lg:h-[80px] max-md:h-[70px]' src={product.image} alt="" />
                <img className='h-[163px] max-xl:h-[120px] max-lg:h-[80px] max-md:h-[70px]' src={product.image} alt="" />
                <img className='h-[163px] max-xl:h-[120px] max-lg:h-[80px] max-md:h-[70px]' src={product.image} alt="" />
                <img className='h-[163px] max-xl:h-[120px] max-lg:h-[80px] max-md:h-[70px]' src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img w-[600px] h-[700px] max-xl:w-[auto] max-xl:h-[510px] max-lg:h-[350px] max-md:h-[300px]' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right my-0 mx-[70px] flex flex-col max-xl:my-0 max-xl:mx-8">
            <h1 className='text-3xl font-bold text-[#3D3D3D] max-xl:text-2xl max-lg:text-xl max-sm:mt-4'>{product.name}</h1>
            <div className="productdisplay-right-stars flex items-center mt-3 gap-1 text-[#1C1C1C] text-base">
                <img src={star_icon} alt="Star Icon" className='max-lg:w-4' />
                <img src={star_icon} alt="Star Icon" className='max-lg:w-4' />
                <img src={star_icon} alt="Star Icon" className='max-lg:w-4' />
                <img src={star_icon} alt="Star Icon" className='max-lg:w-4'/>
                <img src={star_dull_icon} alt="Start Dull Icon" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices flex my-[40px] mx-0 gap-7 text-xl font-bold max-xl:my-2 max-xl:mx-0">
                <div className="productdisplay-right-price-old text-[#818181] line-through">${product.old_price}</div>
                <div className="productdisplay-right-price-new text-[#FF4141]">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description max-xl:text-base">A lightweight, usually knitted, pullover shirt, close-fitting and with round neckline and short sleeves, worn as an undershirt or outer garment.</div>
            <div className="productdisplay-right-size max-lg:my-2">
                <h1 className='mt-[55px] text-[#656565] text-xl font-semibold max-xl:mt-[20px] max-md:text-base'>Select Size</h1>
                <div className="productdisplay-right-sizes flex gap-5 my-7 mx-0 max-lg:my-10 max-md:mt-2 max-md:gap-1 max-md:my-2 max-sm:my-5">
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer max-xl:px-5 max-lg:py-2 max-lg:px-4 max-md:py-1 max-md:px-2 max-sm:py-2 max-sm:px-4'>S</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer max-xl:px-5 max-lg:py-2 max-lg:px-4 max-md:py-1 max-md:px-2 max-sm:py-2 max-sm:px-4'>M</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer max-xl:px-5 max-lg:py-2 max-lg:px-4 max-md:py-1 max-md:px-2 max-sm:py-2 max-sm:px-4'>L</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer max-xl:px-5 max-lg:py-2 max-lg:px-4 max-md:py-1 max-md:px-2 max-sm:py-2 max-sm:px-4'>XL</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer max-xl:px-5 max-lg:py-2 max-lg:px-4 max-md:py-1 max-md:px-2 max-sm:py-2 max-sm:px-4'>XXL</div>
                </div>
            </div>
            <button type="button" onClick={() => {addToCart(product.id)}} className='py-4 px-8 w-[200px] text-base font-semibold text-white bg-[#FF4141] mb-10 border-none outline-none cursor-pointer max-xl:w-[150px] max-xl:py-4 max-xl:px-0 max-xl:mb-5 max-lg:w-[120px] max-lg:py-2 max-lg:mb-2 max-sm:w-[130px] max-sm:py-3'>ADD TO CART</button>
            <p className='productdisplay-right-category mt-2 max-xl:mt-1 max-xl:text-base'><span className='font-semibold'>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category mt-2 max-xl:mt-1 max-xl:text-base'><span className='font-semibold'>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay