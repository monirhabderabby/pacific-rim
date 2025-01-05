"use client";

import Newsletter from "@/../../public/assets/newsletter/newsletter.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

function NewsletterPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <>
      <section
        className="relative overflow-hidden object-cover h-auto lg:h-[457px] p-[30px] w-full"
        style={{
          backgroundImage: "url('assets/newsletter/newsletter-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-24 w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left column with image */}
            <div className="hidden lg:block md:w-[470px] h-[293px] relative">
              <Image
                src={Newsletter}
                alt="Newsletter feature image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column with form */}
            <div className="flex-1 w-full bg-white/80 p-[20px] md:p-[40px] rounded-[16px]">
              <div className="space-y-4 mb-5">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Subscribe Newsletter
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-green-600">
                  Get bidding update earlier.
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter and be the first to discover the
                  latest CBD tips, exclusive discounts, and wellness news.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white"
                />
                <Button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsletterPage;
