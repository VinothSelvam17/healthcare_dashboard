// File: src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';
import '../../data/sidebar'

const Sidebar = ({ navigationItems }) => {
  return (
    
    <aside className="sidebar">
      <button id="sidebarToggle" class="md:hidden p-2 m-2 bg-blue-500 text-white rounded">
  ☰
</button>
      <div className="sidebar-inner">
        
        <h3 className="sidebar-title">General</h3>
        
        <nav>
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`sidebar-link ${item.active ? 'active' : ''}`}
              >
                <IconComponent size={16} className="sidebar-icon" />
                {item.label}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;