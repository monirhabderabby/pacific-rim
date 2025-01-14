"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { featureProducts } from "@/data/featured";
import { Flame, Heart, Minus, Plus, RefreshCw } from "lucide-react";
import { useState } from "react";
import { ProductImageGallery } from "./ProductImageGallery";
import { SizeSelector } from "./SizeSelector";
import { StarRating } from "./StarRating";
import { ProductData, SizeOption } from "./types";

const productData: ProductData = {
  title: "American Beauty",
  store: "American Beauty",
  rating: 5,
  price: 7000.0,
  originalPrice: 9250.0,
  description:
    "CBD products have seamlessly integrated into the wellness and lifestyle industry, appealing to a broad audience seeking natural alternatives for health support. Many people turn to CBD as part of their daily routine to promote balance and relaxation, often combining it with yoga, meditation, or fitness.",
  sizes: [
    { value: "25g", isSelected: false },
    { value: "50g", isSelected: false },
    { value: "100g", isSelected: true },
    { value: "500g", isSelected: false },
  ],
  images: [
    { src: "/assets/img/prodDetails.png", alt: "Product thumbnail 1" },
    { src: "/assets/img/prodDetails.png", alt: "Product thumbnail 2" },
    { src: "/assets/img/prodDetails.png", alt: "Product thumbnail 3" },
  ],
  mainImage: { src: "/assets/img/prodDetails.png", alt: "Product main image" },
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState<SizeOption[]>(productData.sizes);
  // const [selectedSize, setSelectedSize] = useState(
  //   productData.sizes.find((size) => size.isSelected)?.value || ""
  // );
  const [isWishlist, setIsWishlist] = useState(false);
  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleSizeSelect = (sizeValue: string) => {
    const updatedSizes = sizes.map((size) => ({
      ...size,
      isSelected: size.value === sizeValue, // Mark only the selected size
    }));
    setSizes(updatedSizes); // Update sizes state
    // setSelectedSize(sizeValue); // Update selected size
  };
  const handleWishlistToggle = () => {
    setIsWishlist((prev) => !prev); // Toggle wishlist state
  };

  return (
    <div>
      <SectionHeading heading={"Our products"} subheading={""} />
      <section className="flex justify-center items-center pt-10 px-4">
        <div className="flex flex-col w-full max-w-[1200px]">
          <div className="flex flex-wrap gap-8 w-full ">
            <ProductImageGallery
              thumbnails={productData.images}
              mainImage={productData.mainImage}
            />
            <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[30%]">
              <div className="flex flex-col max-w-full">
                <div className="flex flex-col w-full">
                  <div className="text-4xl font-semibold leading-tight text-[#2A6C2D]">
                    {productData.title}
                  </div>
                  <div className="flex flex-col items-start mt-2 w-full">
                    <StarRating rating={productData.rating} />
                    <div className="flex gap-2 items-center mt-2 text-base leading-tight text-[#E10E0E] -translate-x-[7px]">
                      <div className="flex items-center self-stretch my-auto">
                        <Flame className="h-[15px]" />
                        <div className="self-stretch my-auto font-[16px]">
                          Hot
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-end self-start mt-2 font-medium leading-tight">
                    <div className="self-stretch text-lg whitespace-nowrap text-zinc-900">
                      ₿{productData.price.toFixed(2)}
                    </div>
                    <div className="self-stretch text-sm text-[#9C9C9C]">
                      <span className="line-through">
                        ₿{productData.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-full text-[#444444] font-[16px] leading-[19px]">
                  {productData.description}
                </div>
                <div className="flex gap-4 mt-3">
                  <span className="text-[#9C9C9C]">Store:</span>
                  <div className=" flex space-x-2  items-center">
                    <Avatar className="w-[20px] h-[20px]">
                      <AvatarImage
                        src="/assets/img/store.png"
                        alt="store name"
                      />
                    </Avatar>
                    <div className="text-[#2a6c2d]">{productData.store}</div>
                  </div>
                </div>
                <div className="mt-5 w-full border border-solid  border-b-stone-700 h-[1px]" />
                <div className="flex flex-col mt-6 w-full">
                  {/* Size Selector */}
                  <SizeSelector sizes={sizes} onSelect={handleSizeSelect} />
                  <div className="flex gap-4 items-start mt-4 w-full">
                    <div className="flex gap-2.5 items-center px-2.5 h-10 bg-white rounded-3xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.05)] w-[163px]">
                      <button
                        onClick={() => handleQuantityChange(false)}
                        className="flex gap-2.5 items-center self-stretch px-2 py-2.5 my-auto rounded-lg min-h-[41px] w-[41px]"
                        aria-label="Decrease quantity"
                      >
                        <Minus />
                      </button>
                      <div className="self-stretch px-2.5 py-2.5 my-auto text-xl leading-tight text-center whitespace-nowrap min-h-[41px] text-[#444444] w-[41px]">
                        {quantity}
                      </div>
                      <button
                        onClick={() => handleQuantityChange(true)}
                        className="flex gap-2.5 items-center self-stretch px-2 py-2.5 my-auto rounded-lg min-h-[41px] w-[41px]"
                        aria-label="Increase quantity"
                      >
                        <Plus />
                      </button>
                    </div>
                    {/* wishlist----------------- */}
                    <button
                      onClick={handleWishlistToggle}
                      className={`flex gap-2.5 justify-center items-center px-2 bg-white rounded-lg border border-solid ${
                        isWishlist
                          ? "border-red-500 text-red-500"
                          : "border-stone-300"
                      } h-[42px] min-h-[41px] w-[43px]`}
                      aria-label="Add to wishlist"
                    >
                      <Heart fill={isWishlist ? "red" : "none"} />
                    </button>
                  </div>
                  <div className="flex gap-8 items-center mt-4 w-full text-base leading-tight">
                    <button className="gap-2.5 self-stretch px-6 py-3 my-auto font-medium text-white bg-[#2a6c2d] rounded-lg min-h-[43px] w-[170px] max-md:px-5">
                      Add to cart
                    </button>
                    <button className="gap-2.5 self-stretch px-6 py-3 my-auto font-semibold text-[#2a6c2d] rounded-lg border border-[#2a6c2d] border-solid min-h-[43px] w-[170px] max-md:px-5">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden gap-2 items-center mt-12 w-full rounded-lg border border-solid border-slate-400 max-md:mt-10 h-[42px]">
                <div className="flex gap-2.5 justify-center items-center self-stretch px-2 py-2.5 my-auto rounded-lg min-h-[41px] w-[43px]">
                  <RefreshCw />
                </div>
                <div className="self-stretch my-auto text-base leading-tight text-black">
                  No return Policy
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 w-full text-center max-md:max-w-full">
            <div className="text-2xl font-semibold leading-tight text-green-800 max-md:max-w-full">
              Description
            </div>
            <div className="mt-5 text-base leading-5 text-neutral-700 max-md:max-w-full">
              {productData.description}
            </div>
          </div>
        </div>
      </section>

      <section className="my-[80px]  container">
        <h1 className="text-[28px] font-semibold text-[#2A6C2D] leading-[33.6px]">
          Explore related Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[24px] gap-[30px]">
          {featureProducts.slice(0, 4).map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
