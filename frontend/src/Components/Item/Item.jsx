import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[350px] hover:scale-[1.05] hover:transition duration-[0.6s]'>
        <Link to={`/product/${props.id}`}>
          <img className='w-[300px] h-[350px]' src={props.image} alt="Product Image" onClick={window.scrollTo(0, 0)} />
        </Link>
        <p className='mx-1 my-0 w-[250px]'>{props.name}</p>
        <div className="item-prices flex gap-5">
            <div className='item-price-new text-[#374151] text-xl font-semibold'>${props.new_price}</div>
            <div className='item-price-old text-[#8C8C8C] text-xl font-medium   line-through'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item