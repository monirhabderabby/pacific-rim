"use client";
// package import
import { Heart } from "lucide-react";
import Image from "next/image";

// local import

import { Button } from "@/components/ui/button";
import { FeatureCardType } from "@/data/featured";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProductCard({
  product,
}: {
  product: FeatureCardType;
}) {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlist((prev) => !prev); // Toggle wishlist state
  };

  return (
    <Link
      href={`/products/534543`}
      className="flex overflow-hidden relative flex-col grow shrink self-stretch p-3 my-auto mx-auto bg-white rounded-[8px] border border-gray-200 border-solid w-full md:w-[260px] hover:shadow-feature_card transition-shadow duration-300 cursor-pointer "
    >
      <div className="overflow-hidden rounded-[8px]">
        <Image
          loading="lazy"
          src={product.image}
          alt="Product image"
          width={300}
          height={100}
          className="object-contain z-0 w-full rounded-[8px] aspect-[1.07]  hover:scale-105 duration-300"
        />
      </div>

      {/* ======= add wishlist ========= */}
      <div className="flex absolute top-5 z-0 flex-col w-[32px] right-[20px]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleWishlistToggle();
          }}
          className={`flex gap-2.5 justify-center items-center px-2 bg-white rounded-full   ${
            isWishlist
              ? " border-none text-white bg-primary"
              : " border-blue-500 text-black hover:bg-hover-gradient hover:text-white"
          }  min-h-[32px] w-[32px]`}
          aria-label="Add to wishlist"
          // className="flex gap-2.5 items-center p-2 w-full h-8 bg-white hover:bg-primary-green rounded-[30px] transition-colors duration-300 group"
        >
          <Heart className="group-hover:fill-white hover:border-0 w-4 h-4" />
        </button>
      </div>
      <div className="flex z-0 flex-col mt-2 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-tight text-[#E10E0E] whitespace-nowrap">
              <div className="flex gap-1 items-center self-stretch my-auto">
                {/* hot icon  */}
                {/* <Image
                  loading="lazy"
                  width={9}
                  height={9}
                  src="/assets/svg/hot.svg"
                  alt="hot icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] fill-[#E10E0E] w-[9px]"
                /> */}
                <div
                  className={cn(
                    "text-[12px] font-normal my-auto",
                    product.stoke === "In Stock"
                      ? "text-[#2A6C2D]"
                      : "text-red-500"
                  )}
                >
                  {product.stoke}
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-start self-stretch my-auto">
              {[1, 2, 3, 4].map((star) => (
                <Image
                  key={star}
                  loading="lazy"
                  src="/assets/svg/star-fill.svg"
                  alt="star fill"
                  height={12}
                  width={12}
                  className="object-contain shrink-0 w-3 aspect-square fill-amber-500"
                />
              ))}
              <Image
                loading="lazy"
                src="/assets/svg/star-outline.svg"
                alt="star outline"
                height={12}
                width={12}
                className="object-contain shrink-0 w-3 aspect-square fill-stone-300"
              />
            </div>
          </div>
          <div className="mt-2 text-[16px] text-left font-medium leading-[19.2px] text-gradient">
            American Beauty
          </div>
          <div className="flex gap-1 items-end self-start mt-2 font-medium leading-tight">
            <div className="self-stretch text-base text-[16px] leading-[19.2px] whitespace-nowrap text-[#1A1A1A]">
              ₿{product.price}
            </div>
            <div className="self-stretch text-[12px] leading-[14.4px] font-medium text-[#9C9C9C]">
              <span className="line-through">₿{product.originalPrice}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            console.log("add to cart");
          }}
          className=" mt-[16px] w-full "
          aria-label="Add to cart"
        >
          Add to cart
        </Button>
      </div>
    </Link>
  );
}
