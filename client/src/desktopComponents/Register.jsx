/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import LogRegHome from './LogRegHome';
import googleImg from '../assets/google.png'
import { useNavigate } from 'react-router-dom';

const Register = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword
}) => {

  const navigate = useNavigate();

  const handleRegister = () => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:Zr0eb94S/auth/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
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
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      }
    })
  }

  return (
    <div className='w-full h-full flex flex-row font-poppins'>
      <LogRegHome />
      <div className='w-1/2 h-full bg-white flex flex-col justify-center text-left items-center gap-3'>
        <h2 className='font-poppins text-[32px] font-bold w-3/4'>Registracija</h2>
        <input type='text' className='focus:outline-none border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Ime' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type='text' className='focus:outline-none border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Prezime' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type='email' className='focus:outline-none border-2 w-3/4 p-2 border-black text-[14px]' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' className='focus:outline-none border-2 w-3/4 p-2 border-black text-[14px]' placeholder='Lozinka' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='w-3/4 bg-black text-white py-3 text-[18px] mb-2' onClick={handleRegister}>Registruj se</button>
        <span className='font-regular text-[14px] mb-2'>ili</span>
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