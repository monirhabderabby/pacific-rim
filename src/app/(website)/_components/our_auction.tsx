// Packages
import dynamic from "next/dynamic";

// Local imports

import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import { featureProducts } from "@/data/featured";
const BiddingCard = dynamic(() => import("./bid-card"), {
  ssr: false,
});

const OurAuction = () => {
  return (
    <div className="section container">
      <SectionHeading heading="Our Auctions" subheading="Auctions" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px] lg:gap-[27px] pt-[40px] h-auto">
        <FeaturedCards />

        <div className="space-y-4">
          <BiddingCard />
          <JoinAsSeller />
        </div>
      </div>
    </div>
  );
};

export default OurAuction;

const FeaturedCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {featureProducts.slice(0, 4).map((product) => (
        <FeaturedProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const JoinAsSeller = () => {
  return (
    <div className="p-6 rounded-xl h-fit bg-white  space-y-7">
      <div>
        <h2 className="text-[22px]  font-semibold text-[#2A6C2D] mb-2 text-center">
          Partner with Us. Grow Your Business on
        </h2>
        <p
          className="text-[20px] font-medium text-center"
          style={{
            background: "linear-gradient(90deg, #1D4C1F 0%, #44B249 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Join Our Marketplace Today
        </p>
      </div>
      <Button className="w-full mb-4 bg-[#37783B] hover:bg-[#2c6130] text-white font-semibold py-2">
        Join As a Sellers
      </Button>
    </div>
  );
};
