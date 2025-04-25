import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-bar-content">
        <div className="status-time">{time}</div>
        <div className="dynamic-island"></div>
        <div className="status-icons">
          <img src="/icons/signal.svg" alt="Signal" className="status-icon" />
          <img src="/icons/wifi.svg" alt="WiFi" className="status-icon" />
          <img src="/icons/battery.svg" alt="Battery" className="status-icon" />
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 