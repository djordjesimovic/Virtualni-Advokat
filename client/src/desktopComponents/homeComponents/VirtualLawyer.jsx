/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import lawyer from '../../assets/lawyer.png'
import send from '../../assets/send.png'
import Timer from './Timer';

const VirtualLawyer = ({loggedUserInfo, setLoggedUserInfo}) => {
  console.log(loggedUserInfo)

  const [lawyerState, setLawyerState] = useState('onPause');
  const [errorMsg, setErrorMsg] = useState(false);

  const startConsultation = () => {
    if(loggedUserInfo.money >= 1200) {
      const newMoney = loggedUserInfo.money - 1200
      fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Zr0eb94S/user/${loggedUserInfo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authToken')
        },
        body: JSON.stringify({'newMoney' : newMoney})
      })
      .then(res => res.json())
      .then(data => {
        if(data.status === true) {
          setLawyerState('onGoing');
          setLoggedUserInfo(data.UpdatedUser);
        }
      })
    }
    else {
      setErrorMsg(true)
    }
  }

  const endConsultations = () => {
    setLawyerState('onPause')
  }

  return (
    <div className={`w-1/2 h-full flex flex-col justify-center items-center bg-light-gray gap-2 font-poppins`}>
        {
          errorMsg === false ? 
          lawyerState === 'onPause' ? 
          <div className='w-full h-full p-2 flex flex-col justify-center items-center gap-2'>
            <img src={lawyer} alt='lawyer' className='w-[250px] h-[250px]' />
            <span className='font-bold text-[18px] w-[70%] text-center mb-2'>
              Započnite konsultcije
              sa Virtualnim advokatom
              i rešite sve pravne nedoumice
              bez da na to potrošite veliki novac
            </span>
            <button onClick={startConsultation} className='bg-black text-white text-[16px] px-6 py-2 font-bold'>Započni konsultacije</button>
          </div>
          : lawyerState === 'onGoing' ?
          <div className='w-full h-full p-2 pt-4 flex flex-col justify-between items-center'>
            <div className='w-full flex flex-col justify-end items-end'>
                <Timer lawyerState={lawyerState} setLawyerState={setLawyerState} />
                <button onClick={endConsultations} className='bg-red-500 text-white font-bold text-[12px] px-3 py-1'>Završi</button>
            </div>
            <span className='font-bold text-[18px] w-[70%] text-center mb-2'>
              Započnite konsultcije
              sa Virtualnim advokatom
              i rešite sve pravne nedoumice
              bez da na to potrošite veliki novac
            </span>
            <div className='w-full flex flex-row justify-between items-center relative bg-white p-2'>
              <input className='focus:outline-none w-full text-[14px] p-2 bg-transparent' type='text' placeholder='Unesite svoje pitanje ovde' />
              <button>
                <img className='w-[24px] h-[24px]' src={send} alt='send btn' />
              </button>
            </div>
          </div>
          : null :
          <span className='font-bold text-[12px] text-red-500 w-2/3'>Nemate dovoljno novca na svom računu. Uplatite novac, pa pokušajte ponovo.</span>
        }

    </div>
  )
}

export default VirtualLawyer