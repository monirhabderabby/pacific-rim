import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import PagesModal from "./PagesModal";

const PagesList: React.FC = () => {
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
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => handleItemClick()}
      >
        Pages {isExpanded ? <ChevronUp className="h-4 w-4 text-black" /> : <ChevronDown className="h-4 w-4 text-black"/>}
      </span>
      <PagesModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        auctionItem={PagesList}
      />
    </div>
  );
};

export default PagesList;
