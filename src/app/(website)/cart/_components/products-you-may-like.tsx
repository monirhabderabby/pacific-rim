import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import { featureProducts } from "@/data/featured";
import { ArrowRight } from "lucide-react";

const ProductsYouMayLike = () => {
  return (
    <div className="section container">
      <SectionHeading heading="Products you might like" subheading="Products" />

      <div className="my-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureProducts.slice(0, 4).map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center ">
        <Button className="bg-primary-green-hover h-[44px] hover:bg-primary-green-hover/80 transition-colors duration-300">
          Explore More <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ProductsYouMayLike;
