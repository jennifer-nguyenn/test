import React from "react";
import "./WalletEventHeaderSection.css";

export const WalletEventHeaderSection = (): JSX.Element => {
  // Event data that could be passed as props in a real application
  const eventData = {
    title: "New York Red Bulls VS Inter Miami",
    venue: "Red Bull Arena",
    datetime: "Jan 15, 2023 at 8:00PM PST",
  };

  return (
    <div className="event-header">
      <div className="event-header-content">
        <h2 className="event-title text-shadow">
          {eventData.title}
        </h2>

        <p className="event-venue text-shadow">
          {eventData.venue}
        </p>

        <p className="event-datetime">
          {eventData.datetime}
        </p>
      </div>
    </div>
  );
};