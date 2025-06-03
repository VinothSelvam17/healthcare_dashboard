import React from 'react';
import './ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const chartData = [
  [15, 20, 25],
  [20, 30, 30],
  [35, 15, 35],
  [45, 20, 10],
  [25, 30, 35],
  [35, 30, 40],
  [30, 35, 35],
];
const barColors = ['#00d4ff', '#bbbcc4', '#3f3db3'];

const ActivityFeed = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h4>Activity</h4>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {chartData.map((bars, index) => (
          <div className="day-column" key={index}>
            {bars.map((height, i) => (
              <div
                key={i}
                className="bar"
                style={{
                  height: `${height}px`,
                  backgroundColor: barColors[i % barColors.length],
                }}
              ></div>
            ))}
            <span className="day-label">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
