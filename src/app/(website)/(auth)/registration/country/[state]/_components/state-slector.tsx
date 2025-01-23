"use client";

// Packages
import { Button } from "@/components/ui/button";
import { updateBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { State } from "@/types/form";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

// Local assets
import canadaFlag from "@/assets/flags/canada.png";
import usFlag from "@/assets/flags/us.png";

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
  ca: canadaFlag,
};

interface Props {
  currentState: "United States" | "Canada";
}

export function StateSelector({ currentState }: Props) {
  const dispatch = useDispatch();

  // Safely access the Redux state
  const province = useAppSelector(
    (state) =>
      state.auth.businesses?.[state.auth.businesses.length - 1]?.province || ""
  );

  const isUS = currentState === "United States";
  const displayedStates = isUS ? usStates : canadaProvinces;
  const displayedFlag = isUS ? flags.us : flags.ca;

  // Ensure currentState is valid
  if (!isUS && currentState !== "Canada") {
    console.error("Invalid currentState value:", currentState);
    return <p>Error: Invalid country selected.</p>;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      {/* Flag */}
      <div className="mb-8">
        <Image
          src={displayedFlag}
          alt={`${currentState} Flag`}
          width={300}
          height={180}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Header */}
      <div className="space-y-4 mb-14 text-center">
        <h1 className="text-gradient text-3xl font-bold">
          Select Any State of {currentState}
        </h1>
        <p className="text-gray-500 text-sm">
          Choose Your Business State to Proceed
        </p>
      </div>

      {/* State Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {displayedStates.map((state) => (
          <button
            key={state.name}
            onClick={() => {
              try {
                dispatch(updateBusiness({ province: state.name }));
              } catch (err) {
                console.error("Error dispatching updateBusiness:", err);
              }
            }}
            className={`p-3 border rounded-md transition-colors duration-300 text-lg font-medium ${
              province === state.name
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-blue-200 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {state.name}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end w-full mt-16">
        <Button disabled={!province} className="min-w-[155px]">
          <Link
            href={`/registration/country/${currentState}/business_information`}
          >
            Next →
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default StateSelector;
