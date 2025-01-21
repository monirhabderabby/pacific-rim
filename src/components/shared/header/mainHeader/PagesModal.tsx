import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


interface PagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  auctionItem: any; // Adjust to fit your item's structure
}

const PagesModal: React.FC<PagesModalProps> = ({ isOpen, onClose }) => {
  // Links array as a variable
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/faqs', label: 'FAQ' },
    { href: '/membership-plans', label: 'Membership Plans' },
    { href: '/vendor-store', label: 'Vendor Store' },
    { href: '/404', label: '404 Page' },
  ];

  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 }, // Start off-screen to the left
    visible: { opacity: 1, y: 0 }, // Slide in and fade in
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
          {/* Background Overlay Animation */}
          <motion.div
            initial={{ opacity: 0 }} // Invisible at the start
            animate={{ opacity: 1 }} // Fade in
            exit={{ opacity: 0 }} // Fade out
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />

          {/* Modal Content Animation */}
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Start above viewport and invisible
            animate={{ y: 0, opacity: 1 }} // Slide in and become visible
            exit={{ y: -50, opacity: 0 }} // Slide up and fade out
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex justify-center ml-[270px]"
          >
            <Dialog.Panel className="bg-white shadow-lg rounded-b-[8px] z-50">
              {/* Staggered Link Animations */}
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants} // Use the defined variants
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05, // Add delay for staggered effect
                  }}
                >
                  <Dialog.Title className="w-full">
                    <Link
                      href={link.href}
                      className="inline-block hover:bg-[#EAF0EA] w-full p-6 py-[12px] text-black font-normal text-[16px]"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </Dialog.Title>
                </motion.div>
              ))}
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default PagesModal;
