import React from 'react';  
import { Dialog } from '@headlessui/react'; // or wherever your modal comes from  

interface AuctionModalProps {  
  isOpen: boolean;  
  onClose: () => void;  
  auctionItem: any; // Adjust to fit your item's structure  
}  

const AuctionModal: React.FC<AuctionModalProps> = ({ isOpen, onClose,  }) => {  
  return (  
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-30 overflow-y-auto  mt-[125px] rounded-none backdrop-blur-[12px]">  
      <div className="fixed inset-0 bg-black  opacity-50" aria-hidden="true" />  
      <div className="flex  justify-center ">  
        <Dialog.Panel className="bg-white rounded-none p-6 shadow-lg z-50 lg:min-w-[548px]">  
          <Dialog.Title className="md:text-[25px] font-semibold mb-4">All Auctions</Dialog.Title>
          <Dialog.Title className="md:text-[25px] font-semibold mb-4">Live Auctions</Dialog.Title>
        </Dialog.Panel>  
      </div>  
    </Dialog>  
  );  
};  

export default AuctionModal;