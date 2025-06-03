import React from 'react';
import { Heart} from 'lucide-react';
import './AnatomySection.css';

const AnatomySection = ({ healthStatusData = [] }) => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-illustration">
        <div className="body-placeholder">
          <div className="body-head" />
          <div className="heart-indicator">
            <Heart size={20} />
            Healthy Heart
          </div>
          <div className="leg-indicator">Healthy Leg</div>
        </div>
      </div>

      <div className="health-cards">
        {healthStatusData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="health-card">
              <div className="health-info">
                    <div className='health_groups'>
                      <span className="emoji">{item.emoji}</span>
                      <h4>{item.name}</h4>
                    </div>
                    <p>{item.date}</p>
                  
              </div>
              <div className='status-container'>

              <div
                className="status-indicator"
                style={{ backgroundColor: item.status === 'good' ? '#10B981' : '#F59E0B' }}
                />
              <div className='graybox'></div>
                </div>

            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default AnatomySection;
