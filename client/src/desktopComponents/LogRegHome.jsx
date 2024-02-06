import React from 'react'
import loginImg from '../assets/loginImg.png'

const LogRegHome = () => {
  return (
    <div className='w-1/2 h-full bg-light-gray flex flex-col justify-center items-center'>
      <img src={loginImg} alt='login img' className='w-3/5' />
      <h1 className='font-poppins font-bold text-[42px]'>Virtualni Advokat</h1>
      <span className='w-1/2 font-medium text-[14px] text-center'>Jedini pravni konsultant koji će Vam biti potreban</span>
    </div>
  )
}

export default LogRegHome