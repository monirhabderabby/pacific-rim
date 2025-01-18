"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function NewsletterPage() {
  const [email, setEmail] = useState("");
  const pathName = usePathname();

  // Routes where the Navbar should be hidden
  const hideRoutes = [
    "/age-alert",
    "/vendor-dashboard",
    "/login",
    "/registration",
    "/auth",
  ];

  // Check if the current pathName starts with any hideRoutes item
  const shouldHideNavbar = hideRoutes.some((route) =>
    pathName.startsWith(route)
  );

  // If the Navbar should be hidden, return null
  if (shouldHideNavbar) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <>
      <section
        className="h-auto lg:h-[457px]"
        style={{
          backgroundImage: "url('/assets/newsletter/newsletter-bg.png')",
          backgroundRepeat: "repeat", // Ensure seamless background
          animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto py-12 w-full h-full flex items-center">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left column with image */}
            <div className="hidden lg:block md:w-[470px] h-[293px] relative">
              <Image
                src="/assets/newsletter/newsletter.png"
                alt="Newsletter feature image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column with form */}
            <div className="flex-1 w-full bg-white/70 p-[20px] md:p-[40px] rounded-[16px]">
              <div className="space-y-4 mb-5">
                <h2 className="text-[25px] lg:text-[32px] font-semibold text-primary-green-hover">
                  Subscribe Newsletter
                </h2>
                <h3 className="text-semibold leading-[26.4px] lg:text-[22px] text-primary-green-hover">
                  Get bidding update earlier.
                </h3>
                <p className="text-[#444444] text-[14px] lg:text-[16px]">
                  Subscribe to our newsletter and be the first to discover the
                  latest CBD tips, exclusive discounts, and wellness news.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="gap-2 flex-1 lg:relative w-full"
              >
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="placeholder:text-[#B3B3B3] flex-1 bg-white text-black text-center lg:text-left text-sm lg:text-base p-[21px] lg:p-6 border-[1px] border-primary-green-hover focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  className="bg-primary-green-hover hover:bg-[#225430] w-[120px] lg:w-[142px] h-[40px] lg:h-[50px] py-[13px] lg:absolute right-0 top-0 text-white mt-3 lg:mt-0"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <style>
          {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%; /* Ends at this position */
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }       
        `}
        </style>
      </section>
    </>
  );
}

export default NewsletterPage;
