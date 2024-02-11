/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './homeComponents/Header';
import HomeMain from './homeComponents/HomeMain';

const Home = ({loggedUserInfo, setLoggedUserInfo}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('userLoggedIn') === 'true') {
      fetch('https://x8ki-letl-twmt.n7.xano.io/api:Zr0eb94S/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authToken')
        }
      })
      .then(res => res.json())
      .then(data => {
        setLoggedUserInfo(data.user)
      })
    }
    else {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
    <div className='w-[90%] h-full flex flex-col justify-center items-center'>
        <Header loggedUserInfo={loggedUserInfo} />
        <HomeMain loggedUserInfo={loggedUserInfo} setLoggedUserInfo={setLoggedUserInfo} />
    </div>
  )
}

export default Home