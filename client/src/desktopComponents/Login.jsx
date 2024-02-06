/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogRegHome from './LogRegHome';
import googleImg from '../assets/google.png'

const Login = ({email, setEmail, password, setPassword}) => {

  const navigate = useNavigate()

  const handleLogin = () => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:Zr0eb94S/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === true) {
        localStorage.setItem('authToken', data.authToken);
        localStorage.setItem('userLoggedIn', 'true');
        navigate('/home', { replace: true });
        setEmail('');
        setPassword('')
      }
    })
  }


  return (
    <div className='w-full h-full flex flex-row font-poppins'>
      <LogRegHome />
      <div className='w-1/2 h-full bg-white flex flex-col justify-center text-left items-center gap-4'>
        <h2 className='font-poppins text-[32px] font-bold w-3/4'>Prijava</h2>
        <input type='text' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Lozinka' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='w-3/4 flex flex-row justify-between'>
          <div className='flex flex-row justify-center items-center gap-1'>
            <input type='checkbox' />
            <span className='font-regular font-poppins text-[12px]'>Zapamti me</span>
          </div>
          <button className='font-regular text-[14px]'>Zaboravljena lozinka?</button>
        </div>
        <button className='w-3/4 bg-black text-white py-3 text-[18px] mb-6' onClick={handleLogin}>Prijavi se</button>
        <span className='font-regular text-[14px] mb-5'>ili</span>
        <span className='font-regular text-[14px]'>Prijavite se pomoću Google-a</span>
        <button className='mb-4'>
          <img src={googleImg} alt='Google image' />
        </button>
        <div className='flex flex-row justify-center items-center gap-1'>
          <span className='font-regular text-[12px] text-black'>Niste registrovani?</span>
          <button className='font-regular text-[14px] text-black font-bold' onClick={() => navigate('/register', { replace: true })}>Registracija</button>
        </div>
      </div>
    </div>
  )
}

export default Login