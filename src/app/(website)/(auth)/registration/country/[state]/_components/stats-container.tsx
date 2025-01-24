import { State } from "@/types/form";
const StateContainer = ({
  displayedStates,
  province,
  onSelectState,
}: {
  displayedStates: State[];
  province: string;
  onSelectState: (state: string) => void;
}) => (
  <div className="flex gap-4 flex-wrap justify-center">
    {displayedStates.map((state) => (
      <button
        key={state.name}
        onClick={() => onSelectState(state.name)}
        className={`p-3 border rounded-md transition-colors duration-300 text-lg font-medium ${
          province === state.name
            ? "border-[#B0CBE4] bg-primary text-white"
            : "border-[#B0CBE4]  hover:bg-[#E9EBF8]"
        }`}
      >
        {state.name}
      </button>
    ))}
  </div>
);

export default StateContainer;
