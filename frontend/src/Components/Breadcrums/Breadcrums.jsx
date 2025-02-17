import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className='breadcrum flex items-center gap-2 text-[#5E5E5E] text-base font-semibold my-[60px] max-xl:my-8 max-xl:mx-12 max-lg:mx-8 max-md:mx-2'>
        Home <img src={arrow_icon} alt="Arrow Icon" /> Shop <img src={arrow_icon} alt="Arrow Icon" /> {product.category} <img src={arrow_icon} alt="Arrow Icon" /> {product.name}
    </div>
  )
}

export default Breadcrums