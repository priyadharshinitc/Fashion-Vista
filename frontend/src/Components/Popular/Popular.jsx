import React, { useEffect, useState } from 'react'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  const [data_product, setData_Product] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/popularinwomen")
    .then((response) => response.json())
    .then((data) => setData_Product(data))
  }, [])

  return (
    <div className='popular flex flex-col items-center gap-2 mt-10  max-md:gap-2'>
        <h1 className='text-4xl font-semibold text-[#171717] max-lg:text-3xl max-md:text-xl'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-2 rounded-md bg-[#252525] max-lg:w-[120px] max-md:h-1' />
        <div className="popular-item w-[80%] flex justify-center gap-8 mt-[50px] max-xl:g-5 max-xl:mt-[30px] max-lg:gap-4 max-lg:mt-[20px] max-md:gap-1 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 max-[320px]:grid-cols-1 max-[320px]:w-[50%]">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular