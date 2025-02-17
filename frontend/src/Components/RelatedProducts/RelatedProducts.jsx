import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-2 h-fit mb-10 p-1 max-md:gap-2'>
        <h1 className='text-[#171717] text-4xl font-semibold max-lg:text-3xl max-md:text-xl'>Related Products</h1>
        <hr className='w-[200px] h-1 rounded-sm bg-[#252525] max-lg:w-[120px] max-md:h-1' />
        <div className="relatedproducts-item w-fit mt-[50px] flex gap-7 max-xl:g-5 max-xl:mt-[30px] max-lg:gap-4 max-lg:mt-[20px] max-md:gap-1 max-sm:grid max-sm:grid-cols-2 max-sm:gap-1">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} className="max-xl:m-auto" />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts