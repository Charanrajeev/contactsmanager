import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer-left'>
            <div>Copyright @2023</div>
            <div><a>Charan Rajeev</a></div>
        </div>
        <div className='footer-right'>
            <ul>
            <li><NavLink to="/dashboard">Dashbord</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer