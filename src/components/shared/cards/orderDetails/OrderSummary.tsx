import * as React from "react";
import { OrderDetails } from "./types";

interface OrderSummaryProps {
  orderDetails: OrderDetails;
}

export function OrderSummary({ orderDetails }: OrderSummaryProps) {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto font-medium leading-tight rounded-xl border border-solid border-stone-300 md:h-[295px] md:min-w-[240px] md:w-[216px]">
      <div className="flex justify-between items-start w-full text-base">
        <div className="flex flex-col justify-center p-3 border-b border-solid border-b-stone-300 w-[104px]">
          <div className="text-green-800">Order ID:</div>
          <div className="mt-1 text-black">{orderDetails.orderId}</div>
        </div>
        <div className="shrink-0 w-0 border border-solid bg-stone-300 border-stone-300 h-[76px]" />
        <div className="flex flex-col flex-1 shrink justify-center p-3 border-b border-solid basis-0 border-b-stone-300">
          <div className="text-green-800">Payment Method:</div>
          <div className="mt-1 text-black">{orderDetails.paymentMethod}</div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between w-full">
        <div className="flex flex-col p-3 w-full text-base">
          {orderDetails.summaryItems.map((item, index) => (
            <div key={index} className="flex gap-10 justify-between items-center w-full whitespace-nowrap mt-4 first:mt-0">
              <div className="self-stretch my-auto text-neutral-400">
                {item.label}
              </div>
              <div className="self-stretch my-auto text-neutral-700">
                {item.value}
              </div>
            </div>
          ))}
          <div className="mt-3 md:w-[110%] md:transform md:-translate-x-[12px] border border-solid bg-neutral-400 border-stone-300 min-h-[1px]" />
          <div className="flex gap-10 justify-between items-center p-3  w-full whitespace-nowrap">
            <div className="self-stretch my-auto text-base text-neutral-400">
              Total
            </div>
            <div className="self-stretch my-auto text-lg text-neutral-700">
              {orderDetails.total}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}