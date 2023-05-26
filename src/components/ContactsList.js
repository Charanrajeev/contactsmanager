import React from 'react'
import { useEffect,useState,useContext } from 'react'
import { store } from '../App'
import axios from 'axios'
import "../App.css"
const ContactsList = (props) => {
    const[gettoken,settoken] = useContext(store)
    const [getContacts,setContacts] = useState()
    useEffect(()=>{
        axios.get("https://express-app-production-8e63.up.railway.app/api/contacts",{
            headers:{
                Authorization:gettoken
            }
        }).then((res)=>{
         setContacts(res.data)
        
        })
    },[])
    useEffect(()=>{
        axios.get("https://express-app-production-8e63.up.railway.app/api/contacts",{
            headers:{
                Authorization:gettoken
            }
        }).then((res)=>{
         setContacts(res.data)
        
        })
    },[props.getFlagForAdd,props.getRefresh])
    function onEditHandler(contact){
    props.editHandler(contact)
    }

    function onDeleteHandler(contact){
        axios.delete(`https://express-app-production-8e63.up.railway.app/api/contacts/${contact._id}`,{
            headers:{
                Authorization:gettoken
            }
        }).then((res)=>{
            props.setRefresh(!props.getRefresh)
        }).catch((err)=>{
           alert(err.resonse.message)
        })
        }

  return (
   <>{getContacts &&  <div className='contactslist-container'>
    {
        getContacts.contacts.map((contact)=>
            <div className='contactslist-m-container' key={contact.id}>
                <div className='contact-logo'>{contact.name.charAt(0).toUpperCase()}</div>
                <div className='contactslist-sublist'>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div >{contact.phone}</div>
            <button onClick={()=>onEditHandler(contact)}>Edit</button>
            <button onClick={()=>onDeleteHandler(contact)}>Delete</button>
            </div>
            </div>
        )
       
    }
</div>}</>
  )
}

export default ContactsList