/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import home from '../assets/home.png';
import user from '../assets/user.png';
import lawyers from '../assets/lawyers.png';
import search from '../assets/search.png';
import logout from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';


const Navbar = ({category, setCategory}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true })
  }
  
  return (
  <div className={`w-[10%] h-full ${localStorage.getItem('userLoggedIn') === 'true' ? 'flex' : 'none'} justify-between items-center flex-col bg-light-gray`}>
        <div className='w-full h-2/3 flex justify-evenly items-center flex-col'>
            <button onClick={() => navigate('/home', { replace: true })}><img src={home} alt='home-img' className='w-[24px] h-[24px]' /></button>
            <button onClick={() => navigate('/userInfo', { replace: true })}><img src={user} alt='user-img' className='w-[24px] h-[24px]' /></button>
            <button onClick={() => navigate('/userFollow', { replace: true })}><img src={lawyers} alt='lawyers-img' className='w-[24px] h-[24px]' /></button>
            <button onClick={() => navigate('/search', { replace: true })}><img src={search} alt='search-img' className='w-[24px] h-[24px]' /></button>
        </div>
        <div className='w-full h-1/3 flex justify-end items-center mb-3 flex-col'>
            <button onClick={handleLogout}><img src={logout} alt='logout-img' className='w-[32px] h-[32px]' /></button>
        </div>
    </div>
  )
}

export default Navbar