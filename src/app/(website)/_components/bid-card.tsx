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
    <Card className=" shadow-none overflow-hidden bg-white">
      <div className="relative">
        <Image
          height={300}
          width={400}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a15d7f9b9bb47f1c399eb2bcca6083f278b4bf5bd9f04b6458478c49d90e56?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
          alt="American Beauty product"
          className="w-full h-[300px] object-cover"
        />
        <Button className="absolute top-4 right-4 rounded-full w-10 h-10 p-0 bg-[#37783B] hover:bg-[#2c6130]">
          <Flame className="h-5 w-5" />
        </Button>
      </div>

      <CardContent className="p-6">
        <Button className="w-full mb-4 bg-[#37783B] hover:bg-[#2c6130] text-white font-semibold py-2">
          Bid Now
        </Button>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <Star className="w-5 h-5 text-yellow-400" />
          <div className="flex items-center ml-2 text-red-500 text-sm">
            <Flame className="w-4 h-4 mr-1" />
            Hot
            <span className="text-gray-500 ml-2">8 Views</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#37783B] mb-2">
          American Beauty
        </h2>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold">₿7,000.00</span>
          <span className="text-gray-400 line-through text-sm">₿9,25.00</span>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
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
