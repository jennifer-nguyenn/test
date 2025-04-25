import React from 'react';
import './MainWallet.css';
import { WalletEventHeaderSection } from './sections/WalletEventHeaderSection/WalletEventHeaderSection';
import { MainContentSection } from './sections/MainContentSection/MainContentSection';
import IPhoneMock from '../../components/IPhoneMock';

export const MainWallet = () => {
  return (
    <IPhoneMock>
      <div className="wallet-container">
        <div className="wallet-background">
          <div className="wallet-background-image" />
          <div className="wallet-background-overlay" />
        </div>
        <div className="wallet-content">
          <WalletEventHeaderSection />
          <MainContentSection />
        </div>
      </div>
    </IPhoneMock>
  );
};
