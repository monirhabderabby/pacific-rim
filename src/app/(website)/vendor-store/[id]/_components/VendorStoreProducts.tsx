"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { featureProducts } from "@/data/featured";
import { Search } from "lucide-react";
import { useState } from "react";

const VendorStoreProducts = () => {
  const [query, setQuery] = useState("");
  const onSearchHandle = (e: any) => {
    e.preventDefault();
    console.log("Searched query: ", query);
  };

  const uniqueCategories = Array.from(
    new Set(featureProducts.map((product) => product.category))
  );

  // Map unique categories to the dropdown format
  const categoryOptions = uniqueCategories.map((category, index) => ({
    id: index, // Use category as id since it's unique
    value: category,
    name: category, // Display name
  }));

  const [selectedCategory, setSelectedCategory] = useState("");


  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Category:", value); 
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <form onSubmit={onSearchHandle}>
          <div className="flex w-full max-w-[400px] h-[41px] overflow-hidden rounded-[6px] border-2 border-[#0057A8] bg-white">
            <div className="flex items-center pl-2">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 px-2 py-3 text-lg text-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button
              className="px-4 w-[105px] font-medium text-white bg-[#0057A8] hover:bg-blue-800 transition-colors"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <div className="w-full max-w-[180px]">
          <PacificDropdownSelector
            list={categoryOptions}
            selectedValue={selectedCategory}
            onValueChange={handleCategoryChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default VendorStoreProducts;
