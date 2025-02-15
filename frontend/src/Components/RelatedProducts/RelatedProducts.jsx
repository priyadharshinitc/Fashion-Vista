import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-[#171717] text-3xl font-semibold'>Related Products</h1>
        <hr className='w-[200px] h-1 rounded-sm bg-[#252525]' />
        <div className="relatedproducts-item w-[80%] mt-[50px] flex gap-7">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts