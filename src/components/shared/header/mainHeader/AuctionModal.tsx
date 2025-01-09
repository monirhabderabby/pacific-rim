import { Dialog } from "@headlessui/react"; // or wherever your modal comes from
import Link from "next/link";
import React from "react";

interface AuctionModalProps {
  isOpen: boolean;
  onClose: () => void;
  auctionItem: any; // Adjust to fit your item's structure
}

const AuctionModal: React.FC<AuctionModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-30 overflow-y-auto  rounded-none backdrop-blur-[4px] mt-[120px]"
    >
      <div className="fixed  inset-0 bg-black  opacity-50" aria-hidden="true" />
      <div className="flex  justify-center ">
        <Dialog.Panel className="bg-white ml-[50px]  shadow-lg rounded-b-[8px] z-50 ">
          <Dialog.Title className="w-full">
            <Link
              href="/products"
              className=" inline-block hover:bg-gray-100 w-full p-6 py-[12px]"
              onClick={onClose}
            >
              All Auctions
            </Link>
          </Dialog.Title>
          <Dialog.Title className="w-full">
            <Link
              href="/products"
              className=" inline-block hover:bg-gray-100 w-full p-6 py-[12px] rounded-[8px]"
              onClick={onClose}
            >
              Live Auctions
            </Link>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AuctionModal;
