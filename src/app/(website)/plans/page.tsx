import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import React from "react";
import PlansCard from "./_components/plansCard";
import { PageHeader } from "@/components/shared/sections/page-header";

const page = () => {
  return (
    <>
      <PageHeader
        title="Membership Plans"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Membership Plans",
            href: "/plans",
          },
        ]}
      />
      <div className="container section px-4 my-[80px]">
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
              cardprice="8,000.00"
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
    </>
  );
};

export default page;
