import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface DropdownProps {
  label: string;
  links: { href: string; label: string }[];
  onClose: () => void;
}

export default function PagesMobileNav({ label, links, onClose }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className="flex items-center w-full text-left rounded-lg px-6 py-2 text-[20px] font-normal text-black hover:bg-[#E6EEF6]"
      >
        {label}<ChevronRight className="w-[16px] h-[16px]"/>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
      {isOpen && (

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full"
        >
          {links.map((link, index) => (
            <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -10 }} // Start slightly left and hidden
            animate={{ opacity: 1, y: 0 }}  // Move into place and fade in
            exit={{ opacity: 0, y: -10 }}   // Fade out and move left when closing
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: index * 0.05, // Stagger animation for each link
            }}
          >
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                closeDropdown();
                onClose(); // Ensures the mobile menu also closes
              }}
              className="block pl-10 py-2 text-[20px] font-normal text-black hover:bg-[#E6EEF6]"
            >
              {link.label}
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
