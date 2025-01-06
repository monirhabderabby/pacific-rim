import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductsYouMayLike from "./_components/products-you-may-like";

const Page = () => {
  return (
    <>
      <CartBody />
      <ProductsYouMayLike />
    </>
  );
};

export default Page;

const CartBody = () => {
  return (
    <div className="section container border-b-2 pb-[40px] border-primary-green-hover/20">
      <div className="flex flex-col justify-center w-full items-center">
        <h1 className="text-[#2A6C2D] text-[32px] font-semibold leading-[38.4px] text-center">
          Sorry
        </h1>
        <p className="text-[20px] text-[#6D6D6D] font-normal leading-[24px] text-center">
          Your shopping Cart is Empty!
        </p>
        <Image
          src="/assets/img/cart.png"
          width={537}
          height={413}
          alt="cart image"
          className="mt-10"
        />

        <Button className="bg-[#2A6C2D] hover:bg-[#2A6C2D]/80 rounded-[8px] w-full max-w-[537px] mt-5">
          Keep Shopping
        </Button>
      </div>
    </div>
  );
};
