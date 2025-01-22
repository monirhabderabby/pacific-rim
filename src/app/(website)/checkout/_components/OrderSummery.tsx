import Image from "next/image";
import * as React from "react";
interface OrderItem {
  imageUrl: string;
  name: string;
  price: string;
}

const OrderSummary: React.FC<OrderItem> = ({
  imageUrl,
  name,
  price,
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full h-[52px]">
        <Image
          loading="lazy"
          src={imageUrl}
          alt={name}
          width={80}
          height={52}
          className=""
        />
        <div className="flex flex-1 shrink gap-10 justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="w-60 text-base font-medium leading-[19px] text-gradient">{name}</div>
          <div className="text-[#181818]">{price}</div>
        </div>
      </div>
      
    </div>
  );
};
export default OrderSummary
