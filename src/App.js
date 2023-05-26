import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorAlert from './components/ErrorAlert';
export const store = createContext()
const App = () => {
const [gettoken,settoken] = useState(null)
const errorHandler=(er)=>{
alert(er)
}
  return (
    <div className='container'>
      <store.Provider value={[gettoken,settoken]}>
        <ErrorAlert/>
      <BrowserRouter>
        <NavBar />
     
        <Routes>
          <Route path='/register' Component={Register } />
          <Route path='/login' Component={Login} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='' Component={Home} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App