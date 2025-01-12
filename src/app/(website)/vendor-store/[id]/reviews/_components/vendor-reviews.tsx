"use Client";
import StoreHeading from "@/app/(website)/vendor-store/[id]/about/_components/storeHeading";
import VendorReviewCard from "@/components/shared/cards/VendorReviewCard";

const VendorReviews = () => {
  return (
    <div className="w-full lg:w-[870px] border-[1px] border-[#C5C5C5] rounded-[12px]  ">
      <div className="py-5 pl-5 border-b-[1px]  border-[#C5C5C5] ">
        <StoreHeading heading="About My Store" />
      </div>
      {/* ===========card start========== */}

      <VendorReviewCard
        imageSrc="/assets/img/reviews-card-imag.png.png"
        name="Leslie Alexander"
        date="16 June 2025"
        rating={3}
        review="Welcome to Pacific Rim Fusion, the leading B2B online auction marketplace dedicated to empowering local cannabis farms and businesses in markets often dominated by larger operators. Operating in Federally legal jurisdictions including Thailand, Germany, and Canada, we specialize in facilitating the sale of surplus cannabis and cannabis-related products through a secure and dynamic platform."
        storeName=" American Beauty"
      />
    </div>
  );
};

export default VendorReviews;
