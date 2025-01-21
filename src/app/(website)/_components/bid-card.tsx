"use client";
// Packages
import { Flame, Star } from "lucide-react";
import Image from "next/image";

// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountdown } from "@/hooks/useCountDown";

export default function BiddingCard() {
  const endDate = new Date("2025-01-31T23:59:59");
  const timeLeft = useCountdown(endDate);

  return (
    <Card className=" shadow-none p-[16px] relative">
      <div className="overflow-hidden rounded-[8px]">
        <Image
          height={300}
          width={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a15d7f9b9bb47f1c399eb2bcca6083f278b4bf5bd9f04b6458478c49d90e56?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
          alt="American Beauty product"
          className="w-full h-[266px] object-cover rounded-[8px] hover:scale-105 duration-300 "
        />
        <Button className="absolute -top-[10px] -right-[10px] rounded-full w-[56px] h-[56px] p-0 bg-[#2A6C2D] hover:bg-[#2c6130]">
          <Image
            src="/assets/svg/hammer.svg"
            alt="hammer"
            width={24}
            height={24}
          />
        </Button>
      </div>

      <CardContent className="mt-[10px] p-0">
        <Button className="w-full mb-4">Bid Now</Button>

        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-[16px] h-[16px] fill-[#FF8A00] text-[#FF8A00]"
            />
          ))}
          <Star className="w-[16px] h-[16px] text-[#CCCCCC] fill-[#CCCCCC]" />
        </div>
        <div className="flex items-center justify-center text-[#E10E0E] text-[16px] font-normal leading-[19.2px]">
          <Flame className="w-4 h-4 mr-1" />
          Hot
          <span className="text-[#9C9C9C] ml-2">8 Views</span>
        </div>

        <h2 className="text-[25px] leading-[30px] font-semibold text-center text-[#2A6C2D] mb-2">
          American Beauty
        </h2>

        <div className="flex items-baseline justify-center gap-2 mb-4">
          <span className="text-xl font-bold">₿7,000.00</span>
          <span className="text-gray-400 line-through text-sm">₿9,25.00</span>
        </div>

        <div className="bg-[#EAF0EA] p-[12px] rounded-[8px] max-w-[275px] mx-auto">
          <p className="text-gray-500 text-sm mb-2 text-center">
            Hurry up! Offer ends in:
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-xl font-bold">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <div>
              <div className="text-xl font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500">Hours</div>
            </div>
            <div>
              <div className="text-xl font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500">Mins</div>
            </div>
            <div>
              <div className="text-xl font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500">Secs</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
