import React from "react";
import { SizeOption } from "./types";
import { Button } from "@/components/ui/button";

interface SizeSelectorProps {
  sizes: SizeOption[];
  onSelect: (size: string) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, onSelect }) => {
  return (
    <div className="flex gap-4 items-center self-start leading-tight text-center text-neutral-700">
      <div className="self-stretch my-auto text-base font-medium">Size :</div>
      <div className="flex gap-2 items-center self-stretch my-auto text-xs whitespace-nowrap min-w-[240px]">
        {sizes.map((size, index) => (
          <Button
            key={index}
            variant={size.isSelected ? "default" : "outline"}
            onClick={() => onSelect(size.value)}
            className={`self-stretch p-2.5 my-auto rounded border border-solid  min-h-[34px] w-[49px]`}
          >
            {size.value}
          </Button>
        ))}
      </div>
    </div>
  );
};

// ${
//   size.isSelected
//     ? 'text-white bg-green-800 border-green-800'
//     : 'border-stone-300'
// }