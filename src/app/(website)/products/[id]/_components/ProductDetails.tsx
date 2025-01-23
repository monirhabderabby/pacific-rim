"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import VendorReviewCard from "@/components/shared/cards/VendorReviewCard";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { featureProducts } from "@/data/featured";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, Heart, Minus, Plus, RefreshCw } from "lucide-react";
import { useRef, useState } from "react";
import { ProductImageGallery } from "./ProductImageGallery";
import { ReviewForm } from "./ReviewForm";
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
const reviews = [
  {
    imageSrc: "/assets/img/reviews-card-imag.png.png",
    name: "Leslie Alexander",
    date: "16 June 2025",
    rating: 4,
    review:
      "Welcome to Pacific Rim Fusion, the leading B2B online auction marketplace dedicated to empowering local cannabis farms and businesses in markets often dominated by larger operators. Operating in Federally legal jurisdictions including Thailand, Germany, and Canada, we specialize in facilitating the sale of surplus cannabis and cannabis-related products through a secure and dynamic platform.",
    storeName: "American Beauty",
  },
  {
    imageSrc: "/assets/img/reviews-card-imag.png.png",
    name: "Leslie Alexander",
    date: "10 May 2025",
    rating: 4,
    review:
      "Welcome to Pacific Rim Fusion, the leading B2B online auction marketplace dedicated to empowering local cannabis farms and businesses in markets often dominated by larger operators. Operating in Federally legal jurisdictions including Thailand, Germany, and Canada, we specialize in facilitating the sale of surplus cannabis and cannabis-related products through a secure and dynamic platform.",
    storeName: "Beauty Green",
  },
  {
    imageSrc: "/assets/img/reviews-card-imag.png.png",
    name: "Leslie Alexander",
    date: "5 April 2025",
    rating: 5,
    review:
      "Welcome to Pacific Rim Fusion, the leading B2B online auction marketplace dedicated to empowering local cannabis farms and businesses in markets often dominated by larger operators. Operating in Federally legal jurisdictions including Thailand, Germany, and Canada, we specialize in facilitating the sale of surplus cannabis and cannabis-related products through a secure and dynamic platform.",
    storeName: "Green Leaf",
  },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState<SizeOption[]>(productData.sizes);
  const [isWishlist, setIsWishlist] = useState(false);

  //animation
  // const descriptionRef = useRef(null);
  const relatedItemsRef = useRef(null);
  const reviewSectionRef = useRef(null);

  // Scroll progress for Description Section
  // const { scrollYProgress: descriptionScrollY } = useScroll({
  //   target: descriptionRef,
  //   offset: ["0 1", "1.33 1"],
  // });
  // const descriptionScale = useTransform(descriptionScrollY, [0, 1], [0.8, 1]);
  // const descriptionOpacity = useTransform(descriptionScrollY, [0, 1], [0.6, 1]);

  // Scroll progress for Related Items Section
  const { scrollYProgress: relatedItemsScrollY } = useScroll({
    target: relatedItemsRef,
    offset: ["0 1", "1.33 1"],
  });
  const relatedItemsScale = useTransform(relatedItemsScrollY, [0, 1], [0.8, 1]);
  const relatedItemsOpacity = useTransform(
    relatedItemsScrollY,
    [0, 1],
    [0.6, 1]
  );

  // Scroll progress for Review Section
  const { scrollYProgress: reviewSectionScrollY } = useScroll({
    target: reviewSectionRef,
    offset: ["0 1", ".8 1"],
  });
  const reviewSectionScale = useTransform(
    reviewSectionScrollY,
    [0, 1],
    [0.8, 1]
  );
  const reviewSectionOpacity = useTransform(
    reviewSectionScrollY,
    [0, 1],
    [0.6, 1]
  );

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
          <div className="flex flex-wrap gap-8 w-full">
            <ProductImageGallery
              thumbnails={productData.images}
              mainImage={productData.mainImage}
            />
            <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[30%]">
              <div className="flex flex-col max-w-full">
                <div className="flex flex-col w-full">
                  <div className="text-4xl font-semibold leading-tight text-gradient">
                    {productData.title}
                  </div>
                  <div className="flex flex-col items-start mt-2 w-full">
                    <StarRating
                      rating={productData.rating}
                      onChange={() => {}}
                    />
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
                    <div className="text-gradient">{productData.store}</div>
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
                    <Button className="gap-2.5 self-stretch min-h-[43px] w-[170px] max-md:px-5">
                      Add to cart
                    </Button>
                    <Button
                      variant={"outline"}
                      className="gap-2.5 self-stretch my-auto min-h-[43px] w-[170px] "
                    >
                      Buy Now
                    </Button>
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
            <div className="text-2xl font-semibold leading-tight text-gradient max-md:max-w-full">
              Description
            </div>
            <div className="mt-5 text-base leading-5 text-neutral-700 max-md:max-w-full">
              {productData.description}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="my-[80px]  container"
        ref={relatedItemsRef}
        style={{
          scale: relatedItemsScale,
          opacity: relatedItemsOpacity,
        }}
      >
        <h1 className="text-[28px] font-semibold text-gradient leading-[33.6px]">
          Explore related Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[24px] gap-[30px]">
          {featureProducts.slice(0, 4).map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>
      <motion.div
        className="mb-[50px] container"
        ref={reviewSectionRef}
        style={{
          scale: reviewSectionScale,
          opacity: reviewSectionOpacity,
        }}
      >
        <h2 className="text-gradient text-center text-[25px] font-[600] mt-[50px]">
          Review
        </h2>
        <div>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-b-[1px] border-[#C5C5C5]  last:border-none "
            >
              <VendorReviewCard
                key={index}
                imageSrc={review.imageSrc}
                name={review.name}
                date={review.date}
                rating={review.rating}
                review={review.review}
              />
            </div>
          ))}
          <div className="w-full h-[1px] border-b-[1px] border-[#C5C5C5] mb-[30px]" />
        </div>
        <ReviewForm />
      </motion.div>
    </div>
  );
};

export default ProductDetails;
