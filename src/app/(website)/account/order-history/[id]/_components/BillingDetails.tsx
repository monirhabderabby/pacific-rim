import * as React from "react";
import { AddressCard } from "./AddressCard";
import { OrderSummary } from "./OrderSummary";
import { AddressInfo, OrderDetails } from "./types";

const addressInfo: AddressInfo = {
  name: "Cameron Williamson",
  address: "4517 Washington Ave. Manchester, Kentucky 39495",
  email: "georgia.young@example.com",
  phone: "(+33)7 75 55 65 33",
};

const orderDetails: OrderDetails = {
  orderId: "#4152",
  paymentMethod: "Paypal",
  summaryItems: [
    { label: "Subtotal", value: "₿7,000.00" },
    { label: "Shipping Estimate", value: "₿7,800.00" },
    { label: "Tax Estimate", value: "₿50.00" },
    { label: "Total Item", value: "3" },
  ],
  total: "₿48000.00",
};

export function BillingDetails() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-8 items-center  lg:min-w-[879px] min-h-[300px]">
        <div className="relative flex overflow-hidden flex-wrap grow shrink justify-between items-start self-stretch my-auto bg-white rounded-xl border border-solid border-stone-300 md:w-[516px] max-md:max-w-full">
          <AddressCard title="Billing Address" info={addressInfo} />
          <div className="shrink-0 w-0 border border-solid border-t-stone-300 h-[295px] hidden md:block" />
          <div className="absolute shrink-0 border border-solid border-t-stone-300 w-full h-[1px] md:hidden top-[320px] right-0]" />
          <div className="mt-14 md:mt-0">
            <AddressCard title="Shipping Address" info={addressInfo} />
          </div>
        </div>
        <OrderSummary orderDetails={orderDetails} />
      </div>
    </div>
  );
}
