import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/trolley.png'
import checklist from '../../assets/checklist.png'

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col bg-gray-300 pt-8 gap-5 w-full max-w-[250px] h-screen max-md:py-8 max-md:px-0 max-md:flex-row max-md:w-full max-md:max-w-none max-md:h-auto max-md:justify-center'>
        <Link to={"/addproduct"} className='no-underline'>
            <div className="sidebar-item flex justify-center items-center my-0 mx-5 py-2 px-3 rounded-sm bg-[#F6F6F6] gap-5 cursor-pointer max-sm:p-2 max-sm:gap-2">
                <img src={cartIcon} alt="Cart Icon" className='w-5 h-5' />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={"/listproduct"} className='no-underline'>
            <div className="sidebar-item flex justify-center items-center my-0 mx-5 py-2 px-3 rounded-sm bg-[#F6F6F6] gap-5 cursor-pointer max-sm:p-2 max-sm:gap-2">
                <img src={checklist} alt="Checklist" className='w-5 h-5' />
                <p>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar