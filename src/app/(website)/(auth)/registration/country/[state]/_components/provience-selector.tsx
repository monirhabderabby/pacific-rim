"use client";

import { State } from "@/data/registration";
import { StaticImageData } from "next/image";
import Flag from "./Flag-selector";

interface Props {
  data: State[];
  flag: StaticImageData;
  currentState: string;
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
export function ProvienceSelector({ data, currentState, flag }: Props) {
  console.log(data);
  // const dispatch = useDispatch();

  // Safely access the Redux state
  // const province = useAppSelector(
  //   (state) =>
  //     state.auth.businesses?.[state.auth.businesses.length - 1]?.province || ""
  // );

  // const displayedStates = isUS ? usStates : canadaProvinces;

  // const handleSelectState = (stateName: string) => {
  //   try {
  //     dispatch(updateBusiness({ province: stateName }));
  //   } catch (err) {
  //     console.error("Error dispatching updateBusiness:", err);
  //   }
  // };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <Flag currentState={currentState} displayedFlag={flag} />
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

export default ProvienceSelector;
