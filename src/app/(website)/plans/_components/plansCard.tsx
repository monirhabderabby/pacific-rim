import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

function PlansCard({
  cardtitle,
  cardcontent,
  cardprice,
  action,
  bids,
  messages,
}: any) {
  const title = cardtitle === "Standard" ? true : false;
  return (
    <div className="w-full border border-[#A3A6AF] rounded-[16px] relative">
      {title && (
        <div className="bg-[#2A6C2D] py-[6px] rounded-tl-[16px] rounded-tr-[16px] absolute w-full">
          <h4 className="text-center text-[11px] text-[#F8ECEC] leading-[13.2px] font-semibold ">
            Most Popular
          </h4>
        </div>
      )}
      <div className=" px-6 pt-[75.5px]">
        <h2 className="text-xl text-[#1C3A58] font-semibold leading-[24px]">
          {cardtitle}
        </h2>
        <p className="text-base text-[#696767] font-normal leading-[19.2px] mt-2">
          {cardcontent}
        </p>
        <h4 className="text-[22px] text-[#1A1A1A] font-bold leading-[26.4px] mt-6">
          ₿{cardprice}
        </h4>
        <button className="w-full text-base text-[#FFFFFF] font-semibold bg-[#2A6C2D] hover:bg-[#266129]/80 rounded-[8px] py-[12.5px] mt-6 duration-300">
          Subscribe Now
        </button>
      </div>
      {/* 2nd div */}
      <div className="px-6 mt-10 pb-[75.5px]">
        {/* item-1 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>
              <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
            </span>
            <p className="text-sm text-[#444444] font-normal leading-[16.8px]">
              Auction/Listing
            </p>
          </div>
          <div>
            <p className="text-sm text-[#2A6C2D] font-bold leading-[16.8px]">
              {action}
            </p>
          </div>
        </div>
        {/* item-2 */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">
            <span>
            <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
            </span>
            <p className="text-sm text-[#444444] font-normal leading-[16.8px]">
              Bids
            </p>
          </div>
          <div>
            <p className="text-sm text-[#2A6C2D] font-bold leading-[16.8px]">
              {bids}
            </p>
          </div>
        </div>
        {/* item-3 */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">
            <span>
            <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
            </span>
            <p className="text-sm text-[#444444] font-normal leading-[16.8px]">
              Messages
            </p>
          </div>
          <div>
            <p className="text-sm text-[#2A6C2D] font-bold leading-[16.8px]">
              {messages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansCard;
