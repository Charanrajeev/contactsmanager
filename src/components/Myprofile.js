import React, { useState } from 'react'
import "../App.css"

const Myprofile = ({userinfo}) => {

console.log("userinfo",userinfo);
  return (<>{userinfo ? <div className="myprofile-container">
  <div className='myprofile-left'>{userinfo.username.charAt(0).toUpperCase()}</div>
  <div className='myprofile-right'>
  <div>
    <label>UserName:</label>
    <div>{userinfo.username}</div>
  </div>
  <div>
    <label>Email:</label>
    <div>{userinfo.email}</div>
  </div>
  </div>
</div>:<div>Loading...</div>}
  </>
   
  )
}

export default Myprofile