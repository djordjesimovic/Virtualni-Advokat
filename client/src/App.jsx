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

const App = () => {

  //states for register and login endpoints
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BrowserRouter>
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
        <Route path="home" element={<Home />}></Route>
        <Route path="userInfo" element={<UserInfo />}></Route>
        <Route path="userFollow" element={<UserFollow />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="lawyerInfo" element={<LawyerDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
