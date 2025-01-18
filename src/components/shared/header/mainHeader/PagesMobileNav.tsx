import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

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
      {isOpen && (
        <div className="w-full ">
          {links.map((link) => (
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
          ))}
        </div>
      )}
    </div>
  );
}
