import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/trolley.png'
import checklist from '../../assets/checklist.png'

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col bg-gray-200 pt-8 gap-5 w-full max-w-[250px] h-screen'>
        <Link to={"/addproduct"} className='no-underline'>
            <div className="sidebar-item">
                <img src={cartIcon} alt="Cart Icon" className='w-10 h-10' />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={"/listproduct"} className='no-underline'>
            <div className="sidebar-item">
                <img src={checklist} alt="Checklist" className='w-10 h-10' />
                <p>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar