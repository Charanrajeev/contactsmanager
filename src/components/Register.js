import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
const Register = (props) => {
   
    const [getinput,setinput] = useState({
        username:"",
        email:"",
        password:""

    });
    const onChangeHandler=(e)=>{
        setinput({...getinput,[e.target.name]:e.target.value})
    }
    const onRegister=()=>{
        axios.post('https://express-app-production-8e63.up.railway.app/api/users/register',getinput).then((res)=>{
          alert("Registratin Success")
          console.log(res.data);
        }).catch(err=>{
            alert(`Registration Failed! ${err.response.data.message}`)
      
    })
    }
    return (
        <div className='register-container'>
            <h3>Register Here</h3>
            <div className='register-form'>
                <div className='register-indi-body'>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter your email" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div className='register-indi-body'>
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter your email" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div className='register-indi-body'>
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Enter your password" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div>
                    <button className='btn-register' onClick={onRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register