import React from "react";
import { ChevronRightIcon, RefreshCwIcon, SendIcon, StoreIcon, UploadIcon } from "lucide-react";
import './MainContentSection.css';

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="main-content">
      {/* Orders Section */}
      <section className="section">
        <h2 className="section-title">Your Orders</h2>
        <div className="scroll-area">
          <div className="scroll-content">
            <div className="order-card">
              <div className="order-card-content">
                <h3 className="order-card-title">Order #1234</h3>
                <p className="order-card-subtitle">2 tickets • $150 each</p>
              </div>
              <div className="order-card-footer">
                <span className="text-sm">View Details</span>
                <ChevronRightIcon size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Your Items</h2>
          <div className="section-counter">
            <span>11</span>
            <ChevronRightIcon className="icon" />
          </div>
        </div>
        <div className="scroll-area">
          <div className="scroll-content">
            <div className="item-card">
              <div className="item-card-image">
                <img src="/images/stadium-1.jpg" alt="Stadium view" className="image" />
              </div>
              <div className="item-card-content">
                <h3 className="item-card-title">VIP Pass</h3>
                <p className="item-card-subtitle">Section A, Row 1</p>
              </div>
            </div>
            <div className="item-card">
              <div className="item-card-image">
                <img src="/images/stadium-2.jpg" alt="Stadium view" className="image" />
              </div>
              <div className="item-card-content">
                <h3 className="item-card-title">Sec 29, Row 9, Seat 8</h3>
                <p className="item-card-subtitle">John Smith</p>
                <p className="item-card-subtitle">Sec 29 Row 9, Seat 7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="section">
        <div className="action-card">
          <RefreshCwIcon className="action-card-icon" />
          <div className="action-card-content">
            <h3 className="action-card-title">Sell</h3>
            <p className="action-card-description">Sell tickets at your own price</p>
          </div>
          <ChevronRightIcon size={20} />
        </div>

        <div className="action-card">
          <SendIcon className="action-card-icon" />
          <div className="action-card-content">
            <h3 className="action-card-title">Transfers</h3>
            <p className="action-card-description">Send tickets & items to anyone</p>
          </div>
          <ChevronRightIcon size={20} />
        </div>

        <div className="action-card">
          <UploadIcon className="action-card-icon" />
          <div className="action-card-content">
            <h3 className="action-card-title">Upgrade</h3>
            <p className="action-card-description">Available upgrade offers</p>
          </div>
          <ChevronRightIcon size={20} />
        </div>

        <h2 className="section-title resale-title">Resale</h2>
        <div className="action-card">
          <StoreIcon className="action-card-icon" />
          <div className="action-card-content">
            <h3 className="action-card-title">Your listings</h3>
            <p className="action-card-description">Manage your listings</p>
          </div>
          <ChevronRightIcon size={20} />
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section">
        <div className="rewards-header">
          <h2 className="rewards-title">Rewards</h2>
          <p className="rewards-subtitle">Earn points with every purchase</p>
        </div>

        <div className="rewards-card unlocked">
          <div className="rewards-card-header">
            <span className="rewards-badge unlocked">Unlocked!</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rewards-star">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h3 className="rewards-card-title">25% discount on any ticket</h3>
          <div className="rewards-points">500 Points</div>
          <div className="rewards-progress">
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
            <span className="progress-text">500/500pts</span>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="nav-tabs">
        <button className="nav-tab">Points</button>
        <button className="nav-tab">Points per ticket</button>
        <button className="nav-tab">Leaderboard</button>
        <button className="nav-tab">FAQ's</button>
        <button className="nav-tab primary">
          <div className="share-button-content">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="share-icon">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656L13.071 5.273" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Share link with friends
          </div>
        </button>
      </nav>
    </div>
  );
};