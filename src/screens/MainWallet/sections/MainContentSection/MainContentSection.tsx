import React from "react";
import { ArrowRightIcon, LockIcon, RefreshCwIcon, SendIcon, StoreIcon, UploadIcon } from "lucide-react";

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="section">
      {/* Orders Section */}
      <section className="card">
        <h2 className="card-title">Your Orders</h2>
        <div className="list">
          <div className="list-item">
            <div className="flex-1">
              <div>Order ID: PKF94KFY</div>
              <div className="text-sm text-white/70">Aug 14, 2025</div>
            </div>
            <button className="button">Manage Order</button>
          </div>
          <div className="list-item">
            <div className="flex-1">
              <div>Payment Plan</div>
              <div>Order ID: PKF49KFY</div>
              <div className="text-sm text-white/70">Aug 18, 2025</div>
            </div>
            <div className="flex gap-2">
              <button className="button">Manage Order</button>
              <button className="button">Manage Payment Plan</button>
            </div>
          </div>
          <div className="list-item">
            <div className="flex-1">
              <div>Waitlist</div>
              <div>Order ID: PKF54KFZ</div>
              <div className="text-sm text-white/70">Aug 20, 2025</div>
            </div>
            <div className="flex gap-2">
              <button className="button">Manage Order</button>
              <button className="button">Manage Waitlist</button>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="section">
        <div className="action-card">
          <RefreshCwIcon className="action-card-icon" />
          <div className="action-card-content">
            <div className="action-card-title">Sell</div>
            <div className="action-card-description">Sell tickets at your own price</div>
          </div>
          <ArrowRightIcon className="h-6 w-6 text-white/70" />
        </div>

        <div className="action-card">
          <SendIcon className="action-card-icon" />
          <div className="action-card-content">
            <div className="action-card-title">Transfers</div>
            <div className="action-card-description">Send tickets & items to anyone</div>
          </div>
          <ArrowRightIcon className="h-6 w-6 text-white/70" />
        </div>

        <div className="action-card">
          <UploadIcon className="action-card-icon" />
          <div className="action-card-content">
            <div className="action-card-title">Upgrade</div>
            <div className="action-card-description">Available upgrade offers</div>
          </div>
          <ArrowRightIcon className="h-6 w-6 text-white/70" />
        </div>

        <div className="action-card">
          <StoreIcon className="action-card-icon" />
          <div className="action-card-content">
            <div className="action-card-title">Resale</div>
            <div className="action-card-description">Manage your listings</div>
          </div>
          <ArrowRightIcon className="h-6 w-6 text-white/70" />
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section">
        <div className="rewards-header">
          <h2 className="section-title">Rewards</h2>
          <div className="rewards-points">
            <span>10 points</span>
            <div className="text-sm text-white/70">8 sales</div>
          </div>
        </div>

        <div className="rewards-card unlocked">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-bold">25% discount on any ticket</div>
            <div className="text-sm">500 Points</div>
          </div>
          <div className="rewards-progress">500/500 pts</div>
        </div>

        <div className="rewards-card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg">Get a free hat</div>
            <LockIcon className="h-5 w-5 text-white/50" />
          </div>
          <div className="text-sm text-white/70">Get 5 more points to unlock</div>
          <div className="rewards-progress">400/500 pts</div>
        </div>

        <div className="rewards-card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg">75% Off Any Tickets</div>
            <LockIcon className="h-5 w-5 text-white/50" />
          </div>
          <div className="text-sm text-white/70">Get 10 more points to unlock</div>
          <div className="rewards-progress">10/20 pts</div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="nav-tabs">
        <button className="nav-tab active">My points</button>
        <button className="nav-tab">Points per ticket</button>
        <button className="nav-tab">Leaderboard</button>
      </nav>
    </div>
  );
};