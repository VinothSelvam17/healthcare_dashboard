import { Activity, Eye, Heart, Brain } from 'lucide-react';

export const upcomingAppointments = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: Activity, color: '#F0E6FF' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: Eye, color: '#FFE6E6' }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: Heart, color: '#FFE6E6' },
      { title: 'Neurologist', time: '16:00 PM', icon: Brain, color: '#F0E6FF' }
    ]
  }
];
