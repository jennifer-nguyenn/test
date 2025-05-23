import React from "react";
import { ChevronRightIcon, RefreshCwIcon, SendIcon, StoreIcon, UploadIcon } from "lucide-react";
import './MainContentSection.css';

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="main-content">
      {/* Orders Section */}
      <section className="section orders-section">
        <h2 className="section-title">Your Orders</h2>
        <div className="scroll-area">
          <div className="order-card">
            <div className="order-card-content">
              <div className="order-card-info">
                <div className="order-card-title">Order ID: PKF94KFY</div>
                <div className="order-card-subtitle">Aug 14, 2025</div>
              </div>
              <button className="order-card-button">Manage Order</button>
            </div>
          </div>
        </div>

        <div className="order-card">
          <div className="order-card-content">
            <div className="order-card-info">
              <div className="order-card-label">Payment Plan</div>
              <div className="order-card-title">Order ID: PKF49KFY</div>
              <div className="order-card-subtitle">Aug 18, 2025</div>
            </div>
            <div className="order-card-actions">
              <button className="order-card-button">Manage Order</button>
              <button className="order-card-button">Manage Payment Plan</button>
            </div>
          </div>
        </div>

        <div className="order-card">
          <div className="order-card-content">
            <div className="order-card-info">
              <div className="order-card-label">Waitlist</div>
              <div className="order-card-title">Order ID: PKF54KFZ</div>
              <div className="order-card-subtitle">Aug 20, 2025</div>
            </div>
            <div className="order-card-actions">
              <button className="order-card-button">Manage Order</button>
              <button className="order-card-button">Manage Waitlist</button>
            </div>
          </div>
        </div>

        {/* Action Cards under Orders */}
        <div className="action-card">
          <div className="action-card-left">
            <RefreshCwIcon className="action-card-icon" />
            <div className="action-card-content">
              <div className="action-card-title">Sell</div>
              <div className="action-card-description">Sell tickets at your own price</div>
            </div>
          </div>
          <ChevronRightIcon className="action-card-arrow" />
        </div>

        <div className="action-card">
          <div className="action-card-left">
            <SendIcon className="action-card-icon" />
            <div className="action-card-content">
              <div className="action-card-title">Transfers</div>
              <div className="action-card-description">Send tickets & items to anyone</div>
            </div>
          </div>
          <ChevronRightIcon className="action-card-arrow" />
        </div>

        <div className="action-card">
          <div className="action-card-left">
            <UploadIcon className="action-card-icon" />
            <div className="action-card-content">
              <div className="action-card-title">Upgrade</div>
              <div className="action-card-description">Available upgrade offers</div>
            </div>
          </div>
          <ChevronRightIcon className="action-card-arrow" />
        </div>
      </section>

      {/* Items Section */}
      <section className="section items-section">
        <h2 className="section-title">Your Items</h2>
        <div className="scroll-area">
          <div className="item-card">
            <div className="item-card-image">
              <img src="/images/stadium-1.svg" alt="Stadium view" />
            </div>
            <div className="item-card-content">
              <div className="item-card-title">Sample Item</div>
              <div className="item-card-subtitle">Details</div>
            </div>
          </div>
          <div className="item-card">
            <div className="item-card-image">
              <img src="/images/stadium-2.svg" alt="Stadium view" />
            </div>
            <div className="item-card-content">
              <div className="item-card-title">Sample Item 2</div>
              <div className="item-card-subtitle">Details</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resale Section */}
      <section className="section resale-section">
        <h2 className="section-title">Resale</h2>
        <div className="action-card">
          <div className="action-card-left">
            <StoreIcon className="action-card-icon" />
            <div className="action-card-content">
              <div className="action-card-title">Your listings</div>
              <div className="action-card-description">Manage your listings</div>
            </div>
          </div>
          <ChevronRightIcon className="action-card-arrow" />
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section">
        <div className="rewards-header">
          <h2 className="rewards-title">10 points</h2>
          <p className="rewards-subtitle">8 sales</p>
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