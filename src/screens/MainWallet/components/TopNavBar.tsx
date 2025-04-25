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
            {/* Signal Icon */}
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="status-icon">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 0H17.5C17.7761 0 18 0.223858 18 0.5V11.5C18 11.7761 17.7761 12 17.5 12H16C15.7239 12 15.5 11.7761 15.5 11.5V0.5C15.5 0.223858 15.7239 0 16 0ZM11 2.5H12.5C12.7761 2.5 13 2.72386 13 3V11.5C13 11.7761 12.7761 12 12.5 12H11C10.7239 12 10.5 11.7761 10.5 11.5V3C10.5 2.72386 10.7239 2.5 11 2.5ZM7.5 5H6C5.72386 5 5.5 5.22386 5.5 5.5V11.5C5.5 11.7761 5.72386 12 6 12H7.5C7.77614 12 8 11.7761 8 11.5V5.5C8 5.22386 7.77614 5 7.5 5ZM1 7.5H2.5C2.77614 7.5 3 7.72386 3 8V11.5C3 11.7761 2.77614 12 2.5 12H1C0.723858 12 0.5 11.7761 0.5 11.5V8C0.5 7.72386 0.723858 7.5 1 7.5Z" fill="white"/>
            </svg>

            {/* WiFi Icon */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="status-icon">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.0001 2.19922C9.89131 2.19922 11.6824 2.93846 13.0417 4.29774C13.1471 4.40317 13.1471 4.5734 13.0417 4.67883L12.2526 5.46789C12.1999 5.52061 12.1145 5.52061 12.0618 5.46789C10.9387 4.34477 9.51641 3.69922 8.0001 3.69922C6.48379 3.69922 5.0615 4.34477 3.93839 5.46789C3.88567 5.52061 3.80028 5.52061 3.74756 5.46789L2.95849 4.67883C2.85307 4.5734 2.85307 4.40317 2.95849 4.29774C4.31778 2.93846 6.10889 2.19922 8.0001 2.19922ZM8.0001 6.19922C9.06366 6.19922 10.0744 6.60648 10.8454 7.37742C10.9508 7.48285 10.9508 7.65308 10.8454 7.75851L10.0562 8.54757C10.0035 8.60029 9.91812 8.60029 9.8654 8.54757C9.32825 8.01042 8.63464 7.69922 8.0001 7.69922C7.36556 7.69922 6.67195 8.01042 6.1348 8.54757C6.08208 8.60029 5.99669 8.60029 5.94397 8.54757L5.15491 7.75851C5.04948 7.65308 5.04948 7.48285 5.15491 7.37742C5.92585 6.60648 6.93654 6.19922 8.0001 6.19922ZM8.0001 10.1992C8.27624 10.1992 8.5001 10.4231 8.5001 10.6992C8.5001 10.9754 8.27624 11.1992 8.0001 11.1992C7.72396 11.1992 7.5001 10.9754 7.5001 10.6992C7.5001 10.4231 7.72396 10.1992 8.0001 10.1992Z" fill="white"/>
            </svg>

            {/* Battery Icon */}
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="status-icon">
              <rect opacity="0.35" x="0.5" y="0.833333" width="24" height="11.3333" rx="2.66667" stroke="white"/>
              <path opacity="0.4" d="M25.5 4.5V8.5C26.3284 8.14819 26.8333 7.32312 26.8333 6.5C26.8333 5.67688 26.3284 4.85181 25.5 4.5" fill="white"/>
              <rect x="2" y="2.33333" width="21" height="8.33333" rx="1.33333" fill="white"/>
            </svg>
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