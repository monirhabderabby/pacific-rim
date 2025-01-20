import { PacificDropdownType } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const PacificDropdownSelector = ({
  list,
  selectedValue,
  onValueChange,
}: {
  list: PacificDropdownType[]; // List of items
  selectedValue: string; // Currently selected value
  onValueChange: (value: string) => void; // Function to handle value change
}) => {
  return (
    <Select
      value={selectedValue}
      onValueChange={(val) => onValueChange(val)} // Update the state on selection
    >
      <SelectTrigger className="bg-[#ECECEC] rounded-[8px] text-[#0057A8]">
        <SelectValue placeholder={selectedValue} />
      </SelectTrigger>
      <SelectContent className="w-fit">
        <SelectGroup>
          {list.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PacificDropdownSelector;
