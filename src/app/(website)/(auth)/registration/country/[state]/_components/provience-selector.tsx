"use client";

import { Button } from "@/components/ui/button";
import { State } from "@/data/registration";
import { updateBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Flag from "./Flag-selector";
import StateHeader from "./State-Header";
import StateContainer from "./stats-container";

interface Props {
  data: State[];
  flag: string;
  currentState: string;
}

/** NextButton Component */
const NextButton = ({
  province,
  currentState,
}: {
  province: string;
  currentState: string;
}) => (
  <div className="flex justify-end w-full mt-16">
    <Button disabled={!province} className="min-w-[155px]">
      <Link href={`/registration/country/${currentState}/business_information`}>
        Next →
      </Link>
    </Button>
  </div>
);

/** Main StateSelector Component */
export function ProvienceSelector({ data, currentState, flag }: Props) {
  const dispatch = useDispatch();

  // Safely access the Redux state
  const province = useAppSelector(
    (state) =>
      state.auth.businesses?.[state.auth.businesses.length - 1]?.province || ""
  );

  // const displayedStates = isUS ? usStates : canadaProvinces;

  const handleSelectState = (stateName: string) => {
    try {
      dispatch(updateBusiness({ province: stateName }));
    } catch (err) {
      console.error("Error dispatching updateBusiness:", err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <Flag currentState={currentState} displayedFlag={flag} />
      <StateHeader currentState={currentState} />
      <StateContainer
        displayedStates={data}
        province={province}
        onSelectState={handleSelectState}
      />
      <NextButton province={province} currentState={currentState} />
    </div>
  );
}

export default ProvienceSelector;
