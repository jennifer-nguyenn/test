import React, { ReactNode } from 'react';
import StatusBar from './StatusBar';

interface IPhoneMockProps {
  children: ReactNode;
}

const IPhoneMock: React.FC<IPhoneMockProps> = ({ children }) => {
  return (
    <div className="iphone-mock">
      {/* Side Buttons */}
      <div className="side-button power" />
      <div className="side-button volume-up" />
      <div className="side-button volume-down" />
      
      {/* Dynamic Island */}
      <div className="dynamic-island" />
      
      {/* Screen Content */}
      <div className="iphone-mock-screen">
        <StatusBar />
        <main className="mock-content">
          {children}
        </main>
        <div className="home-indicator" />
      </div>
    </div>
  );
};

export default IPhoneMock; 