import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block w-[82%] my-[30px] mx-auto' src={props.banner} alt="Banner Image" />
      <div className="shopcategory-indexSort flex justify-between items-center my-0 mx-[170px]">
        <p>
          <span className='font-semibold'>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-1 px-2 rounded-xl border border-[#888] flex items-center gap-1">
          Sort by <img className='w-3 h-3' src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      <div className='shopcategory-products grid grid-cols-4 gap-20 my-8 mx-[120px] max-sm:grid-cols-2'>
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore w-[233px] h-[69px] rounded-full bg-[#EDEDED] text-[#787878] text-xl font-medium flex justify-center items-center my-[150px] mx-auto ">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory