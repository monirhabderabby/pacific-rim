import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import AuctionModal from "./AuctionModal";

const AuctionList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleItemClick = () => {
      setIsModalOpen(true);
      setIsExpanded(true); // Set expanded to true when the modal opens
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setIsExpanded(false); // Set expanded to false when the modal closes
    };
  return (
    <div className="">
      <span
        className="flex items-center gap-1"
        onClick={() => handleItemClick()}
      >
        Auction {isExpanded ? <ChevronUp className="h-4 w-4 text-black" /> : <ChevronDown className="h-4 w-4 text-black"/>}
      </span>
      <AuctionModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AuctionList;
