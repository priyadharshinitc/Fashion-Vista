import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className={`item w-[350px] hover:scale-[1.01] hover:transition duration-[0.6s] max-xl:w-[220px] max-xl:text-base max-lg:w-[170px] max-md:w-[120px] max-sm:w-[160px] ${props.className}`}>
        <Link to={`/product/${props.id}`}>
          <img className='w-[300px] max-xl:w-[220px] max-lg:w-[170px] max-md:w-[120px] max-sm:w-[160px]' src={props.image} alt="Product Image" onClick={window.scrollTo(0, 0)} />
        </Link>
        <p className='mx-1 my-0 w-[250px] max-xl:w-[200px] max-lg:w-[150px] max-md:w-[100px] max-sm:w-[140px]'>{props.name}</p>
        <div className="item-prices flex items-center gap-5">
            <div className='item-price-new text-[#374151] text-xl font-semibold max-md:text-base'>${props.new_price}</div>
            <div className='item-price-old text-[#8C8C8C] font-medium line-through max-xl:text-base'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item