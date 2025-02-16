import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar flex justify-around p-4 shadow-xl'>
        <div className="nav-logo flex items-center gap-3">
            <img src={logo} alt="Logo" />
            <p className='text-[#171717] text-2xl font-semibold'>FASHION VISTA</p>
        </div>
        <ul className="nav-menu flex items-center gap-12 list-none text-[#626262] text-xl font-medium"> 
            <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("men")}><Link to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("women")}><Link to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
            <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart flex items-center gap-11">
            <Link to="/login">
                <button className='w-[157px] h-[58px] outline-none border border-[#7A7A7A] rounded-full text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#F3F3F3]'>Login</button>
            </Link>
            <Link to="/cart">
                <img src={cart_icon} alt="Cart Icon" />
            </Link>
            <div className="nav-cart-count w-[20%] h-fit flex justify-center items-center rounded-full text-base bg-red-500 text-white">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar