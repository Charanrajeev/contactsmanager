import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useContext, } from 'react'
import { store } from '../App'
import "../App.css"
const Login = () => {
    const navigationTo = useNavigate()
    const [gettoken,settoken] = useContext(store)
    const [getinput,setinput] = useState({
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        setinput({...getinput,[e.target.name]:e.target.value})
    }
    const onLoginHandler =()=>{
        axios.post('https://express-app-production-8e63.up.railway.app/api/users/login',getinput).then((res)=>{
            console.log("something",res.data.accessToken)
            settoken(res.data.accessToken)
          

        }).then(()=>{
            
                navigationTo('/dashboard')
                alert("login success")
              
             
        }).catch((err)=>{
           
                alert(err.response.data.message)
                console.log(err);
           
        })
      
    }
    return (
        <div className='register-container'>
            <h3>Login Here</h3>
            <div className='register-form'>
                <div className='register-indi-body'>
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter your email" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div className='register-indi-body'>
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Enter your password" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div>
                    <button className='btn-register' onClick={onLoginHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login



