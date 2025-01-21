"use client";
import CountdownTimers from "@/components/shared/CountdownTimer/CountdownTimer";
import { Button } from "@/components/ui/button";
import React from "react";

const DealOfTheDay = () => {
  return (
    <div className="container">
      <section
        className="w-full h-[402px] rounded-[8px]"
        style={{
          backgroundImage: "url('/assets/img/deal_of_the_day.png')",
          backgroundRepeat: "repeat", // Ensure seamless background
          animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="flex flex-col justify-center items-center pt-[63px] md:pt-[56px]">
          <h4 className="text-[32px] font-semibold leading-[38px] text-white">
            Deal Of The Day
          </h4>
          <p className="text-[20px] font-medium leading-[24px] text-white">
            Join Us Today
          </p>
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-3 h-1 bg-[#E6EEF6] opacity-30" />
            <div className="w-10 h-1 bg-[#E6EEF6]" />
            <div className="w-3 h-1 bg-[#E6EEF6] opacity-30" />
          </div>
        </div>

        <div className="pt-[36px]">
          <CountdownTimers targetDate="2025-01-31T00:00:00" />
        </div>

        <style>
          {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%; /* Ends at this position */
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }       
        `}
        </style>
      </section>
      <div className="mt-[10px]">
        <Button className="w-full ">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default DealOfTheDay;
