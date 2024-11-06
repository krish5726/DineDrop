import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
    const {url, token, setToken} = useContext(StoreContext)
    const [curr, setCurr] = useState("Sign Up")
    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    })

    const onChangeHandler = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setData(data => ({...data, [name]: value}))
    }

    const onLogin = async(e)=>{
      e.preventDefault()
      let newUrl = url;
      if(curr === "Login"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl, data);
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{curr}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {curr==='Login'?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            
            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email' required />
            <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />
        </div>
        <button type='submit'>
            {curr==="Sign Up"?"Create account": "Login"}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>
                I agree to the terms of use & privacy policy
            </p>
        </div>
        {curr==="Login"?<p>Create a new account? <span onClick={()=>setCurr("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurr("Login")}>Login here</span></p>}           
      </form>
    </div>
  )
}

export default LoginPopup
