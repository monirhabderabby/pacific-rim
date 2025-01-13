"use client";
import StoreHeading from "@/app/(website)/vendor-store/[id]/about/_components/storeHeading";
import VendorReviewCard from "@/components/shared/cards/VendorReviewCard";

const VendorReviews = () => {
 
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

  return (
    <div className="w-full lg:w-[870px] border-[1px] border-[#C5C5C5] rounded-[12px]">
      <div className="py-5 pl-5 border-b-[1px] border-[#C5C5C5]">
        <StoreHeading heading="About My Store" />
      </div>

     
      <div className=" px-5 ">
        {reviews.map((review, index) => (
          <div key={index}  className="border-b-[1px] border-[#C5C5C5]  last:border-none ">
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
      </div>
    </div>
  );
};

export default VendorReviews;
