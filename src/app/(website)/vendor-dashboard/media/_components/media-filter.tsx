"use client";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const categoriesList = [
  { id: 1, name: "Auctions", value: "auctions" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];

const MediaFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [category, setCategory] = useState<string>("auctions"); // Default to "auctions"

  return (
    <div className="h-[60px] p-[8px] bg-white w-full flex gap-x-[12px]">
      {/* Dropdown for "Show" */}
      <div className="h-full flex items-center gap-x-[9px] w-fit">
        <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
          Show
        </span>
        <PacificDropdownSelector
          list={showList}
          selectedValue={show}
          onValueChange={setShow}
        />
      </div>
      {/* Dropdown for "Categories" */}
      <div className="h-full flex items-center">
        <PacificDropdownSelector
          list={categoriesList}
          selectedValue={category}
          onValueChange={setCategory}
        />
      </div>
    </div>
  );
};

export default MediaFilter;

// Generic Dropdown Component
