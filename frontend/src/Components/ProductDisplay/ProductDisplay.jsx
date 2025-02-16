import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay flex my-0 mx-[170px] mb-10'>
        <div className="productdisplay-left flex gap-4">
            <div className="productdisplay-img-list flex flex-col gap-4">
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img w-[600px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right my-0 mx-[70px] flex flex-col">
            <h1 className='text-3xl font-bold text-[#3D3D3D]'>{product.name}</h1>
            <div className="productdisplay-right-stars flex items-center mt-3 gap-1 text-[#1C1C1C] text-base">
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_dull_icon} alt="Start Dull Icon" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices flex my-[40px] mx-0 gap-7 text-xl font-bold">
                <div className="productdisplay-right-price-old text-[#818181] line-through">${product.old_price}</div>
                <div className="productdisplay-right-price-new text-[#FF4141]">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">A lightweight, usually knitted, pullover shirt, close-fitting and with round neckline and short sleeves, worn as an undershirt or outer garment.</div>
            <div className="productdisplay-right-size">
                <h1 className='mt-[55px] text-[#656565] text-xl font-semibold'>Select Size</h1>
                <div className="productdisplay-right-sizes flex gap-5 my-7 mx-0">
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer'>S</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer'>M</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer'>L</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer'>XL</div>
                    <div className='py-4 px-6 bg-[#FBFBFB] border border-[#EBEBEB] rounded-sm cursor-pointer'>XXL</div>
                </div>
            </div>
            <button type="button" onClick={() => {addToCart(product.id)}} className='py-4 px-8 w-[200px] text-base font-semibold text-white bg-[#FF4141] mb-10 border-none outline-none cursor-pointer'>ADD TO CART</button>
            <p className='productdisplay-right-category mt-2'><span className='font-semibold'>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category mt-2'><span className='font-semibold'>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay