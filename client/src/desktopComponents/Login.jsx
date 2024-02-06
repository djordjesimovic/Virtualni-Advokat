import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogRegHome from './LogRegHome';
import googleImg from '../assets/google.png'

const Login = ({loggedIn}) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    if(loggedIn === true) {
      navigate('/home', { replace: true })
    }
  }, [loggedIn])

  return (
    <div className='w-full h-full flex flex-row font-poppins'>
      <LogRegHome />
      <div className='w-1/2 h-full bg-white flex flex-col justify-center text-left items-center gap-4'>
        <h2 className='font-poppins text-[32px] font-bold w-3/4'>Prijava</h2>
        <input type='text' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='E-mail' />
        <input type='password' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Lozinka' />
        <div className='w-3/4 flex flex-row justify-between'>
          <div className='flex flex-row justify-center items-center gap-1'>
            <input type='checkbox' />
            <span className='font-regular font-poppins text-[12px]'>Zapamti me</span>
          </div>
          <button className='font-regular text-[14px]'>Zaboravljena lozinka?</button>
        </div>
        <button className='w-3/4 bg-black text-white py-3 text-[18px] mb-6'>Prijavi se</button>
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