"use client";
// Packages
import { Heart } from "lucide-react";
import Image from "next/image";

// Local imports
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountDown";
import { cn } from "@/lib/utils";

interface Props {
  isExpired: boolean;
}

export default function AuctionCard({ isExpired }: Props) {
  const endDate = new Date("2025-01-31T23:59:59");

  return (
    <div className="flex relative flex-col grow shrink self-stretch p-3 my-auto mx-auto bg-white rounded-[8px] border border-gray-200 border-solid w-full md:w-[260px] hover:shadow-feature_card transition-shadow duration-300 h-[389px]">
      <div
        className={cn(
          "rounded-[8px] overflow-hidden relative w-full ",
          isExpired ? " h-[234px]" : "h-[155px]"
        )}
      >
        <Image
          loading="lazy"
          src="https://i.postimg.cc/7Lbk8Yby/image-559.png"
          alt="Product image"
          fill
          className="object-cover z-0  rounded-[8px] aspect-[1.07] hover:scale-105 duration-300"
        />
      </div>
      <div className="absolute -top-[10px] -right-[10px] rounded-full w-[48px] h-[48px] p-0 bg-[#2A6C2D] hover:bg-[#2c6130] flex justify-center items-center">
        <Image
          src="/assets/svg/hammer.svg"
          alt="hammer"
          width={20}
          height={20}
        />
      </div>
      <div className="flex absolute top-5 z-0 flex-col w-[32px] left-[22px]">
        <button className="flex gap-2.5 items-center p-2 w-full h-8 bg-white hover:bg-primary-green rounded-[30px] transition-colors duration-300 group">
          <Heart className="group-hover:fill-white hover:border-0" />
        </button>
      </div>
      <div className="flex z-0 flex-col mt-2 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-tight text-[#E10E0E] whitespace-nowrap">
              <div className="flex gap-1 items-center self-stretch my-auto">
                <Image
                  loading="lazy"
                  width={9}
                  height={9}
                  src="/assets/svg/hot.svg"
                  alt="hot icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] fill-[#E10E0E] w-[9px]"
                />
                <div className="self-stretch my-auto text-[#E10E0E]">Hot</div>
              </div>
            </div>
            <div className="flex gap-1 items-start self-stretch my-auto">
              {[1, 2, 3, 4].map((star) => (
                <Image
                  key={star}
                  loading="lazy"
                  src="/assets/svg/star-fill.svg"
                  alt="star fill"
                  height={12}
                  width={12}
                  className="object-contain shrink-0 w-3 aspect-square fill-amber-500"
                />
              ))}
              <Image
                loading="lazy"
                src="/assets/svg/star-outline.svg"
                alt="star outline"
                height={12}
                width={12}
                className="object-contain shrink-0 w-3 aspect-square fill-stone-300"
              />
            </div>
          </div>
          <div className="mt-2 text-[16px] text-base font-medium leading-[19.2px] text-[#2A6C2D]">
            American Beauty
          </div>
          <div className="flex gap-1 items-end self-start mt-2 font-medium leading-tight">
            <div className="self-stretch text-base text-[16px] leading-[19.2px] whitespace-nowrap text-[#1A1A1A]">
              ₿500
            </div>
            <div className="self-stretch text-[12px] leading-[14.4px] font-medium text-[#9C9C9C]">
              <span className="line-through">₿800</span>
            </div>
          </div>
        </div>
        {!isExpired && <CountDownTimer endDate={endDate} />}
        <Button
          aria-label="Add to cart"
          disabled={isExpired}
          size="md"
          className="mt-2"
        >
          {isExpired ? "Expired" : "Bid Now"}
        </Button>
      </div>
    </div>
  );
}

const CountDownTimer = ({ endDate }: { endDate: Date }) => {
  const timeLeft = useCountdown(endDate);
  return (
    <div className="bg-[#EAF0EA] p-[4px] rounded-[8px] w-full h-auto mt-1">
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
