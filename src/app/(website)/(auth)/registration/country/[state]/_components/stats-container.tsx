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
            ? "border-blue-500 bg-blue-600 text-white"
            : "border-blue-200 hover:bg-blue-100 hover:text-blue-700"
        }`}
      >
        {state.name}
      </button>
    ))}
  </div>
);

export default StateContainer;
