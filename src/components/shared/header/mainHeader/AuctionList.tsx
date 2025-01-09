import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import AuctionModal from "./AuctionModal";

const AuctionList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <span
        className="flex items-center gap-1"
        onClick={() => handleItemClick()}
      >
        Auction <ChevronDown className="h-4 w-4" />{" "}
      </span>
      <AuctionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        auctionItem={AuctionList}
      />
    </div>
  );
};

export default AuctionList;
