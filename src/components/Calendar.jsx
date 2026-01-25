import React, { useState } from 'react';
import Window from './Window';
import './calendar.scss';
const monthImages = {
  0: "/calendar-art/1.jpeg", 1: "/calendar-art/2.jpeg", 2: "/calendar-art/3.jpeg",
  3: "/calendar-art/4.jpeg", 4: "/calendar-art/5.jpeg", 5: "/calendar-art/6.jpeg",
  6: "/calendar-art/7.jpeg", 7: "/calendar-art/8.jpeg", 8: "/calendar-art/9.jpeg",
  9: "/calendar-art/10.jpeg", 10: "/calendar-art/11.jpeg", 11: "/calendar-art/12.jpeg",
};

const CalendarApp = ({ windowsName, setWindowsState, isMinimized, setMinimizedWindows }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [ "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
 const Xvari = window.innerWidth - 400;
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
   
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
      days.push(<div key={d} className={`day ${isToday ? 'today' : ''}`}>{d}</div>);
    }
    return days;
  };

  return (
 <Window 
      windowsName={windowsName} 
      setWindowsState={setWindowsState}
      isMinimized={isMinimized}
      setMinimizedWindows={setMinimizedWindows}
      initialWidth="400px"
      initialHeight="650px"
      allowResize={false}
      allowMaximize={false}
      initialX={Xvari}
      initialY={90}
    >
      <div className="calendar-card">
        {/* UPPER IMAGE SECTION */}
        <div className="art-header">
           <img 
             src={monthImages[currentDate.getMonth()]} 
             alt="Month Art" 
             className="month-img"
            
             key={currentDate.getMonth()} 
           />
        </div>

     
        <div 
          className="grid-body" 
       >

            <div className="lower-controls">
              <div className="nav-btn" onClick={() => changeMonth(-1)}>‹</div>
              <div className="title-group">
                <span className="year-label">{currentDate.getFullYear()}</span>
                <h2 className="month-label">{months[currentDate.getMonth()]}</h2>
              </div>
              <div className="nav-btn" onClick={() => changeMonth(1)}>›</div>
            </div>


            <div className="weekdays-row">
                {daysOfWeek.map(day => <div key={day} className="weekday">{day}</div>)}
            </div>

            <div className="dates-grid">
                {getDaysInMonth(currentDate)}
            </div>
        </div>
      </div>
    </Window>
  );
};

export default CalendarApp;