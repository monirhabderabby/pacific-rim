import * as React from "react";
import { BidInputProps } from "./types";

export const BidInput: React.FC<BidInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
    onChange(numericValue);
  };

  return (
    <div className="flex flex-col max-w-[370px]">
      <label
        htmlFor="bidInput"
        className="text-base leading-tight text-neutral-700"
      >
        Your Bid Price
      </label>
      <div className="flex justify-between mt-2 w-full h-11 whitespace-nowrap rounded-md border border-solid border-neutral-400">
        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-green-800 bg-gray-200 rounded-lg h-[43px] w-[42px] flex items-center justify-center">
            $
        </div>
        <input
          id="bidInput"
          type="text"
          value={value}
          onChange={handleChange}
          className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[240px] text-stone-300"
          aria-label="Bid amount in dollars"
        />
      </div>
    </div>
  );
};
