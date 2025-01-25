"use client";
// Packages
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Local imports
import HeaderLogo from "@/../../public/assets/header-logo.png";
import { Button } from "@/components/ui/button";
import HeaderIconMenu from "../headerIconMenu/headerIconMenu";
// import Dropdown, { AuctionMobileMenu } from "./demonav";
import { motion } from "framer-motion";
import AuctionMobileNav from "./AuctionMobileNav";
import PagesMobileNav from "./PagesMobileNav";

const Navicons = [
  {
    href: "/notifications",
    src: "/assets/svg/bell.svg",
    alt: "bell-icon",
    count: 4,
    srOnlyText: "View notifications",
  },
  {
    href: "/wishlist",
    src: "/assets/svg/heart.svg",
    alt: "heart-icon",
    srOnlyText: "View wishlist",
  },
  {
    href: "/cart",
    src: "/assets/svg/cart-icon.svg",
    alt: "cart-icon",
    count: 2,
    srOnlyText: "View cart",
  },
  {
    href: "/account",
    src: "/assets/svg/user-circle.svg",
    alt: "user-icon",
    srOnlyText: "View account",
  },
];
const mobileNavicons = [
  {
    href: "/wishlist",
    src: "/assets/svg/heart.svg",
    alt: "heart-icon",
    srOnlyText: "View wishlist",
  },
  {
    href: "/cart",
    src: "/assets/svg/cart-icon.svg",
    alt: "cart-icon",
    count: 4,
    srOnlyText: "View cart",
  },
];

function MobileTabletNavbar({ loggedin }: { loggedin: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const auctionLinks = [
    { href: "/all-auctions", label: "All Auctions" },
    { href: "/live-auctions", label: "Live Auctions" },
  ];

  // Pages Mobile Links

  const pagesMobileLinks = [
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQ" },
    { href: "", label: "Membership Plans" },
    { href: "", label: "Vendor Store" },
    { href: "", label: "404 Page" },
  ];

  const sidebarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <>
      <div className="flex items-center justify-between h-[56px] p-4">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pacific Rim</span>
            <Image alt="Logo" src={HeaderLogo} className="h-10 w-20" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <HeaderIconMenu icons={mobileNavicons} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between px-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pacific Rim</span>
              <Image alt="Logo" src={HeaderLogo} className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="w-full py-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="text-[20px] block py-2 px-6 font-normal text-black hover:bg-[#E6EEF6]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-[20px] block py-2 px-6 font-normal text-black hover:bg-[#E6EEF6]"
                >
                  About
                </Link>
                {/* Use Dropdown Component for Auctions */}
                <AuctionMobileNav
                  label="Auctions"
                  links={auctionLinks}
                  onClose={closeMobileMenu}
                />

                <Link
                  href="/blogs"
                  onClick={closeMobileMenu}
                  className="text-[20px] block py-2 px-6 font-normal text-black hover:bg-[#E6EEF6]"
                >
                  Blog
                </Link>
                <PagesMobileNav
                  label="page"
                  links={pagesMobileLinks}
                  onClose={closeMobileMenu}
                />
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-[20px] block py-2 px-6 font-normal text-black hover:bg-[#E6EEF6]"
                >
                  Contact
                </Link>
              </div>

              <div className="container pt-6">
                {!loggedin ? (
                  <div className="grid grid-cols-2 gap-[30px]">
                    <Button variant="outline" size="sm">
                      Log in
                    </Button>
                    <Button type="button" size="sm">
                      Sign up
                    </Button>
                  </div>
                ) : (
                  <HeaderIconMenu icons={Navicons} />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Dialog>
    </>
  );
}

export default MobileTabletNavbar;
