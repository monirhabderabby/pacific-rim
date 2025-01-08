import * as React from "react";
import { AddressCard } from "./AddressCard";
import { OrderSummary } from "./OrderSummary";
import { AddressInfo, OrderDetails } from "./types";

const addressInfo: AddressInfo = {
  name: "Cameron Williamson",
  address: "4517 Washington Ave. Manchester, Kentucky 39495",
  email: "georgia.young@example.com",
  phone: "(+33)7 75 55 65 33"
};

const orderDetails: OrderDetails = {
  orderId: "#4152",
  paymentMethod: "Paypal",
  summaryItems: [
    { label: "Subtotal", value: "₿7,000.00" },
    { label: "Shipping Estimate", value: "₿7,800.00" },
    { label: "Tax Estimate", value: "₿50.00" },
    { label: "Total Item", value: "3" }
  ],
  total: "₿48000.00"
};

export function BillingDetails() {
  return (
    <div className="w-[90%] mx-auto mb-5 lg:w-[50%]">
      <div className="flex flex-wrap gap-8 items-center  max-w-[879px] min-h-[300px]">
      <div className="flex overflow-hidden flex-wrap grow shrink justify-between items-start self-stretch my-auto bg-white rounded-xl border border-solid border-stone-300 md:w-[516px] max-md:max-w-full">
        <AddressCard title="Billing Address" info={addressInfo} />
        <div className="shrink-0 w-0 border border-solid bg-stone-300 border-stone-300 h-[295px] hidden md:block" />
        <AddressCard title="Shipping Address" info={addressInfo} />
      </div>
      <OrderSummary orderDetails={orderDetails} />
    </div>
    </div>
    
  );
}