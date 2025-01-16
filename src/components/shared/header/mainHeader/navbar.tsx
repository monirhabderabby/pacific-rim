"use client";
// Packages
import { Dialog, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Local imports
import HeaderLogo from "@/../../public/assets/header-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeaderIconMenu from "../headerIconMenu/headerIconMenu";
import AuctionList from "./AuctionList";
// import Dropdown, { AuctionMobileMenu } from "./demonav";
import AuctionMobileNav from "./AuctionMobileNav";
import PagesMobileNav from "./PagesMobileNav";

interface DesktopNavbarProps {
  pathName: string;
  loggedin: boolean;
}

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

function DesktopNavbar({ pathName, loggedin }: DesktopNavbarProps) {
  return (
    <nav
      aria-label="Global"
      className="mx-auto h-[74px] flex container items-center justify-between"
    >
      <div className="flex ">
        <Link href="/" className="">
          <span className="sr-only">Pacific Rim</span>
          <Image alt="" src={HeaderLogo} className="h-[50px] w-[92px] lg:w-[100px]" />
        </Link>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-[36px] ">
        <Link
          href="/"
          className={cn(
            "text-[20px] font-medium hover:text-[#2A6C2D]",
            pathName === "/" ? "text-[#2A6C2D]" : "text-gray-900"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-[20px] font-normal hover:text-[#2A6C2D]",
            pathName === "/about" ? "text-primary-green" : "text-gray-900"
          )}
        >
          About
        </Link>
        <Link
          href=""
          className={cn(
            "text-[20px] font-normal hover:text-[#2A6C2D]",
            pathName === "/products" ? "text-primary-green" : "text-gray-900"
          )}
        >
          <AuctionList />
        </Link>
        <Link
          href="/blogs"
          className={cn(
            "text-[20px] font-normal hover:text-[#2A6C2D]",
            pathName === "/blogs" ? "text-primary-green" : "text-gray-900"
          )}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-[20px] font-normal hover:text-[#2A6C2D]",
            pathName === "/contact" ? "text-primary-green" : "text-gray-900"
          )}
        >
          Contact
        </Link>
      </PopoverGroup>
      <div>
        {!loggedin ? (
          <div className="hidden lg:flex lg:flex-1 gap-x-[20px] lg:justify-end">
            <Button variant="outline" asChild size="md">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="md" asChild>
              <Link href="/registration">Sign up</Link>
            </Button>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <HeaderIconMenu icons={Navicons} />
          </div>
        )}
      </div>
    </nav>
  );
}

function MobileTabletNavbar({ loggedin }: { loggedin: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const auctionLinks = [
    { href: "/all-auctions", label: "All Auctions" },
    { href: "/live-auctions", label: "Live Auctions" },
  ];
  const pagesMobileLinks = [
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQ" },
    { href: "", label: "Membership Plans" },
    { href: "", label: "Vendor Store" },
    { href: "", label: "404 Page" },
  ];
 
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                  label="Pages"
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

              <div className="py-6">
                {!loggedin ? (
                  <>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md px-3 mr-3 py-2 border border-lime-500 text-sm font-semibold text-primary-green shadow-sm"
                    >
                      Log in
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-primary-green px-3 py-2 text-sm font-semibold text-white shadow-sm"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <HeaderIconMenu icons={Navicons} />
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}


function Navbar() {
  const loggedin = false;
  const pathName = usePathname();

  // Routes where the Navbar should be hidden
  const hideRoutes = [
    "/age-alert",
    "/vendor-dashboard",
    "/login",
    "/registration",
  ];

  // Check if the current pathName starts with any hideRoutes item
  const shouldHideNavbar = hideRoutes.some((route) =>
    pathName.startsWith(route)
  );

  // If the Navbar should be hidden, return null
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <header className={cn("bg-white", pathName !== "/" && "border-b-2")}>
      <div className="lg:hidden">
        <MobileTabletNavbar loggedin={loggedin} />
      </div>
      <div className="hidden lg:block">
        <DesktopNavbar pathName={pathName} loggedin={loggedin} />
      </div>
    </header>
  );
}

export default Navbar;
