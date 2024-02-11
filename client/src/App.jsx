/* eslint-disable no-unused-vars */
import './index.css'
import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./desktopComponents/Login"
import Register from "./desktopComponents/Register"
import Home from "./desktopComponents/Home"
import UserInfo from "./desktopComponents/UserInfo"
import UserFollow from './desktopComponents/UserFollow'
import Search from "./desktopComponents/Search"
import LawyerDetail from "./desktopComponents/LawyerDetail"
import Navbar from './desktopComponents/Navbar'
import { useNavigate } from 'react-router-dom';

const App = () => {

  //states for register and login endpoints
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //State for logged user info
  const[loggedUserInfo, setLoggedUserInfo] = useState([]);

  //State for nav menu category
  const [category, setCategory] = useState('home');


  return (
    <div className='w-full h-full flex flex-row justify-start items-center'>
      {/* {
        localStorage.getItem('userLoggedIn') === 'true' ? <Navbar /> : null
      } */}
      <BrowserRouter>
      {
        localStorage.getItem('userLoggedIn') === 'true' ? <Navbar category={category} setCategory={setCategory} /> : null
      }
      <Routes>
        <Route path="/" element={<Navigate to={`${localStorage.getItem('userLoggedIn') === 'true' ? '/home' : '/login'}`} />} />
        <Route path="login" 
          element={
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }>
        </Route>
        <Route path="register" 
          element={
            <Register
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
         }>
        </Route>
        <Route path="home" element={<Home loggedUserInfo={loggedUserInfo} setLoggedUserInfo={setLoggedUserInfo} />}></Route>
        <Route path="userInfo" element={<UserInfo />}></Route>
        <Route path="userFollow" element={<UserFollow />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="lawyerInfo" element={<LawyerDetail />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
