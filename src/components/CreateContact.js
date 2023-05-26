import React, { useState,useContext, useEffect } from 'react'
import axios from 'axios'
import { store } from '../App'


const CreateContact = (props) => {
    const [gettoken,settoken]= useContext(store)
        const [getContact,setContact]=useState({
        name:"",
        email:"",
        phone:""
    })
    const onChangeHandler=(e)=>{
         setContact({...getContact,[e.target.name]:e.target.value})
    }
    const onContactAddHandler=()=>{
        console.log(gettoken);
        axios.post("https://express-app-production-8e63.up.railway.app/api/contacts",getContact,{
            headers:{
                Authorization:gettoken
            }
        }).then((res)=>{
          
           props.setFlagForAdd(false)
        }).catch(err=>{
            alert("Something went wrong")
        })
        
    }
    useEffect(()=>{
        if(props.getEditContact){
            setContact(props.getEditContact)
        }
    },[props.getEditContact])

    const onEditHandler=()=>{
        
        axios.put(`https://express-app-production-8e63.up.railway.app/api/contacts/${props.getEditContact._id}`,getContact,{
            headers:{
                Authorization:gettoken
            }
        }).then((res)=>{
            
            props.setFlagForAdd(false)
            props.setEditContact(false)
        }).catch(err=>{
            alert("Something went wrong")
        })
    }
    
  return (
    <div className='register-container'>
            <h3>Add Contact</h3>
            <div className='register-form'>
                <div className='register-indi-body'>
                    <label>Name</label>
                    <input type="text" name="name" value={getContact.name} placeholder="Enter contact name" onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div className='register-indi-body'>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter contact email" value={getContact.email} onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div className='register-indi-body'>
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="Enter contact phone" value={getContact.phone} onChange={(e)=>onChangeHandler(e)}></input>
                </div>
                <div>
                    {
                        props.getEditContact?<button className='btn-add' onClick={onEditHandler}>Edit</button>:<button className='btn-add' onClick={onContactAddHandler}>ADD</button>
                    }
                    
                </div>
            </div>
        </div>
  )
}

export default CreateContact