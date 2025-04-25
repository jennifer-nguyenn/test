import React from 'react';
import './MainWallet.css';
import { WalletEventHeaderSection } from './sections/WalletEventHeaderSection/WalletEventHeaderSection';
import { MainContentSection } from './sections/MainContentSection/MainContentSection';

export const MainWallet = () => {
  return (
    <div className="iphone-mock">
      <div className="status-bar">
        <span>9:41</span>
      </div>
      <div className="mock-content">
        <div className="wallet-container">
          <div className="wallet-background">
            <div className="wallet-background-image" />
          </div>
          <WalletEventHeaderSection />
          <MainContentSection />
        </div>
      </div>
    </div>
  );
};
