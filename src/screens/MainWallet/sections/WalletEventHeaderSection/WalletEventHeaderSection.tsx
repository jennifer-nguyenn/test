import React from "react";

export const WalletEventHeaderSection = (): JSX.Element => {
  // Event data that could be passed as props in a real application
  const eventData = {
    title: "New York Red Bulls VS Inter Miami",
    venue: "Red Bull Arena",
    datetime: "Jan 15, 2023 at 8:00PM PST",
  };

  return (
    <div className="flex flex-col w-full items-center gap-4 py-6">
      <div className="flex flex-col items-center gap-1 w-full">
        <h2 className="w-full [text-shadow:0px_2px_14px_#00000080] font-mobile-h4 font-[number:var(--mobile-h4-font-weight)] text-white text-[length:var(--mobile-h4-font-size)] text-center tracking-[var(--mobile-h4-letter-spacing)] leading-[var(--mobile-h4-line-height)] [font-style:var(--mobile-h4-font-style)]">
          {eventData.title}
        </h2>

        <p className="w-full [text-shadow:0px_2px_14px_#00000080] font-mobile-paragraph font-[number:var(--mobile-paragraph-font-weight)] text-[#ffffffb2] text-[length:var(--mobile-paragraph-font-size)] text-center tracking-[var(--mobile-paragraph-letter-spacing)] leading-[var(--mobile-paragraph-line-height)] [font-style:var(--mobile-paragraph-font-style)]">
          {eventData.venue}
        </p>

        <p className="w-full font-mobile-paragraph font-[number:var(--mobile-paragraph-font-weight)] text-[#ffffffb2] text-[length:var(--mobile-paragraph-font-size)] text-center tracking-[var(--mobile-paragraph-letter-spacing)] leading-[var(--mobile-paragraph-line-height)] [font-style:var(--mobile-paragraph-font-style)]">
          {eventData.datetime}
        </p>
      </div>
    </div>
  );
};