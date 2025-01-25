// Packages
import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";

// Local imports



function DesktopNavbar() {
  return (
    <nav
      aria-label="Global"
      className="mx-auto h-[74px] flex container items-center justify-between"
    >
      <div className="flex ">
        <Link href="/" className="">
          <span className="sr-only">Pacific Rim</span>
          
        </Link>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-[36px] ">
        <Link
          href="/"
          
        >
          Home
        </Link>
        <Link
          href="/about"
          
        >
          About
        </Link>
        <Link
          href="/blogs"
          
        >
          Blog
        </Link>
        <Link
          href="/contact"
          
        >
          Contact
        </Link>
      </PopoverGroup>
    </nav>
  );
}

export default DesktopNavbar;
