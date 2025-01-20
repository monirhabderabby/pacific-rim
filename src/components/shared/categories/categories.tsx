"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Categories() {
  const [category, setCategory] = useState("All Categories");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { name: "Flower", link: "#" },
    { name: "Topicals", link: "#" },
    { name: "Apparel", link: "#" },
    { name: "Concentrates", link: "#" },
    { name: "Tinctures", link: "#" },
    { name: "Accessories", link: "#" },
    { name: "Vape Products", link: "#" },
    { name: "Edibles", link: "#" },
  ];

  // Animation Variants for Dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  // Animation Variants for Links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <DropdownMenu
      onOpenChange={(isOpen) => setDropdownOpen(isOpen)} // Tracks dropdown open state
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="mb-2 lg:mb-0 w-[178px] h-[44px] text-white hover:text-white justify-between gap-2 bg-primary hover:bg-primary-green focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {category}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DropdownMenuContent
              align="start"
              className="w-[180px] rounded-lg p-0 font-medium leading-[24px] text-black mt-[60px] lg:mt-[10px] overflow-hidden"
            >
              {categories.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, delay: index * 0.05 }} // Stagger effect for links
                >
                  <DropdownMenuItem
                    className="w-full p-0"
                    onClick={() => setCategory(item.name)}
                  >
                    <Link
                      className="w-full text-[20px] p-4 hover:bg-primary-light"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                </motion.div>
              ))}
            </DropdownMenuContent>
          </motion.div>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}

export default Categories;
