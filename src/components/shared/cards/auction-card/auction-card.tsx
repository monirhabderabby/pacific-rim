"use client";
// Packages
import { motion } from "framer-motion";
// import { Heart } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import dynamic from "next/dynamic";
import Image from "next/image";

// Local imports
import { Button } from "@/components/ui/button";
import { blurDataUrl } from "@/data/blur-data-url";
import { cn } from "@/lib/utils";
import { useState } from "react";
const AuctionCountDownTimer = dynamic(
  () => import("@/components/shared/cards/auction-card/countdown-timer"),
  {
    ssr: false,
  }
);

interface Props {
  isExpired: boolean;
  index: number;
}

export default function AuctionCard({ isExpired, index }: Props) {
  const [imgLoaded, setImgLoaded] = useState<true | false>(false);
  const endDate = new Date("2025-01-31T23:59:59");

  return (
    <div className="flex relative flex-col grow shrink self-stretch p-3 my-auto mx-auto bg-white rounded-[8px] border border-gray-200 border-solid w-full md:w-[260px] hover:shadow-feature_card transition-shadow duration-300 h-[389px]">
      <motion.div
        className={cn(
          "rounded-[8px] overflow-hidden relative w-full ",
          isExpired ? " h-[234px]" : "h-[155px]"
        )}
        initial={{
          opacity: 0.8,
        }}
        animate={{
          opacity: imgLoaded ? 1 : 0.8,
          transition: {
            duration: 0.5,
            ease: "linear",
            delay: index * 0.1,
          },
        }}
      >
        <Image
          loading="lazy"
          src="https://i.postimg.cc/7Lbk8Yby/image-559.png"
          alt="Product image"
          fill
          className="object-cover z-0  rounded-[8px] aspect-[1.07] hover:scale-105 duration-300"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          onLoad={() => setImgLoaded(true)}
        />
      </motion.div>
      {imgLoaded && (
        <motion.div
          initial={{
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: "circIn",
            },
          }}
          className="absolute -top-[10px] -right-[10px] rounded-full w-[48px] h-[48px] p-0 bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:bg-[#121D42] flex justify-center items-center"
        >
          <Image
            src="/assets/svg/hammer.svg"
            alt="hammer"
            width={20}
            height={20}
          />
        </motion.div>
      )}
      <div className="flex absolute top-5 z-0 flex-col w-[32px] left-[22px]">
        <button className="flex gap-2.5 items-center p-2 w-full h-8 bg-white hover:bg-gradient-to-r from-[#7091FFCC] via-[#2F4697CC] to-[#7485FBCC] focus:bg-gradient-to-l focus:from-[#121D42] focus:via-[#152764] focus:to-[#4857BD] focus:text-white hover:text-white rounded-[30px] transition-colors duration-300 group">
          {/* <Heart className="group-hover:fill-white hover:border-0" /> */}
          <CiHeart/>
        </button>
      </div>
      <div className="flex z-0 flex-col mt-2 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            {/* <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-tight text-[#E10E0E] whitespace-nowrap">
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
            </div> */}
            <div>
              <p className="text-xs font-medium leading-[14px] text-[#9C9C9C]">8 Views</p>
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
          <div className="mt-2 text-[16px] text-base font-medium leading-[19.2px] text-gradient">
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
        {!isExpired && <AuctionCountDownTimer endDate={endDate} />}
        <Button
          aria-label="Add to cart"
          disabled={isExpired}
          size="md"
          className={`mt-2 ${isExpired ? "bg-[#C5C5C5] text-base font-medium leading-[19px] text-white" : "bg-gradient-to-br from-[#121D42] via-[#152764] to-[#4857BD] text-base font-medium leading-[19px] text-white"}`}
        >
          {isExpired ? "Expired" : "Bid Now"}
        </Button>
      </div>
    </div>
  );
}
