"use client";
import AuctionCard from "@/components/shared/cards/auction-card/auction-card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";


const AllLiveAuctionContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="mb-[70px] mt-[40px]">
      <SectionHeading heading="Our Live Auctions" subheading="" />
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px] container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n, index) => (
          <AuctionCard key={n} isExpired={false} index={index} />
        ))}
      </div>
      <div className="mt-[40px]">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10}
        />
      </div>
    </div>
  );
};

export default AllLiveAuctionContainer;
