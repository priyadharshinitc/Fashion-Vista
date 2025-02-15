import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections flex flex-col items-center gap-2 mb-[100px]'>
        <h1 className="text-3xl font-semibold text-[#171717]">NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-2 rounded-sm bg-[#252525]' />
        <div className="collections w-[90%] grid grid-cols-4 gap-8 mt-12">
            {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections