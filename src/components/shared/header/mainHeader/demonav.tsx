import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
  
  export function AuctionMobileMenu() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Auction <ChevronDown className="ml-3 h-5 w-5 text-gray-400" /> </AccordionTrigger>
          <AccordionContent>
            <ul className="border-b border-gray-200">
              <li><Link href="/auctions" className="text-primary-green text-sm">All Auctions</Link></li>
              <li><Link href="/auctions" className="text-primary-green text-sm">Live Auctions</Link></li>
            </ul>
          </AccordionContent> 
        </AccordionItem>
      </Accordion>
    )
  }
  