import { PageHeader } from "@/components/shared/sections/page-header";
import ProductsContainer from "./_components/products-container";

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
      {/* Render the product grid or list */}
      <div className="">
        
      <ProductsContainer />
      </div>
    </div>
  );
};

export default Page;
