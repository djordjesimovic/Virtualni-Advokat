/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.css'
import HomeCalendar from './Calendar';
import LawyersNear from './LawyersNear';
import VirtualLawyer from './VirtualLawyer';
import Clock from './Clock';

const HomeMain = ({loggedUserInfo, setLoggedUserInfo}) => {
  return (
    <div className='w-full h-[85%] pt-1 pb-2 px-5 flex flex-row gap-4'>
        <div className='flex flex-col w-1/2 h-full justify-start items-start gap-3'>
          <div className='w-full max-w-[550px] max-h-[350px] h-[50%] flex flex-row gap-3'>
            <HomeCalendar className='calendar' />
            <Clock />
          </div>
          <LawyersNear />
        </div>
        <VirtualLawyer loggedUserInfo={loggedUserInfo} setLoggedUserInfo={setLoggedUserInfo} />
    </div>
  )
}

export default HomeMain