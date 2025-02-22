import React, { useEffect, useState } from 'react'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    // let response = await fetch("http://localhost:5000/allproducts")
    let response = await fetch("https://fashion-vista-i2q8.onrender.com/allproducts")
    let responseData = await response.json()
    setAllProducts(responseData)
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const remove_product = async(id) => {
    // await fetch("http://localhost:5000/removeproduct", {
    await fetch("https://fashion-vista-i2q8.onrender.com/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({id: id})
    })

    await fetchInfo()
  }

  return (
    <div className='list-product flex flex-col items-center w-full h-[740px] py-2 px-10 m-8 rounded-sm bg-neutral-100 max-md:box-border max-md:w-[95%] max-md:h-full max-md:py-2 max-md:px-8 max-md:my-5 max-md:mx-auto max-[320px]:px-2'>
      <h1 className='text-2xl font-bold'>All Products List</h1>
      <div className="listproduct-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 px-0 text-[#454545] text-base font-semibold max-md:py-4 max-md:px-0 max-[320px]:w-[80%]">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts overflow-y-auto">
        <hr />
        {allproducts.map((product, index) => {
          return <div key={index}>
            <div key={index} className="listproduct-format-main listproduct-format grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 px-0 text-[#454545] text-base items-center font-medium max-md:py-4 max-md:px-0">
              <img src={product.image} alt="Product Image" className='listproduct-product-icon h-20 max-md:h-[60px]'/>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={cross_icon} alt="Cross Icon" className='listproduct-remove-icon cursor-pointer m-auto' onClick={() => {remove_product(product.id)}} />
            </div>
            <hr />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct