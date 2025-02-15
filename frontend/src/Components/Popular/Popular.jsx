import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-3xl font-semibold text-[#171717]'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-2 rounded-sm bg-[#252525]' />
        <div className="popular-item w-[80%] flex gap-8 mt-[50px]">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular