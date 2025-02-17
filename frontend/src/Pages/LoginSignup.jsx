import React from 'react'

const LoginSignup = () => {
  const loginsignupFieldsInputStyles = {
    height: "60px",
    width: "100%",
    paddingLeft: "20px",
    border: "1px solid #C9C9C9",
    outline: "none",
    color: "#5C5C5C",
    fontSize: "16px"
  }
  return (
    <div className='loginsignup w-full h-fit bg-[#FCE3FE] pt-[50px] pb-[50px] mb-[30px] max-xl:pt-[50px]'>
      <div className="loginsignup-container w-[580px] h-fit bg-white py-5 px-12 m-auto max-xl:w-auto max-xl:max-w-[500px] max-xl:h-[500px] max-sm:w-[80%] max-sm:p-4">
        <h1 className="text-3xl font-semibold text-[#171717] my-1 mx-0 max-xl:my-2 max-xl:mx-auto max-md:text-2xl">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-7">
          <input type="text" placeholder='Your Name' style={loginsignupFieldsInputStyles} className='max-xl:gap-5 mt-5' />
          <input type="email" placeholder='Email Address' style={loginsignupFieldsInputStyles} />
          <input type="password" placeholder='Password' style={loginsignupFieldsInputStyles} />
        </div>
        <button className='w-[100%] h-12 text-white bg-[#FF4141] border-none text-xl font-medium cursor-pointer mt-[30px] max-md:text-base'>Continue</button>
        <p className='loginsignup-login text-[#5C5C5C] text-xl font-medium mt-5 max-xl:text-base' >Already have an account? <span className='text-[#FF4141] font-semibold'>Login</span></p>
      </div>
    </div>
  )
}

export default LoginSignup