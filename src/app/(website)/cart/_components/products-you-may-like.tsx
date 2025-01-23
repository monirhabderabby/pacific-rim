import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { featureProducts } from "@/data/featured";

const ProductsYouMayLike = () => {
  return (
    <div className="section container border-t-[1px] border-primary-green-hover/50 pt-[50px]">
      <SectionHeading heading="Products you might like" subheading="Products" />

      <div className="my-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureProducts.slice(0, 4).map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center ">
        <ButtonArrow text="Explore More" href="/" />
      </div>
    </div>
  );
};

export default ProductsYouMayLike;
