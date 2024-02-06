/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('userLoggedIn') === 'true') {
      console.log('usao')
    }
    else {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
    <div>
      <div>Home</div>
    </div>
  )
}

export default Home