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
        className="relative overflow-hidden object-cover"
        style={{
          backgroundImage: "url('assets/newsletter/newsletter-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Left column with image */}
            <div className="relative h-[197px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={Newsletter}
                alt="Newsletter feature image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column with form */}
            <div className="space-y-6 md:pl-8 bg-white p-24 rounded-lg opacity-80">
              <div className="space-y-4">
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
