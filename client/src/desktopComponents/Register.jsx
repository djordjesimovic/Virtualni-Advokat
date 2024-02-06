/* eslint-disable no-unused-vars */
import React from 'react'
import LogRegHome from './LogRegHome';
import googleImg from '../assets/google.png'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex flex-row font-poppins'>
      <LogRegHome />
      <div className='w-1/2 h-full bg-white flex flex-col justify-center text-left items-center gap-4'>
        <h2 className='font-poppins text-[32px] font-bold w-3/4'>Registracija</h2>
        <input type='text' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Ime' />
        <input type='text' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Prezime' />
        <input type='email' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='E-mail' />
        <input type='password' className='border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Lozinka' />
        <button className='w-3/4 bg-black text-white py-3 text-[18px] mb-3'>Registruj se</button>
        <span className='font-regular text-[14px] mb-3'>ili</span>
        <span className='font-regular text-[14px]'>Prijavite se pomoću Google-a</span>
        <button className='mb-2'>
          <img src={googleImg} alt='Google image' />
        </button>
        <div className='flex flex-row justify-center items-center gap-1'>
          <span className='font-regular text-[12px] text-black'>Već imate nalog?</span>
          <button className='font-regular text-[14px] text-black font-bold' onClick={() => navigate('/login', { replace: true })}>Prijava</button>
        </div>
      </div>
    </div>
  )
}

export default Register