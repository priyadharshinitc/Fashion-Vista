import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
    // const styles = {
    //     display: "grid",
    //     gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr",
    //     alignItems: "center",
    //     gap: "75px",
    //     padding: "20px 0px",
    //     fontSize: "18px"
    // }
  return (
    <div className='cartitems my-[100px] mx-[170px] max-xl:my-14 max-xl:mx-12'>
        <div className="cartitems-format-main text-[#454545] font-bold grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr] items-center gap-[60px] py-5 px-0 text-xl max-xl:grid-cols-[0.5fr_1fr_0.5fr_0.5fr_0.5fr_0.5fr] max-xl:gap-5 max-xl:py-3 max-xl:px-0 max-md:gap-2 max-sm:hidden">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-[#E2E2E2] border-0'/>
        {all_product.map((e) => {
            if(cartItems[e.id] > 0) {
                return(
                    <div key={e.id}>
                        <div className="cartitems-format text-base text-[#3C3C3C] font-normal justify-center grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[60px] py-5 px-0 max-sm:grid max-sm:grid-cols-[0.5fr_3fr_0.5fr] max-sm:gap-2">
                            <img src={e.image} alt="Product Image" className='carticon-product-icon h-[62px] max-xl:h-[50px]' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity w-[64px] h-[50px] border-2 border-[#EBEBEB] bg-[#FFF]'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon w-4 my-0 cursor-pointer' src={remove_icon} alt="Remove Icon" onClick={() => (removeFromCart(e.id))} />
                        </div>
                        <hr />
                    </div>
                )
            }
            return null;
        })}
        <div className="cartitems-down flex my-[100px] mx-0 max-xl:my-20 max-xl:flex-col max-xl:gap-20">
            <div className="cartitems-total flex flex-col flex-1 mr-[200px] gap-10 max-xl:m-0">
                <h1 className='text-2xl font-semibold'>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className='h-1 bg-[#E2E2E2] border-0' />
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr className='h-1 bg-[#E2E2E2] border-0' />
                    <div className="cartitems-total-item flex justify-between py-4 px-0">
                        <h3 className='text-lg font-semibold'>Total</h3>
                        <h3 className='text-lg font-semibold'>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-[262px] h-[58px] outline-none border-none bg-[#FF5A5A] text-[#FFF] text-base font-semibold cursor-pointer max-xl:max-w-[200px] max-xl:h-[45px]'>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode flex-1 text-base font-medium">
                <p className='text-[#555]'>If you have promocode, enter it here</p>
                <div className="cartitems-promobox w-[504px] mt-4 pl-5 h-[58px] bg-[#EAEAEA] flex items-center max-xl:w-auto max-xl:max-w-[500px]">
                    <input type="text" placeholder='Promo Code' className='border-none outline-none bg-transparent w-[330px] h-[50px] max-xl:w-full' />
                    <button className='w-[170px] h-[58px] text-base bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems