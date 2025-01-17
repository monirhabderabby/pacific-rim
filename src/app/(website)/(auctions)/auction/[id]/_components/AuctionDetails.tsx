"use client";
import VendorReviewCard from "@/components/shared/cards/VendorReviewCard";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Flame, Heart } from "lucide-react";
import { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import { ProductImageGallery } from "./ProductImageGallery";
import { ReviewForm } from "./ReviewForm";
import { StarRating } from "./StarRating";
import { BidData, ProductData } from "./types";

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
const bidsData: BidData[] = [
  {
    bidderName: "Osama Usmani",
    biddingTime: "1 Sep, 20225",
    bidAmount: "$135.00",
  },
  {
    bidderName: "Auction started",
    biddingTime: "5 Sep, 2025",
    bidAmount: "$135.00",
  },
  {
    bidderName: "Martony Guiang",
    biddingTime: "8 Sep, 2025",
    bidAmount: "$135.00",
  },
  {
    bidderName: "Oregon Greener",
    biddingTime: "15 Sep, 2025",
    bidAmount: "$700.00",
  },
];
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
const AuctionDetails = () => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [islive, setIsLive] = useState(false);
  const [biddingPrice, setBiddingPrice] = useState<number | string>("");

  const handleWishlistToggle = () => {
    setIsWishlist((prev) => !prev); // Toggle wishlist state
  };
  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBiddingPrice(value === "" ? "" : Number(value));
  };
  const handleBidClick = () => {
    console.log(biddingPrice);
  };

  return (
    <div>
      <SectionHeading heading={"Our products"} subheading={""} />
      <section className=" flex justify-center items-center pt-10 px-4">
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
                    {/* <div className="self-stretch text-lg whitespace-nowrap text-zinc-900">
                      ₿{productData.price.toFixed(2)}
                    </div>
                    <div className="self-stretch text-sm text-[#9C9C9C]">
                      <span className="line-through">
                        ₿{productData.originalPrice.toFixed(2)}
                      </span>
                    </div> */}

                    <span className="text-[#2A6C2D] text-[18px]">
                      Winning Bid:
                    </span>
                    <span className="text-[#1A1A1A] text-[18px]">$7000</span>
                  </div>
                </div>
                <div className="mt-4 w-full text-[#444444] font-[16px] leading-[19px]">
                  {productData.description}
                </div>
                {islive && (
                  <div className="pt-5 pb-3 w-full">
                    <CountdownTimer />
                  </div>
                )}
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

                {/* Bidding input ------------------------------------ */}

                {islive && (
                  <div className="flex flex-col max-w-[400px] pt-[25px]">
                    <label
                      htmlFor="bidInput"
                      className="text-base leading-tight text-neutral-700"
                    >
                      Your Bid Price
                    </label>
                    <div className="flex justify-between mt-2 w-full h-11 whitespace-nowrap rounded-md border border-solid border-neutral-400">
                      <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#2a6c2d] bg-[#eaf0ea] rounded-lg h-[42px] w-[42px] flex items-center justify-center">
                        $
                      </div>
                      <input
                        id="bidInput"
                        type="number"
                        onChange={handleBidChange}
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 pb-2  my-auto text-base leading-snug rounded-lg min-w-[240px] text-black"
                        aria-label="Bid amount in dollars"
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col mt-6 w-full">
                  {/* wishlist and bid----------------- */}
                  <div className="flex gap-[40px] items-center justify-between mt-2 w-full">
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
                    {islive ? (
                      <Button
                        className="max-w-[320px] text-white bg-[#2a6c2d] px-6  rounded-lg h-[43px] flex justify-center items-center w-full"
                        onClick={handleBidClick}
                      >
                        Bid Now
                      </Button>
                    ) : (
                      <button className="max-w-[320px] text-white bg-[#C5C5C5] px-6  rounded-lg h-[43px] flex justify-center items-center w-full">
                        Expired
                      </button>
                    )}
                  </div>
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
      <div className="container mt-[50px]">
        <h2 className="text-[#2c6534] text-center text-[25px] font-[600]">
          Bids
        </h2>
        <div className="mb-[20px]">
          <h3 className="text-[#2c6534] text-[20px] font-[600]">
            Total Bids Placed:
          </h3>
          <p className="text-[#3D3D3D] text-[16px] font-[400]">
            Auction has expired
          </p>
          <p className="text-[#3D3D3D] text-[16px] font-[400]">
            Highest bidder was: Oregon Greener
          </p>
        </div>
        <div className="border border-[#C5C5C5] rounded-lg overflow-hidden text-center">
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow className="bg-[#E6E6E6]">
                <TableHead className="border-r-[1px] border-black text-center w-1/4 text-[#444444]">
                  Bidder Name
                </TableHead>
                <TableHead className="border-r-[1px] border-black text-center w-1/4 text-[#444444]">
                  Bidder Time
                </TableHead>
                <TableHead className="border-r-[1px] border-black text-center w-1/4 text-[#444444]">
                  Bid
                </TableHead>
                <TableHead className="text-center w-1/4 text-[#444444]">
                  Auto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[#444444]">
              {bidsData.map((bidData, index) => (
                <TableRow key={index}>
                  <TableCell className="border-r-[1px] border-black w-1/4">
                    {bidData.bidderName}
                  </TableCell>
                  <TableCell className="border-r-[1px] border-black w-1/4">
                    {bidData.biddingTime}
                  </TableCell>
                  <TableCell className="border-r-[1px] border-black w-1/4">
                    {bidData.bidAmount}
                  </TableCell>
                  <TableCell className="">{""}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* comments---------------------------------------------------------------- */}
        <div className="mb-[50px]">
          <h2 className="text-[#2c6534] text-center text-[25px] font-[600] mt-[50px]">
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
                  storeName={review.storeName}
                />
              </div>
            ))}
            <div className="w-full h-[1px] border-b-[1px] border-[#C5C5C5] mb-[30px]" />
          </div>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
