"use client";
import { useCountdown } from "@/hooks/useCountDown";

const AuctionCountDownTimer = ({ endDate }: { endDate: Date }) => {
  const timeLeft = useCountdown(endDate);
  return (
    <div className="bg-[#E6EEF6] p-[4px] rounded-[8px] w-full h-auto mt-1">
      <p className="text-[#9C9C9C] text-sm mb-[4px] text-center">
        Hurry up! Offer ends in:
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="text-[16px] font-medium leading-[21.5px] text-[#000000]">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-[12px] font-normal leading-[14.4px] text-[#9C9C9C]">
            Days
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium leading-[21.5px] text-[#000000]">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-[12px] font-normal leading-[14.4px] text-[#9C9C9C]">
            Hours
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium leading-[21.5px] text-[#000000]">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-[12px] font-normal leading-[14.4px] text-[#9C9C9C]">
            Mins
          </div>
        </div>
        <div>
          <div className="text-[16px] font-medium leading-[21.5px] text-[#000000]">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-[12px] font-normal leading-[14.4px] text-[#9C9C9C]">
            Secs
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCountDownTimer;
