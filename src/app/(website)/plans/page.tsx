import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React from "react";
import PlansCard from "./_components/plansCard";

const page = () => {
  return (
    <div className="container section px-4">
      <SectionHeading heading="Membership Plans" subheading="Plans" />
      <div className="flex justify-between mt-[20px] md:mt-[43px] flex-wrap lg:flex-nowrap gap-y-4">
        <div className="w-full md:w-[32%]">
          <PlansCard
            cardtitle="Basic"
            cardcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer "
            cardprice="7,000.00"
            action="5"
            bids="5"
            messages="Unlimited"

          />
        </div>
        <div className="w-full md:w-[32%]">
        <PlansCard
            cardtitle="Standard"
            cardcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer "
            cardprice="7,000.00"
            action="10"
            bids="25"
            messages="Unlimited"

          />
        </div>
        <div className="w-full md:w-[32%]">
        <PlansCard
            cardtitle="Premium"
            cardcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer "
            cardprice="7,000.00"
            action="25"
            bids="100"
            messages="Unlimited"

          />
        </div>
      </div>
    </div>
  );
};

export default page;
