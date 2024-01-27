import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Header from './component/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user)
    })
  },[])

  // let location = useLocation();

  return (
    
    <BrowserRouter>
      <div className='app'>
        <AuthProvider value={{currentUser}}>
         <Routes> 
          <Route index element = {<Home/>} />
          <Route path = "/" element={<Home/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/checkout" element={<Checkout/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
       
      </div>
    </BrowserRouter>   
  )
}

export default App;

