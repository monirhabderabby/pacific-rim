'use client'

import { Plus, Minus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import faqImg from "../../public/assets/img/faq-Image.png"

export default function 
FAQSection() {
  return (
    <section className="container  lg:px-12 h-auto relative section">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image Section */}
        <div className="lg:w-2/5 hidden md:block">
          <Image 
            src={faqImg}
            alt="Decorative background"
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-3/5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-[#2A6C2D] mb-3 py-2">
              What do you want to know?
            </h1>
            <p className="text-lg text-[#444444] leading-6 mb-6">
              Connect with Trusted Sellers, Explore Quality Products, and Elevate Your Experience.
            </p>
          </div>

          {/* Accordion Section */}
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <AccordionItem
                key={item}
                value={`item-${item}`}
                className="border border-[#2A6C2D] rounded-lg overflow-hidden"
              >
                <AccordionTrigger 
                  className="flex justify-between items-center py-4 px-6 text-[#26854A] bg-white hover:no-underline focus:outline-none max-w-[700px]"
                >
                  <span className="text-lg font-semibold ">
                    How do I know if a seller is trustworthy?
                  </span>
                  <div className="shrink-0">
                    <Plus className="h-5 w-5 group-data-[state=closed]:block group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 group-data-[state=closed]:hidden group-data-[state=open]:block" />
                  </div> 
                </AccordionTrigger> 
                <AccordionContent className="px-6 py-4 bg-[#EAF0EA] border-t border-[#2A6C2D]">
                  <p className="text-[#4A4A4A]  text-wrap">
                    We vet all vendors before they join the platform and display customer reviews and ratings
                    on their product pages for transparency. We use secure encryption to protect your personal
                    and payment information. Additionally, all transactions are discreetly processed.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
