import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface BestOfferData {
  id: number;
  img: string;
  name: string;
}

const bestOfferData: BestOfferData[] = [
  {
    id: 1,
    img: "/assets/img/best_offer/best_offer1.png",
    name: "American Beauty",
  },
  {
    id: 2,
    img: "/assets/img/best_offer/best_offer2.png",
    name: "American Beauty",
  },
  {
    id: 3,
    img: "/assets/img/best_offer/best_offer3.png",
    name: "American Beauty",
  },
  {
    id: 4,
    img: "/assets/img/best_offer/best_offer4.png",
    name: "American Beauty",
  },
];

const BestOffer: React.FC = () => {
  return (
    <div className="container pb-[40px] md:pb-[60px] lg:pb-[80px]">
      <h3 className="heading">
        Best Offer
      </h3>
      <p className="text-xl font-normal leading-[24px] text-[#444444] pt-[6] md:pt-[7px] lg:pt-[8px]">
        &quot;Unlock unbeatable savings on select products - Shop now before
        it&apos;s gone!&quot;
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px] pt-[25px] md:pt-[33px] lg:pt-[41px]">
        {bestOfferData.map((offer) => (
          <div
            key={offer?.id}
            className="p-[12px] rounded-[16px] bg-white shadow box-shadow: 0px 4px 4px 0px #00000026;
"
          >
            <div className="pb-[6px] md:pb-[7px] lg:pb-[8px]">
              <Image
                src={offer?.img}
                alt={offer?.name}
                width={254}
                height={218}
                className="w-full rounded-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="flex items-center gap-[4px]">
                  <Image
                    src="/assets/img/best_offer/hot_icon.png"
                    alt="hot icon"
                    width={10}
                    height={12}
                  />
                  <span className="text-xs leading-[14px] font-normal text-[#E10E0E]">
                    Hot
                  </span>
                </div>

                <span className="text-xs leading-[14px] font-normal text-[#939393]">
                  8 Views
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-[#FF8A00] w-[12px] h-[12px]" />
                <FaStar className="text-[#FF8A00] w-[12px] h-[12px]" />
                <FaStar className="text-[#FF8A00] w-[12px] h-[12px]" />
                <FaStar className="text-[#FF8A00] w-[12px] h-[12px]" />
                <FaRegStar className="w-[12px] h-[12px]" />
              </div>
            </div>

            <h5 className="text-base font-medium leading-[24px] text-[#0057A8] pt-[4px]">
              {offer?.name}
            </h5>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between  pt-[25px] md:pt-[33px] lg:pt-[41px]">
        <div className="">
          <Button> 
            Shop Now
          </Button>
        </div>

        <button className="group flex items-center gap-[14px]">
          See All
          <FaArrowRightLong className="w-[20px] h-[20px] text-[#0057A8] transform group-hover:translate-x-2 transition-all duration-400" />
        </button>
      </div>
    </div>
  );
};

export default BestOffer;
