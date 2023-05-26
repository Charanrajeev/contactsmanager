import React from 'react'
import "../App.css"
const Home = () => {
  return (
    <div className='descri-container'>
    <h2>Contacts Managing Application</h2>
     <div className='decri-contain-features'>
       <h5>Features</h5>
       <div className='decrip-features'>
       <p>User Authentication</p>
       <p>High Level Security Login</p>
       <p>Password Hashing (Even we cant see your password)</p>
       <p>User Can Create,Update,Delete and View the Contacts</p>
       <p>Accept the user no one can do CRUD Operations on different users contacts. </p>
       </div>
     </div>
    </div>
  )
}

export default Home