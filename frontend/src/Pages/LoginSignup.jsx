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
    <div className='loginsignup w-full h-[83vh] bg-[#FCE3FE] pt-[50px] pb-[50px] mb-[30px]'>
      <div className="loginsignup-container w-[580px] h-fit bg-white py-10 px-12 m-auto">
        <h1 className="text-3xl font-semibold text-[#171717] my-1 mx-0">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-[30px]">
          <input type="text" placeholder='Your Name' style={loginsignupFieldsInputStyles} />
          <input type="email" placeholder='Email Address' style={loginsignupFieldsInputStyles} />
          <input type="password" placeholder='Password' style={loginsignupFieldsInputStyles} />
        </div>
        <button className='w-[100%] h-12 text-white bg-[#FF4141] border-none text-xl font-medium cursor-pointer mt-[30px]'>Continue</button>
        <p className='loginsignup-login text-[#5C5C5C] text-xl font-medium mt-5' >Already have an account? <span className='text-[#FF4141] font-semibold'>Login</span></p>
      </div>
    </div>
  )
}

export default LoginSignup