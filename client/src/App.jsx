/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom"
import Login from "./desktopComponents/Login"
import Register from "./desktopComponents/Register"
import Home from "./desktopComponents/Home"
import UserInfo from "./desktopComponents/UserInfo"
import UserFollow from './desktopComponents/UserFollow'
import Search from "./desktopComponents/Search"
import LawyerDetail from "./desktopComponents/LawyerDetail"

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" render={() => (
          loggedIn ? (
            redirect("home")
          ) : (
            redirect("login")
          )
        )} />
        <Route path="login" element={<Login />}></Route>
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
