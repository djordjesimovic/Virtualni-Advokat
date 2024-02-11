/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Timer = ({lawyerState, setLawyerState}) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minuta u sekundama

  useEffect(() => {
    // Pokretanje tajmera ako ima preostalog vremena
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      // Čišćenje tajmera prilikom unmount-a komponente
      return () => clearInterval(timerId);
    }
    else {
        setLawyerState('onPause');
    }
  }, [timeLeft]);

  // Pomoćna funkcija za formatiranje vremena u format HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* <h1>Tajmer</h1>
      <p>Preostalo vreme: {formatTime(timeLeft)}</p> */}
      <span className='font-poppins font-bold text-[14px]'>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default Timer;
