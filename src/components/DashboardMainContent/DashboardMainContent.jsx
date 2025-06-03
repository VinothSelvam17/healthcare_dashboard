import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { upcomingAppointments } from '../../data/appointments';
import { activityData } from '../../data/activity';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

import './DashboardMainContent.css';

const DashboardMainContent = ({ healthStatusData, calendarData, upcomingAppointments, activityData, appointmentcard }) => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-subtitle">This Week</div>
      </div>

      <div className="dashboard-grid">
        <div>
          <AnatomySection healthStatusData={healthStatusData} />
          <ActivityFeed activityData={activityData} />
          
        </div>
        <div className='leftgrid' >
          <CalendarView calendarData={calendarData} />
           <AppointmentCard appointmentcard={appointmentcard}  />

          <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
        </div>
      </div>
    </main>
  );
};


export default DashboardMainContent;
