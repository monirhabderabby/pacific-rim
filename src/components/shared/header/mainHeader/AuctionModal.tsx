import { Dialog } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuctionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuctionModal: React.FC<AuctionModalProps> = ({ isOpen, onClose }) => {
  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 }, // Start off-screen to the left
    visible: { opacity: 1, y: 0 }, // Slide in and become visible
    exit: { opacity: 0, y: -20 }, // Slide out to the left
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-30 overflow-y-auto rounded-none backdrop-blur-[4px] mt-[74px]"
        >
          {/* Background overlay with fade-in animation */}
          <motion.div
            className="fixed inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Initial state: above the viewport and invisible
            animate={{ y: 0, opacity: 1 }} // Slide into position and become visible
            exit={{ y: -50, opacity: 0 }} // Slide up and fade out
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex justify-center ml-[-70px]"
          >
            <Dialog.Panel className="bg-white shadow-lg rounded-b-[8px] z-50">
              {/* Staggered Links */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1, // Stagger animation for each child
                    },
                  },
                }}
              >
                <motion.div variants={linkVariants}>
                  <Dialog.Title className="w-full">
                    <Link
                      href="/all-auctions"
                      className="inline-block hover:bg-[#EAF0EA] w-full p-6 py-[12px] text-black font-normal text-[16px]"
                      onClick={onClose}
                    >
                      All Auctions
                    </Link>
                  </Dialog.Title>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Dialog.Title className="w-full">
                    <Link
                      href="/live-auctions"
                      className="inline-block hover:bg-[#EAF0EA] w-full p-6 py-[12px] text-black font-normal text-[16px]"
                      onClick={onClose}
                    >
                      Live Auctions
                    </Link>
                  </Dialog.Title>
                </motion.div>
              </motion.div>
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AuctionModal;
