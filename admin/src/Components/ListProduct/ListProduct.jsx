import React from 'react'

const ListProduct = () => {
  return (
    <div className='list-product'>
      <h1 className='text-2xl font-bold'>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
    </div>
  )
}

export default ListProduct