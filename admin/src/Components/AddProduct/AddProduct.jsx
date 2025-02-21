import React, { useState } from 'react'
import uploadImage from '../../assets/image-upload.png'

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails)

    let responseData
    let product = productDetails
    let formData = new FormData()
    formData.append("product", image)

    // await fetch("http://localhost:5000/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json"
    //   },
    //   body: formData
    // }).then((response) => {
    //   response.json()
    // }).then((data) => {
    //   responseData = data
    // })

    // let response = await fetch("https://fashion-vista-i2q8.onrender.com/upload", {
    let response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    })

    responseData = await response.json() // Properly parsing JSON

    if(responseData.success) {
      product.image = responseData.image_url
      console.log(product)

      // let nextResponse = await fetch("https://fashion-vista-i2q8.onrender.com/addproduct", {
      let nextResponse = await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })

      let nextResponseData = await nextResponse.json()

      if(nextResponseData.success) {
        alert("Product added")
      } else{
        alert("Failed to add product")
      }
    } else {
      console.error("Image upload failed:", responseData);
    }
  }

  return (
    <div className='add-product box-border w-full max-w-[800px] py-8 px-12 my-5 mx-8 rounded-md bg-neutral-100 max-md:w-auto max-md:p-8 max-md:m-5'>
      <div className="addproduct-itemfield w-full text-[#454545] text-base">
        <p>Product Title</p>
        <input type="text" name="name" placeholder='Enter Product Title' className="box-border w-full h-[50px] rounded-sm pl-4 border border-[#C3C3C3] outline-none text-[#454545] text-base mt-5" value={productDetails.name} onChange={changeHandler} />
      </div>
      <div className="addproduct-price flex gap-10 mt-5">
        <div className="addproduct-itemfield w-full text-[#454545] text-base">
          <p>Price</p>
          <input type="text" name="old_price" placeholder='Enter Old Price' className="box-border w-full h-[50px] rounded-sm pl-4 border border-[#C3C3C3] outline-none text-[#454545] text-base mt-5 max-md:p-1 max-md:text-center" value={productDetails.old_price} onChange={changeHandler} />
        </div>
        <div className="addproduct-itemfield w-full text-[#454545] text-base ">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder='Enter New Price' className="box-border w-full h-[50px] rounded-sm pl-4 border border-[#C3C3C3] outline-none text-[#454545] text-base mt-5 max-md:p-1 max-md:text-center" value={productDetails.new_price} onChange={changeHandler} />
        </div>
      </div>
      <div className="addproduct-itemfield w-full text-[#454545] text-base mt-5">
        <p>Product Category</p>
        <select name="category" className="addproduct-selector p-2 w-[100px] h-[50px] text-base text-[#454545] border border-[#7B7B7B8D] rounded-sm mt-2" value={productDetails.category} onChange={changeHandler}>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield w-full text-[#454545] text-base mt-5">
        <label htmlFor="file-input">
          <img src={image? URL.createObjectURL(image) : uploadImage} alt="Upload Area Icon" className='addproduct-thumbnail-img w-[120px] h-[120px] rounded-md' />
        </label>
        <input type="file" name="image" id="file-input" hidden className="box-border w-full h-[50px] rounded-sm pl-4 border border-[#C3C3C3] outline-none text-[#454545] text-base mt-5" onChange={imageHandler} />
      </div>
      <button className='addproduct-btn mt-5 w-[160px] h-[50px] rounded-sm bg-[#6079FF] text-white border-none cursor-pointer text-base font-medium' onClick={() => {Add_Product()}}>ADD</button>
    </div>
  )
}

export default AddProduct