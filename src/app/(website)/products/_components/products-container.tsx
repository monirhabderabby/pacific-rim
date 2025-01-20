"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import PacificPagination from "@/components/ui/PacificPagination";
import { featureProducts } from "@/data/featured";
import { RootState, useAppSelector } from "@/redux/store";
import { useState } from "react";
import SidebarFilters from "./SidebarFilters";

const ProductsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get filters from Redux store
  const { priceRange, flowers, categories } = useAppSelector(
    (state: RootState) => state.filters
  );

  // Filter products based on the selected filters
  const filteredProducts = featureProducts.filter((product) => {
    const price = parseFloat(product.price.replace(",", ""));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    const matchesCategory =
      categories.length === 0 || categories.includes(product.category);
    const matchesFlowerType =
      flowers.length === 0 || flowers.includes(product.flowerType);

    return matchesPrice && matchesCategory && matchesFlowerType;
  });

  return (
    <div className="container section lg:mb-[150px]">
      <SectionHeading heading="Products" subheading="" />
      <div className="flex flex-wrap gap-4 items-start">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <SidebarFilters />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[52px]">
          {filteredProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-[40px]">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={Math.ceil(filteredProducts.length / 9)} // Assuming 9 items per page
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
