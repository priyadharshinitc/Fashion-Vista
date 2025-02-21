import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block w-[80%] my-[30px] mx-[30px] max-xl:my-5 max-xl:w-[90%] max-md:w-[95%] max-sm:mx-[10px]' src={props.banner} alt="Banner Image" />
      {/* <div className="shopcategory-indexSort flex justify-between items-center my-0 mx-[170px] max-xl:w-[90%] max-xl:m-auto">
        <p className='max-xl:text-base'>
          <span className='font-semibold'>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-1 px-2 rounded-xl border border-[#888] flex items-center gap-1 max-xl:py-1 max-xl:px-2 max-xl:text-base">
          Sort by <img className='w-3 h-3' src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div> */}

      <div className='shopcategory-products grid grid-cols-4 items-center gap-20 my-8 mx-[30px] max-xl:w-[90%] max-xl:my-2 max-xl:gap-x-10 max-md:w-[90%] max-sm:grid-cols-2 max-sm:mx-[10px] max-[320px]:gap-10 max-[320px]:grid-cols-1 max-[320px]:w-1/2 max-[320px]:mx-auto'>
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} className="max-xl:m-auto" />
          } else {
            return null
          }
        })}
      </div>
      {/* <div className="   w-[233px] h-[69px] rounded-full bg-[#EDEDED] text-[#787878] text-xl font-medium flex justify-center items-center my-[150px] mx-auto max-xl:">
        Explore More
      </div> */}
    </div>
  )
}

export default ShopCategory