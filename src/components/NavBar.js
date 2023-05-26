import React, { useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { store } from '../App'
import '../App.css'
const NavBar = () => {
  const navigation = useNavigate()
  const [gettoken,settoken] = useContext(store)
  console.log(gettoken)
  const logOut=()=>{
    settoken("")
    navigation('/')
    
  }
  return (
    
    <div className='navbar-container'>
      <h3>Contacts Managing Application</h3>
      {gettoken ?<ul>

        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href='' onClick={()=>logOut()}>Logout</a></li>
      </ul>:<ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      </ul>}
    </div>
  )
}

export default NavBar