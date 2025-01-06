import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { featureProducts } from "@/data/featured";

const OurFeatureSection = () => {
  return (
    <div className="section container ">
      <SectionHeading
        heading="Shop By Popular categories"
        subheading="Popular categories"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.image} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OurFeatureSection;
