"use client";

// Packages
import canadaFlag from "@/assets/flags/canada.png";
import usFlag from "@/assets/flags/us.png";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local imports

import { Button } from "@/components/ui/button";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { State } from "@/types/form";

const usStates: State[] = [
  { name: "California" },
  { name: "Arizona" },
  { name: "Texas" },
  { name: "Ohio" },
  { name: "Illinois" },
  { name: "Michigan" },
  { name: "Washington" },
  { name: "New York" },
];

const canadaProvinces: State[] = [
  { name: "Ontario" },
  { name: "Quebec" },
  { name: "British Columbia" },
  { name: "Alberta" },
  { name: "Manitoba" },
  { name: "Nova Scotia" },
  { name: "Saskatchewan" },
  { name: "New Brunswick" },
];

const flags = {
  us: usFlag,
  cn: canadaFlag,
};

interface Props {
  currentState: "United States" | "Canada";
}

export function StateSelector({ currentState }: Props) {
  const [selectedState, setSelectedState] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = () => {
    // onNext(selectedState)
    dispatch(setRegistrationValue({ state: selectedState }));
  };

  // Dynamically set the flag and state list based on the currentState prop
  const isUS = currentState === "United States";
  const displayedStates = isUS ? usStates : canadaProvinces;
  const displayedFlag = isUS ? flags.us : flags.cn;
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <div className="mb-[30px]">
        <Image
          src={displayedFlag}
          alt="USA Flag"
          width={300}
          height={180}
          className="rounded-[12px] shadow-[0px_4px_12px_0px_#00000026]"
        />
      </div>

      <div className="space-y-[16px] mb-[56px]">
        <h1 className="text-gradient heading">
          Select Any State Of {currentState}
        </h1>
        <p className="text-[#6D6D6D] font-normal text-[12px] text-center leading-[14.4px]">
          Choose Your Business State
        </p>
      </div>

      <div className="flex gap-4 flex-wrap ">
        {displayedStates.map((state) => (
          <button
            key={state.name}
            onClick={() => setSelectedState(state.name)}
            className={`p-3 border rounded-md transition-colors duration-300 text-lg font-medium leading-3 ${
              selectedState === state.name
                ? "border-[#0057A8] bg-primary text-white"
                : "border-[#0057A8]/20  hover:bg-[#E6EEF6] hover:text-[#00417E]"
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

export default StateSelector;
