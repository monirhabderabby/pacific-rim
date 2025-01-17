"use client"
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="bg-[#E6EEF6] shadow-md rounded-lg p-4 text-center max-w-md mx-auto">
      <p className="text-[21px] font-normal leading-[27px] text-[#9C9C9C]">Hurry up! Offer ends in:</p>
      <div className="flex justify-center mt-2 space-x-4 text-gray-800 font-bold text-2xl">
        <div>
          <span className="text-[27px] leading-[32px] font-medium text-black">{String(timeLeft.days).padStart(2, "0")}</span>
          <p className="text-lg font-normal leading-[21px] text-[#9C9C9C]">Days</p>
        </div>
        <div>
          <span className="text-[27px] leading-[32px] font-medium text-black">{String(timeLeft.hours).padStart(2, "0")}</span>
          <p className="text-lg font-normal leading-[21px] text-[#9C9C9C]">Hours</p>
        </div>
        <span>:</span>
        <div>
          <span className="text-[27px] leading-[32px] font-medium text-black">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p className="text-lg font-normal leading-[21px] text-[#9C9C9C]">Mins</p>
        </div>
        <span>:</span>
        <div>
          <span className="text-[27px] leading-[32px] font-medium text-black">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p className="text-lg font-normal leading-[21px] text-[#9C9C9C]">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
