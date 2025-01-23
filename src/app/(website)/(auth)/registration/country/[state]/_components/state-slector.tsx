"use client";

// Packages

// Local assets

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
  // const displayedStates = isUS ? usStates : canadaProvinces;

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
