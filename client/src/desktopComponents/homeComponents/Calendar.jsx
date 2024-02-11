/* eslint-disable no-unused-vars */
import React from 'react';
import { Calendar } from 'primereact/calendar';
import '../../index.css'

const HomeCalendar = () => {
    const [date, setDate] = React.useState(new Date());
  return (
    <div className='w-[60%] bg-light-gray font-poppins'>
        <Calendar value={date} onChange={(e) => setDate(e.value)} inline className='w-full h-full text-[12px] bg-light-gray p-3' />
    </div>
  )
}

export default HomeCalendar