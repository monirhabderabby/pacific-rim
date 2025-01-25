"use client";
import FooterLogo from "@/../../public/assets/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();

  // Define routes where the footer should be hidden
  const HIDE_ROUTES = [
    "/age-alert",
    "/vendor-dashboard",
    "/login",
    "/registration",
    "/forgot-password",
  ];

  // Check if the current route matches any of the hide routes
  const shouldHideFooter = HIDE_ROUTES.some((route) =>
    pathName.startsWith(route)
  );

  // If the footer should be hidden, render nothing
  if (shouldHideFooter) {
    return null;
  }

  return (
    <footer className="bg-[#101218] text-white pt-12 lg:pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Footer Content Layout */}
        <div className="grid grid-cols-4 gap-4 lg:gap-x-24">
          {/* Logo Column */}
          <div className="flex flex-col items-center col-span-4 lg:col-span-1">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={FooterLogo}
                alt="Pacific Rim Fusion Logo"
                width={91}
                height={91}
                className="mb-4"
              />
            </Link>
            <h2 className="text-[18px] font-semibold mb-1 text-[#ffffff]">
              PACIFIC RIM FUSION
            </h2>
            <p className="text-[#E6EEF6] text-[16px]">Share The Balance</p>
          </div>

          {/* Information & Discover Columns */}
          <div className="col-span-4 lg:col-span-2">
            <div className="grid grid-cols-2 gap-10 lg:gap-24">
              {/* Information Section */}
              <div>
                <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px]">
                  Information
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Contact", href: "/contact" },
                    { label: "Privacy Policy", href: "/privacyPolicy" },
                    {
                      label: "Terms and Conditions",
                      href: "/term-and-conditions",
                    },
                    { label: "FAQs", href: "/faqs" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discover Section */}
              <div>
                <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px]">
                  Discover
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Live Auction", href: "/live-auctions" },
                    { label: "Features", href: "/features" },
                    { label: "Ending Soon", href: "/ending-soon" },
                    { label: "Features Auction", href: "/features-auction" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[#E6EEF6] text-[14px] font-normal hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Locate Us Section */}
          <div className="col-span-3 lg:col-span-1">
            <h3 className="text-[16px] font-medium mb-4 border-[#E6EEF6] border-b-[1px] pb-[10px] w-[160px] lg:w-[200px]">
              Locate Us
            </h3>
            <p className="text-[#E6EEF6] text-[14px]">
              2 Star Circle Star Way,
              <br />
              San Carlos, CA 94070
            </p>
          </div>

          {/* Footer Bottom Text */}
          <div className="lg:col-end-5 lg:col-span-3 col-span-4 text-[#D9D9D9] text-[10px] lg:text-[14px] text-center lg:text-start mt-2 lg:mt-8">
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
