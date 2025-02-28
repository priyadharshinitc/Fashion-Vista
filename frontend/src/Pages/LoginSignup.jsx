import React, { useState } from 'react'

const LoginSignup = () => {
  const loginsignupFieldsInputStyles = {
    height: "60px",
    width: "100%",
    paddingLeft: "20px",
    marginTop: "20px",
    border: "1px solid #C9C9C9",
    outline: "none",
    color: "#5C5C5C",
    fontSize: "16px"
  }

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const signup = async () => {
    if(formData.username !== "" && formData.email !== "" && formData.password !== "") {
      console.log("Sign Up Function Executed", formData)

      // let response = await fetch("http://localhost:5000/signup", {
      let response = await fetch("https://fashion-vista-i2q8.onrender.com/signup", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      })

      let responseData = await response.json()
      
      if(responseData.success) {
        localStorage.setItem("auth-token", responseData.token)
        window.location.replace("/")
      } else {
        alert(responseData.error)
      }
    } else {
      window.alert("Please enter data in all required fields.");
    }    
  }

  const login = async () => {
    if(formData.email !== "" && formData.password !== "") {
      console.log("Login Function Executed", formData)

      // let response = await fetch("http://localhost:5000/login", {
      let response = await fetch("https://fashion-vista-i2q8.onrender.com/login", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      })

      let responseData = await response.json()
      
      if(responseData.success) {
        localStorage.setItem("auth-token", responseData.token)
        window.location.replace("/")
      } else {
        alert(responseData.error)
      }
    } else {
      window.alert("Please enter data in all required fields.");
    }    
  }

  return (
    <div className='loginsignup w-full h-fit bg-[#FCE3FE] pt-[50px] pb-[50px] mb-[30px] max-xl:pt-[50px]'>
      <div className="loginsignup-container w-[580px] h-fit bg-white py-5 px-12 m-auto max-xl:w-auto max-xl:max-w-[500px] max-xl:h-[500px] max-sm:w-[80%] max-sm:p-4">
        <h1 className="text-3xl font-semibold text-[#171717] my-1 mx-0 max-xl:my-2 max-xl:mx-auto max-md:text-2xl">{state}</h1>
        <div className="loginsignup-fields flex flex-col gap-7 max-[320px]:gap-4">
          {state === "Sign Up" && <input type="text" placeholder='Your Name' style={loginsignupFieldsInputStyles} className='max-xl:gap-5' name="username" value={formData.username} onChange={changeHandler} required />}
          <input type="email" placeholder='Email Address'  style={loginsignupFieldsInputStyles} name="email" value={formData.email} onChange={changeHandler} required />
          <input type="password" placeholder='Password' style={loginsignupFieldsInputStyles} name="password" value={formData.password} onChange={changeHandler} required />
        </div>
        <button className='w-[100%] h-12 text-white bg-[#FF4141] border-none text-xl font-medium cursor-pointer mt-[30px] max-md:text-base' onClick={() => {(state === "Sign Up") ? signup() : login()}}>Continue</button>
        {state === "Sign Up" && <p className='loginsignup-login text-[#5C5C5C] text-xl font-medium mt-5 max-xl:text-base'>Already have an account? <span className='text-[#FF4141] font-semibold cursor-pointer' onClick={() => setState("Login")}>Login</span></p>}
        {state === "Login" && <p className='loginsignup-login text-[#5C5C5C] text-xl font-medium mt-5 max-xl:text-base'>Don't have an account? <span className='text-[#FF4141] font-semibold cursor-pointer' onClick={() => setState("Sign Up")}>Sign Up</span></p>}
      </div>
    </div>
  )
}

export default LoginSignup