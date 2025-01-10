"use client";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { featureProducts } from "@/data/featured";

const OurFeatureSection = () => {
  return (
    <div className="section container ">
      <SectionHeading heading="Our Featured Products" subheading="Products" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[17px] md:gap-[27px] pt-[40px]">
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.image} product={product} />
        ))}
      </div>

      <div className="mt-[40px] w-full flex justify-center items-center">
        <ButtonArrow text="Explore More" size="sm" onClick={() => {}} />
      </div>
    </div>
  );
};

export default OurFeatureSection;
