import React, { FC } from 'react';

interface OrderTotalProps {
  subtotal: number;
  shippingCharge?: number;
}

const OrderTotal: FC<OrderTotalProps> = ({ subtotal, shippingCharge = 0 }) => {
  const total = subtotal + shippingCharge;

  return (
    <div className="flex flex-col mt-5 mb-5 w-full font-medium leading-tight whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full">
        <div className="self-stretch my-auto text-[#9C9C9C] font-[16px] leading-[20px]">Subtotal</div>
        <div className="self-stretch my-auto text-[#181818] font-[16px] leading-[20px]">₿{subtotal}</div>
      </div>
      <div className="mt-4 w-full border border-solid bg-[#A8C3A9] border-[#A8C3A9] min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-[#9C9C9C] font-[16px] leading-[20px]">Shipping</div>
        <div className="self-stretch my-auto text-[#181818] font-[16px] leading-[20px]">₿{shippingCharge}</div>
      </div>
      <div className="mt-4 w-full border border-solid bg-[#A8C3A9] border-[#A8C3A9] min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-[#9C9C9C] font-[16px] leading-[20px]">Total</div>
        <div className="self-stretch my-auto text-xl text-[#181818] font-[16px] leading-[20px]">₿{total}</div>
      </div>
    </div>
  );
};

export default OrderTotal;
