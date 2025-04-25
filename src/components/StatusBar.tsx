import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span className="status-bar-time">9:41</span>
      </div>
      
      <div className="status-bar-right">
        <div className="status-bar-signal">
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
        </div>
        <div className="status-bar-wifi">
          <div className="wifi-arc"></div>
          <div className="wifi-arc"></div>
          <div className="wifi-arc"></div>
        </div>
        <div className="status-bar-battery">
          <div className="battery-level"></div>
          <div className="battery-cap"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 