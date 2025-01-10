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
      <ProductsContainer />
    </div>
  );
};

export default Page;
