import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { PageHeader } from "@/components/shared/sections/page-header";
import { featureProducts } from "@/data/featured";

const Page = () => {
  return (
    <div>
      <PageHeader
        title="Our Products"
        items={[
          { label: "Home", href: "/" },
          { label: "Our Products", href: "" },
        ]}
      />
      <div className="container section ">
        <SectionHeading heading="Products" subheading="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[50px]">
          {featureProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
