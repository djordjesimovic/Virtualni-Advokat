/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../index.css'
import user from '../../assets/user.png'

const Header = ({loggedUserInfo}) => {
  return (
    <div className='w-full h-[15%] font-poppins py-1 px-5 flex justify-between items-center'>
      <div className='flex flex-col justify-center items-start w-2/3 h-full'>
        <h1 className='font-bold text-2xl'>Zdravo {loggedUserInfo.firstName || 'user'}</h1>
        <p className='font-semibold text-[14px]'>Dobrodošli na platformu Virtualni Advokat</p>
      </div>
      <div className="flex justify-end items-center w-1/3 h-full">
        {/* <div className={`w-[70px] h-[70px] p-4 rounded-full bg-[url(${user})] bg-cover bg-center bg-no-repeat`}></div> */}
        <img className='w-[60px] h-[60px] rounded-full' src={loggedUserInfo.profilePicture ? loggedUserInfo.profilePicture.url : user} />
      </div>
    </div>
  )
}

export default Header