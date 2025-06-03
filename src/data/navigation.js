import { Grid3X3, Clock, Calendar, BarChart3, Activity, MessageCircle, HelpCircle, Settings } from 'lucide-react';

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Grid3X3, active: true },
  { id: 'history', label: 'History', icon: Clock },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'statistics', label: 'Statistics', icon: BarChart3 },
  { id: 'tests', label: 'Tests', icon: Activity },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
  { id: 'support', label: 'Support', icon: HelpCircle },
  { id: 'setting', label: 'Setting', icon: Settings }
];
