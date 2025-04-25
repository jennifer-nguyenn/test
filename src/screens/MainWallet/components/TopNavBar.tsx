import { ChevronLeftIcon, ExternalLinkIcon, ShareIcon } from "lucide-react";
import React from "react";
import "./TopNavBar.css";

export const TopNavBar = (): JSX.Element => {
  return (
    <>
      <div className="nav-status-bar">
        <div className="nav-time">9:41</div>
        <div className="nav-icons">
          <img src="/icons/signal.svg" alt="Signal" />
          <img src="/icons/wifi.svg" alt="WiFi" />
          <img src="/icons/battery.svg" alt="Battery" />
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