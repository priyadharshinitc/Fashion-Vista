import React, { useState, useEffect } from 'react'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([])

  useEffect(() => {
    // fetch("http://localhost:5000/newcollections")
    fetch("https://fashion-vista-i2q8.onrender.com/newcollections")
    .then((response) => response.json())
    .then((data) => setNew_collection(data))
  }, [])

  return (
    <div className='new-collections flex flex-col items-center gap-2 mb-[100px] max-md:gap-2 max-md:mb-4'>
        <h1 className="text-3xl font-semibold text-[#171717] max-lg:text-3xl max-md:text-xl">NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-2 rounded-sm bg-[#252525] max-lg:w-[120px] max-md:h-1' />
        <div className="collections w-[95%] grid grid-cols-4 gap-8 mt-12 max-xl:g-5 max-xl:mt-[30px] max-lg:gap-4 max-lg:mt-[20px] max-md:gap-1 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 max-[320px]:grid-cols-1 max-[320px]:w-[50%]">
            {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} className="mx-auto max-[375px]:my-1" />
            })}
        </div>
    </div>
  )
}

export default NewCollections