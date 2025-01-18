"use client";
import FooterLogo from "@/../../public/assets/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
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
    <footer className="bg-[#101218] text-white pt-12 lg:pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 lg:gap-x-24">
          {/* Logo Column */}
          <div className="flex flex-col items-center col-span-4 lg:col-span-1 ">
            <Link href="/">
              <Image
                src={FooterLogo}
                alt="Pacific Rim Fusion Logo"
                width={91}
                height={91}
                className="mb-4"
              />
            </Link>
            <h2 className="text-[18px] font-semibold mb-1 text-[#ffffff]">PACIFIC RIM FUSION</h2>
            <p className="text-[#E6EEF6] text-[16px">Share The Balance</p>
          </div>

          {/* Information Column */}
          <div className="col-span-4 lg:col-span-2">
            <div className="grid grid-cols-2 gap-10 lg:gap-24">
              <div>
                <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px]">Information</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacyPolicy"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/term-and-conditions"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Faq
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Discover Column */}
              <div>
                <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px]">Discover</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/live-auctions"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Live Auction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ending-soon"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Ending Soon
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features-auction"
                      className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                    >
                      Features Auction
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Locate Us Column */}
          <div className="col-span-3 lg:col-span-1">
            <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px] w-[160px] lg:w-[200px]">Locate Us</h3>
            <p className="text-[#E6EEF6] text-[14px] font-normal hover:text-white">
              2 Star Circle Star Way,
              San Carlos, CA
              94070
            </p>
          </div>
          <div className="lg:col-end-5 lg:col-span-3 col-span-4 text-[#D9D9D9] text-[10px] lg:text-[14px] text-center lg:text-start mt-2 lgt:mt-8">
            <p>
              2024 WWW Staging - Thailand - Pacific Rim Fusion, LLC. Powered by
              WWW Staging - Thailand - Pacific Rim Fusion, LLC
            </p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
