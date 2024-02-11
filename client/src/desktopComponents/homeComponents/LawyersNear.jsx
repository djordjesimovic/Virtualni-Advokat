/* eslint-disable no-unused-vars */
import React from 'react';
import LawyersNearCard from './LawyersNearCard';

const LawyersNear = () => {
  return (
    <div className='w-full h-[50%] bg-light-gray flex justify-center items-center flex-col font-poppins'>
      <h2 className='text-[18px] font-bold h-[20%] p-2'>Advokatske kancelarije blizu Vas</h2>
      <div className='h-[80%] flex flex-row justify-between items-center gap-3'>
        <LawyersNearCard />
        <LawyersNearCard />
        <LawyersNearCard />
      </div>
    </div>
  )
}

export default LawyersNear