import FeaturedProductCard from "@/components/shared/cards/featured_card";
import { featureProducts } from "@/data/featured";

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
