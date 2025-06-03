import React from 'react';

// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';

import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

import { navigationItems } from './data/navigation';
import { healthStatusData } from './data/healthData';
import { calendarData } from './data/calendarData';
import { upcomingAppointments } from './data/appointments';
import { activityData } from './data/activity';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      
      <div className="main-layout">
        <Sidebar navigationItems={navigationItems} />
       <DashboardMainContent
  healthStatusData={healthStatusData}
  calendarData={calendarData}
  upcomingAppointments={upcomingAppointments}
  activityData={activityData}
/>


      </div>
    </div>
  );
};

export default App;
