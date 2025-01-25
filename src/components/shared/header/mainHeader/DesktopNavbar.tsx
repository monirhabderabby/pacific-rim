// Packages
import { PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

// Local imports
import HeaderLogo from "/public/assets/header-logo.png";
import { cn } from "@/lib/utils";

interface DesktopNavbarProps {
  pathName: string;
}

function DesktopNavbar({ pathName }: DesktopNavbarProps) {
  return (
    <nav
      aria-label="Global"
      className="mx-auto h-[74px] flex container items-center justify-between"
    >
      <div className="flex ">
        <Link href="/" className="">
          <span className="sr-only">Pacific Rim</span>
          <Image
            alt="Logo"
            src={HeaderLogo}
            className="h-[50px] w-[92px] lg:w-[100px]"
          />
        </Link>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-[36px] ">
        <Link
          href="/"
          className={cn(
            "text-[20px] font-medium hover:text-gradient",
            pathName === "/" ? "text-gradient" : "text-black font-normal"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-[20px] font-normal hover:text-gradient",
            pathName === "/about" ? "text-gradient" : "text-black font-normal"
          )}
        >
          About
        </Link>
        <Link
          href="/blogs"
          className={cn(
            "text-[20px] font-normal hover:text-gradient",
            pathName === "/blogs" ? "text-gradient" : "text-black font-normal"
          )}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-[20px] font-normal hover:text-gradient",
            pathName === "/contact" ? "text-gradient" : "text-black font-normal"
          )}
        >
          Contact
        </Link>
      </PopoverGroup>
    </nav>
  );
}

export default DesktopNavbar;
