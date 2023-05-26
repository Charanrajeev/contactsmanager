import React from 'react'
import { store } from '../App'
import { useState,useEffect,useContext, } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ContactsList from './ContactsList'
import Myprofile from './Myprofile'
import CreateContact from './CreateContact'
const Dashboard = () => {
    const navigationTo = useNavigate()
    const [gettoken,settoken] = useContext(store);
    const [getFlagForAdd,setFlagForAdd] = useState(false)
    const [getEditContact,setEditContact] = useState(false)
    const [getCurrentUser,setCurrentUser] = useState()
    const [getRefresh,setRefresh] = useState(false)
    useEffect(()=>{
      if(!gettoken){
       navigationTo("/login")
      }
    },[])
    useEffect(()=>{
        axios.get('https://express-app-production-8e63.up.railway.app/api/users/current',{
            headers:{
                Authorization:gettoken
            }
         }).then(res=>{
            setCurrentUser(res.data)

         }).catch(err=>{
            console.log(err);
         })
    },[])
    const onAddClickHandler =()=>{
   setFlagForAdd(!getFlagForAdd)
    }
    const editHandler =(contact)=>{
      setFlagForAdd(true)
     setEditContact(contact)
    }
  return (
    <>{getCurrentUser ?<div>
        <div><Myprofile userinfo={getCurrentUser} getRefresh={getRefresh}/></div>
        <div className='btn-addcontact'>
        <div className='line'></div>
          <p>Add Contact to List</p>
          <button className='btn-addcontact-plus' onClick={onAddClickHandler}>+</button>
        {getFlagForAdd && <div><CreateContact setFlagForAdd={setFlagForAdd} getEditContact={getEditContact} getRefresh={getRefresh} setEditContact={setEditContact}/></div>}
        </div>
        <div><ContactsList getFlagForAdd={getFlagForAdd} editHandler={editHandler} getRefresh={getRefresh} setRefresh={setRefresh}/></div>

       
        </div>:<div className='loading'>Please Wait ..Fetching Data..</div>}
    
    </>
    
  )
}

export default Dashboard