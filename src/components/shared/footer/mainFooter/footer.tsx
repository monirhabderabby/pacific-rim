"use client";
import FooterLogo from "@/../../public/assets/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();

  if (pathName === "/age-alert") {
    return;
  }

  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col lg:items-center">
            <Image
              src={FooterLogo}
              alt="Pacific Rim Fusion Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <h2 className="text-xl font-bold mb-1">PACIFIC RIM FUSION</h2>
            <p className="text-zinc-400">Share The Balance</p>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/term-and-conditions"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Faq
                </Link>
              </li>
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/live-auction"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Live Auction
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/ending-soon"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Ending Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/features-auction"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Features Auction
                </Link>
              </li>
            </ul>
          </div>

          {/* Locate Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locate Us</h3>
            <address className="text-zinc-400 not-italic">
              2 Star Circle Star Way,
              <br />
              San Carlos, CA
              <br />
              94070
            </address>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-4 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>
            2024 WWW Staging - Thailand - Pacific Rim Fusion, LLC. Powered by
            WWW Staging - Thailand - Pacific Rim Fusion, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
