/* eslint-disable no-unused-vars */
import React from 'react'
import { useClock } from 'react-use-clock'

const Clock = () => {
  const clock = useClock()
  return (
    <div className='h-1/2 w-[40%] bg-light-gray font-poppins flex flex-row justify-evenly items-center'>
      <div className='text-[42px] font-poppins'>
        {clock.hours.toString().padStart(2, '0')}:
      </div>
      <div className='text-[42px] font-poppins'>
      {clock.minutes.toString().padStart(2, '0')}:
      </div>
      <div className='text-[42px] font-poppins'>
        {clock.seconds.toString().padStart(2, '0')}
      </div>
    </div>
  )
}

export default Clock