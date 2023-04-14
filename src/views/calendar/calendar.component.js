import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

 function CalendarDate() {
  const [value, onChange] = useState(new Date());
  

  
  return (
    <div className='w-100 m-auto'>
      <Calendar onChange={onChange} value={value} className="w-100 py-3"/>
    </div>
  );
}
export default CalendarDate;