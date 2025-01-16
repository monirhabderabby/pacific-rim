import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import PagesModal from "./PagesModal";

const PagesList: React.FC = () => {
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
        Pages <ChevronDown className="h-4 w-4" />{" "}
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
