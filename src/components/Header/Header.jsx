import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-highlight">Health</span>care.
      </div>
      <div className="search-bar">
        <Search size={16} color="#6B7280" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-section">
        <Bell size={20} color="#6B7280" />
        <div className="user-info">
          <div className="avatar">JD</div>
          <span className="user-name">Dr. James</span>
        </div>
        <div className="add-btn">
          <Plus size={16} color="white" />
        </div>
      </div>
    </header>
  );
};

export default Header;