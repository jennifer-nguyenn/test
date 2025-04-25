import { ChevronLeftIcon, ExternalLinkIcon, ShareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { WalletEventHeaderSection } from "./sections/WalletEventHeaderSection";

export const MainWallet = (): JSX.Element => {
  return (
    <div className="relative w-full bg-[#111111] overflow-hidden">
      <div className="w-full">
        {/* Background image with gradient overlay */}
        <div className="w-full h-[375px] relative">
          <div className="h-[375px] bg-[url(/event-card-image.png)] bg-cover bg-[50%_50%]">
            <div className="w-full h-[375px] [background:linear-gradient(180deg,rgba(17,17,17,0.5)_0%,rgba(17,17,17,1)_100%)]" />
          </div>
        </div>

        {/* Main content sections */}
        <WalletEventHeaderSection />
        <MainContentSection />
      </div>

      {/* Status bar */}
      <div className="fixed w-full h-[47px] top-0 left-0 backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-background-blur z-50">
        <img
          className="absolute w-[172px] h-8 top-0 left-[101px]"
          alt="Notch"
          src="/notch.png"
        />

        <div className="absolute w-[54px] h-[21px] top-3.5 left-[27px]">
          <div className="relative h-[21px] rounded-3xl">
            <div className="absolute w-[54px] top-0 left-0 font-callout-bold font-[number:var(--callout-bold-font-weight)] text-white text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
              9:41
            </div>
          </div>
        </div>

        <div className="absolute w-[77px] h-[13px] top-[19px] left-[275px]">
          <img
            className="absolute w-[27px] h-[13px] top-0 left-[50px]"
            alt="Statusbar battery"
            src="/-statusbar-battery.svg"
          />

          <img
            className="absolute w-[17px] h-3 top-px left-[26px]"
            alt="Wifi"
            src="/wifi.svg"
          />

          <img
            className="absolute w-[18px] h-3 top-px left-0"
            alt="Icon mobile signal"
            src="/icon---mobile-signal.svg"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col w-full items-end justify-end gap-4 px-4 py-2 fixed top-[47px] left-0 z-40">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          {/* Back button */}
          <Button
            variant="outline"
            size="icon"
            className="relative w-8 h-8 bg-[#111111] rounded-full overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-background-blur-40 p-0"
          >
            <ChevronLeftIcon className="h-4 w-4 text-white" />
          </Button>

          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            {/* External link button */}
            <Button
              variant="outline"
              size="icon"
              className="relative w-8 h-8 bg-[#111111] rounded-full overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-background-blur-40 p-0"
            >
              <ExternalLinkIcon className="h-4 w-4 text-white" />
            </Button>

            {/* ShareIcon button */}
            <Button
              variant="outline"
              size="icon"
              className="relative w-8 h-8 bg-[#111111] rounded-full overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-background-blur-40 p-0"
            >
              <ShareIcon className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
