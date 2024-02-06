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

  const [loggedIn, setLoggedIn] = useState(false)
  // const [logiRegister, setLoginRegister] = useState('login');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`${loggedIn ? '/home' : '/login'}`} />} />
        <Route path="login" element={<Login loggedIn={loggedIn} />}></Route>
        <Route path="register" element={<Register />}></Route>
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
