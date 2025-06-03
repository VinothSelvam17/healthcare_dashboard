import React from 'react';
import './AppointmentCard.css';
import { appointmentcard } from '../../data/appointmentcard';

const AppointmentCard = () => {
  return (
    <div className="appointment-wrappers">
      {appointmentcard.map((appt, index) => (
        <div
          key={index}
          className="appointment-cards"
          style={{
            backgroundColor: appt.bgColor,
            color: appt.textColor,
          }}
        >
          <div className="card-header">
            <h3>{appt.title}</h3>
            <span className="icon">{appt.icon}</span>
          </div>
          <p className="time">{appt.time}</p>
          <p className="doctor">{appt.doctor}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;
