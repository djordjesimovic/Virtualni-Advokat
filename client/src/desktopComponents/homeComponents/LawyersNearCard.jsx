/* eslint-disable no-unused-vars */
import React from 'react';
import user from '../../assets/user.png'

const LawyersNearCard = () => {
  return (
    <div className='flex flex-col justify-evenly items-center h-[90%] bg-white p-2 font-poppins'>
        <div className='p-3 bg-light-gray border rounded-full'>
          <img src={user} alt='user'/>
        </div>
        <h3 className='font-bold text-[14px]'>Lorem Ipsum</h3>
        <span className='font-regular text-[10px]'>Advokatska kancelarija</span>
        <button className='px-4 py-1 bg-black text-white text-[12px]'>Prati</button>
    </div>
  )
}

export default LawyersNearCard