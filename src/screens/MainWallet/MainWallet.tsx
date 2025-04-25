import React from "react";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { WalletEventHeaderSection } from "./sections/WalletEventHeaderSection";
import { TopNavBar } from "./components/TopNavBar";
import "./MainWallet.css";

export const MainWallet = (): JSX.Element => {
  return (
    <div className="wallet-container">
      <div className="w-full">
        {/* Background image with gradient overlay */}
        <div className="wallet-background">
          <div className="wallet-background-image">
            <div className="wallet-background-overlay" />
          </div>
        </div>

        {/* Main content sections */}
        <WalletEventHeaderSection />
        <MainContentSection />
      </div>

      {/* Navigation */}
      <TopNavBar />
    </div>
  );
};
