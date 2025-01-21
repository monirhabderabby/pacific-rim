"use client";

// Packages
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local imports

import { Button } from "@/components/ui/button";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { State } from "@/types/form";

const states: State[] = [
  { name: "California" },
  { name: "Arizona" },
  { name: "Texas" },
  { name: "Ohio" },
  { name: "Illinois" },
  { name: "Michigan" },
  { name: "Washington" },
  { name: "New York" },
];

export function StateSelector() {
  const [selectedState, setSelectedState] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = () => {
    // onNext(selectedState)
    dispatch(setRegistrationValue({ state: selectedState }));
  };
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <div className="mb-[30px]">
        <Image
          src="/assets/img/image 872.png"
          alt="USA Flag"
          width={300}
          height={180}
          className="rounded-[12px] shadow-[0px_4px_12px_0px_#00000026]"
        />
      </div>

      <div className="space-y-[16px] mb-[56px]">
        <h1 className="text-gradient heading">Select Any State Of {"STATE"}</h1>
        <p className="text-[#6D6D6D] font-normal text-[12px] text-center leading-[14.4px]">
          Choose Your Business State
        </p>
      </div>

      <div className="flex gap-4 flex-wrap ">
        {states.map((state) => (
          <button
            key={state.name}
            onClick={() => setSelectedState(state.name)}
            className={`p-3 border rounded-md transition-colors text-lg font-medium leading-3 ${
              selectedState === state.name
                ? "border-[#37B24D] bg-[#37B24D] text-white"
                : "border-gray-200 hover:border-[#37B24D] hover:text-[#4737b2]"
            }`}
          >
            {state.name}
          </button>
        ))}
      </div>

      <div className="flex justify-end w-full mt-[68px]">
        <Button
          onClick={handleClick}
          disabled={!selectedState}
          className="min-w-[155px]"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}
