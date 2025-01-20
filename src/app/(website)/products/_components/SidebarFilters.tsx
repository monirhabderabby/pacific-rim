"use client";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RootState, AppDispatch } from "@/redux/store";
import { setPriceRange, toggleFlower, toggleCategory } from "@/redux/features/filtering/FilterSlice";

export default function SidebarFilters() {
  const dispatch = useDispatch<AppDispatch>();
  const { priceRange, flowers, categories } = useSelector((state: RootState) => state.filters);

  const flowerOptions = ["Indica", "Sativa", "Hybrid"];
  const categoryOptions = ["Flower", "Topical", "Apparel", "Edibles", "Vape Products", "Concentrations"];

  // Handle changes to the slider's value
  const handlePriceChange = (value: number[]) => {
    if (value[0] <= value[1]) {
      dispatch(setPriceRange(value));  // Update Redux state
    }
  };

  // Handle changes to the input fields
  const handleInputChange = (index: number, newValue: number) => {
    const updatedRange = [...priceRange];
    updatedRange[index] = newValue;

    // Ensure the input values are valid and maintain correct order
    if (updatedRange[0] <= updatedRange[1]) {
      dispatch(setPriceRange(updatedRange as [number, number]));  // Update Redux state
    }
  };

  const handleFlowerToggle = (flower: string) => {
    dispatch(toggleFlower(flower));
  };

  const handleCategoryToggle = (category: string) => {
    dispatch(toggleCategory(category));
  };

  return (
    <aside className="w-[270px] space-y-4 mt-[52px]">
      {/* Price Filter */}
      <div className="rounded-lg bg-[#E6EEF6] p-4">
        <h2 className="text-[28px] font-bold text-[#0057A8] mb-4">Filter by Price</h2>
        <Slider
          value={priceRange}  // Bind slider directly to Redux state
          max={1000}
          step={1}
          onValueChange={handlePriceChange}  // Update Redux state when slider is moved
          className="my-4"
        />
        <div className="flex gap-4 items-center">
          <div className="space-y-1.5">
            <Label className="text-[11px] text-[#9C9C9C]">Starting Price</Label>
            <Input
              type="number"
              value={priceRange[0]}  // Bind to Redux state to reflect current price
              onChange={(e) => handleInputChange(0, +e.target.value)}  // Update Redux state when input changes
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[11px] text-[#9C9C9C]">Ending Price</Label>
            <Input
              type="number"
              value={priceRange[1]}  // Bind to Redux state to reflect current price
              onChange={(e) => handleInputChange(1, +e.target.value)}  // Update Redux state when input changes
              className="h-9"
            />
          </div>
        </div>
      </div>

      {/* Shop by Flowers */}
      <div className="rounded-lg bg-[#E6EEF6] p-4">
        <h2 className="text-[28px] leading-[30px] font-bold text-[#0057A8] mb-4">Shop by Flowers</h2>
        <p className="text-[18px] text-[#434851] mb-3">Sub Categories List</p>
        <div className="space-y-3">
          {flowerOptions.map((flower) => (
            <div key={flower} className="flex items-center space-x-2">
              <Checkbox
                id={flower.toLowerCase()}
                checked={flowers.includes(flower)}
                onCheckedChange={() => handleFlowerToggle(flower)}
              />
              <Label htmlFor={flower.toLowerCase()} className="text-[20px] leading-[24px] text-[#001E3B]">
                {flower}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-lg bg-[#E6EEF6] p-4">
        <h2 className="text-[28px] font-bold text-[#0057A8] mb-4">Categories</h2>
        <div className="space-y-3">
          {categoryOptions.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category.toLowerCase()}
                checked={categories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label htmlFor={category.toLowerCase()} className="text-[20px] leading-[24px] text-[#001E3B]">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
