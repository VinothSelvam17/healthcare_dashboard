import React from 'react';
import './UpcomingSchedule.css';

const UpcomingSchedule = ({ upcomingAppointments = [] }) => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((dayData, index) => (
        <div key={index} className="schedule-day">
          <h4>On {dayData.day}</h4>
          <div className="appointment-grid">
            {dayData.appointments.map((appointment, idx) => {
              const IconComponent = appointment.icon;
              return (
                <div
                  key={idx}
                  className="appointment-card"
                  style={{ backgroundColor: appointment.color }}
                >
                  <div>
                    <div className="appointment-title">{appointment.title}</div>
                    <div className="appointment-time">{appointment.time}</div>
                  </div>
                  <IconComponent size={20} color="#6B7280" />

                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;