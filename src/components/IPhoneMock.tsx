import React, { ReactNode } from 'react';
import StatusBar from './StatusBar';

interface IPhoneMockProps {
  children: ReactNode;
}

const IPhoneMock: React.FC<IPhoneMockProps> = ({ children }) => {
  return (
    <div className="iphone-mock">
      {/* Dynamic Island */}
      <div className="dynamic-island" />
      
      {/* Side Buttons */}
      <div className="side-button power" />
      <div className="side-button volume-up" />
      <div className="side-button volume-down" />
      
      {/* Screen Content */}
      <div className="iphone-mock-screen">
        <StatusBar />
        <div className="mock-content">
          {children}
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="home-indicator" />
    </div>
  );
};

export default IPhoneMock; 