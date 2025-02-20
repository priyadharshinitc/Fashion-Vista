import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar flex justify-evenly items-center p-4 shadow-xl max-xl:py-3 max-xl:px-[50px] max-lg:py-3 max-lg:px-8 max-md:py-2 max-md:px-0 max-sm:py-2 max-sm:gap-0">
      <div className="nav-logo flex items-center gap-3 max-sm:scale-95">
        <img src={logo} alt="Logo" />
        <p className="text-[#171717] block text-3xl font-semibold max-xl:text-2xl max-lg:text-xl">
          FASHION VISTA
        </p>
      </div>
      <img
        src={nav_dropdown}
        alt="Navigation Dropdown Icon"
        onClick={dropdown_toggle}
        className="nav-dropdown hidden max-md:block max-md:w-8 max-md:h-8 max-md:-rotate-45 max-md:duration-500"
      />
      <ul
        ref={menuRef}
        className="nav-menu text-xl flex items-center gap-12 list-none text-[#626262] font-medium max-xl:gap-8 max-xl:text-base max-lg:gap-6 max-md:hidden max-md:h-20 max-md:w-full max-md:absolute max-md:bg-white max-md:justify-center max-md:top-[70px] max-sm:h-16"
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11 max-xl:gap-8 max-sm:scale-95">
        {localStorage.getItem("auth-token") ? (
          <button className="w-[157px] h-[58px] outline-none border border-[#7A7A7A] rounded-full text-[#515151]  font-medium bg-white cursor-pointer active:bg-[#F3F3F3] max-xl:w-[120px] max-xl:h-[45px] max-xl:text-base max-lg:w-20 max-lg:h-8 max-lg:text-base"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="w-[157px] h-[58px] outline-none border border-[#7A7A7A] rounded-full text-[#515151]  font-medium bg-white cursor-pointer active:bg-[#F3F3F3] max-xl:w-[120px] max-xl:h-[45px] max-xl:text-base max-lg:w-20 max-lg:h-8 max-lg:text-base">
              Login
            </button>
          </Link>
        )}
        <Link to="/cart">
          <img className="max-lg:w-8" src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count w-[20%] h-fit flex justify-center items-center rounded-full text-base bg-red-500 text-white -mt-8 -ml-[55px] max-xl:-ml-10 max-xl:text-base max-lg:w-5 max-lg:h-5">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
