import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

import { navigationItems } from './data/navigation';
import { upcomingAppointments } from './data/appointments';
import { activityData } from './data/activity';
import { calendarData } from './data/calendarData';
import { healthStatusData } from './data/healthData';
import { appointmentcard } from './data/appointmentcard';

import './App.css'; // Optional: global styles

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-layout">
        <Sidebar navigationItems={navigationItems}
        
        />
        <DashboardMainContent
          upcomingAppointments={upcomingAppointments}
          activityData={activityData}
          calendarData={calendarData}
          healthStatusData={healthStatusData}
          appointmentcard={appointmentcard}

        />
      </div>
    </div>
  );
};

export default App;
