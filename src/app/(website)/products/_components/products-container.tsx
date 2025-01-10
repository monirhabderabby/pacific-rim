"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import PacificPagination from "@/components/ui/PacificPagination";
import { featureProducts } from "@/data/featured";
import { useState } from "react";

const ProductsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="container section lg:mb-[150px]">
      <SectionHeading heading="Products" subheading="" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[50px]">
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-[40px]">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={20}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
