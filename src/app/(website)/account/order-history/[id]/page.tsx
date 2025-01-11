import React from "react";
import { BillingDetails } from "./_components/BillingDetails";
import OrderDetailsTable from "./_components/OrderDetailsTable";
import OrderProgress from "./_components/OrderProgress";
import OrderProgressVertical from "./_components/OrderProgressVertical";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between mb-10">
        <div className="text-[#2A6C2D] font-bold text-[32px]">
          Order Details
        </div>
        <div className="hidden md:block">
          <ButtonArrow text="Back to List" />
        </div>
      </div>
      <BillingDetails />
      <div className="pt-10 pb-10 hidden md:block">
        <OrderProgress />
      </div>
      <div className="md:hidden grid place-items-center">
        <div>
          <OrderProgressVertical />
        </div>
      </div>
      <OrderDetailsTable />
    </div>
  );
};

export default page;
