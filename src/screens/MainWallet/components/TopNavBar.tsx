import { ChevronLeftIcon, ExternalLinkIcon, ShareIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import "./TopNavBar.css";

export const TopNavBar = (): JSX.Element => {
  const [time, setTime] = useState<string>('');

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
    <>
      <div className="nav-status-bar">
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

      <div className="nav-main">
        <button className="nav-button" onClick={() => window.history.back()}>
          <ChevronLeftIcon />
        </button>
        
        <div className="nav-actions">
          <button className="nav-button">
            <ExternalLinkIcon />
          </button>
          <button className="nav-button">
            <ShareIcon />
          </button>
        </div>
      </div>
    </>
  );
}; 