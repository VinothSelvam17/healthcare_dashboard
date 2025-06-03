import React from 'react';
import { ChevronLeft, ChevronRight, Smile, Activity } from 'lucide-react';
import { calendarData } from '../../data/calendarData';
import './CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        
        <h2>October 2021</h2>
        <div className='arrow-change'>
          <button>&larr;</button>
        <button >&rarr;</button>
        </div>
       
      </div>

      <div className="calendar-grid">
        {calendarData.map((col, i) => (
          <div key={i} className="calendar-column">
            <div className="day">{col.day}</div>
            <div className="date">{col.date}</div>
            <div className="times">
              {col.times.map((time, j) => (
                <div
                  key={j}
                  className={`time-slot ${col.selected === time ? 'selected' : ''}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CalendarView;
