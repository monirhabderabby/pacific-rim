"use client";

// Packages
import { State } from "@/types/form";

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

/** NextButton Component */
// const NextButton = ({
//   province,
//   currentState,
// }: {
//   province: string;
//   currentState: string;
// }) => (
//   <div className="flex justify-end w-full mt-16">
//     <Button disabled={!province} className="min-w-[155px]">
//       <Link href={`/registration/country/${currentState}/business_information`}>
//         Next →
//       </Link>
//     </Button>
//   </div>
// );

/** Main StateSelector Component */
export function StateSelector({ currentState }: Props) {
  // const dispatch = useDispatch();

  // Safely access the Redux state
  // const province = useAppSelector(
  //   (state) =>
  //     state.auth.businesses?.[state.auth.businesses.length - 1]?.province || ""
  // );

  const isUS = currentState === "United States";
  const displayedStates = isUS ? usStates : canadaProvinces;
  const displayedFlag = isUS ? flags.us : flags.ca;
  console.log(displayedFlag);

  console.log(displayedStates);

  // Ensure currentState is valid
  if (!isUS && currentState !== "Canada") {
    console.error("Invalid currentState value:", currentState);
    return <p>Error: Invalid country selected.</p>;
  }

  // const handleSelectState = (stateName: string) => {
  //   try {
  //     dispatch(updateBusiness({ province: stateName }));
  //   } catch (err) {
  //     console.error("Error dispatching updateBusiness:", err);
  //   }
  // };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      {/* <Flag currentState={currentState} displayedFlag={displayedFlag} /> */}
      {/* <StateHeader currentState={currentState} />
      <StateContainer
        displayedStates={displayedStates}
        province={province}
        onSelectState={handleSelectState}
      /> */}
      {/* <NextButton province={province} currentState={currentState} /> */}
    </div>
  );
}

export default StateSelector;
