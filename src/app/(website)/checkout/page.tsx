import React from "react";
import BillingInformationForm from "./_components/BillingInformationForm";
import { OrderSummary } from "./_components/OrderSummery";

interface OrderItem {
    imageUrl: string;
    name: string;
    price: string;
  }
const page = () => {
    const orderItems: OrderItem[] = [
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/309dd736e2d02bfcfc74ee46c760a0e066beefe835a72a816a1956521f87cc20?placeholderIfAbsent=true&apiKey=c0e37a4554bd4723b937f0c0a3d324f4", name: "American Beauty", price: "₿7,000.00" },
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/309dd736e2d02bfcfc74ee46c760a0e066beefe835a72a816a1956521f87cc20?placeholderIfAbsent=true&apiKey=c0e37a4554bd4723b937f0c0a3d324f4", name: "American Beauty", price: "₿7,000.00" },
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/309dd736e2d02bfcfc74ee46c760a0e066beefe835a72a816a1956521f87cc20?placeholderIfAbsent=true&apiKey=c0e37a4554bd4723b937f0c0a3d324f4", name: "American Beauty", price: "₿7,000.00" }
      ];
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <BillingInformationForm />
      </div>
      <div className="max-w-[570px] mt-16">
        {orderItems.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <OrderSummary {...item} />
          </div>
        ))}
        <div className="flex flex-col mt-5 w-full font-medium leading-tight whitespace-nowrap max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full">
          <div className="self-stretch my-auto text-neutral-400">Subtotal</div>
          <div className="self-stretch my-auto text-neutral-900">₿7,000.00</div>
        </div>
        <div className="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
          <div className="self-stretch my-auto text-base text-neutral-400">
            Shipping
          </div>
          <div className="self-stretch my-auto text-lg text-neutral-900">
            Free
          </div>
        </div>
        <div className="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
          <div className="self-stretch my-auto text-base text-neutral-400">
            Total
          </div>
          <div className="self-stretch my-auto text-xl text-neutral-900">
            ₿48000.00
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
