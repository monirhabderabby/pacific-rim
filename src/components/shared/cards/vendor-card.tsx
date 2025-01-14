// package import 
import Image from 'next/image'
import { MapPin, Phone, Mail, MoveRight } from 'lucide-react'

// local import 

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { VendorCardProps } from "@/types/vendor"

import { StarRating } from '@/app/(website)/cart/_components/star-rating'

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-[500px]">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-[130px] h-[130px] rounded-lg flex items-center justify-center">
            <Image
              src={vendor.imageUrl}
              alt="Cannabis Logo"
              className="w-full h-full"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-lg md:text-[32px] font-medium mb-1">{vendor.name}</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600">{vendor.followers} Followers</span>
            <div className="flex items-center gap-2">
              <StarRating rating={vendor.rating} />
              <span className="ml-1 text-sm text-gray-600">({vendor.rating})</span>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3  md:text-xl">
              <MapPin className="w-5 h-5 text-[#2A6C2D] shrink-0 mt-0.5" />
              <span className="text-gray-700">{vendor.address}</span>
            </div>
            <div className="flex items-center gap-3 md:text-xl ">
              <Phone className="w-5 h-5 text-[#2A6C2D]" />
              <span className="text-gray-700">{vendor.phone}</span>
            </div>
            <div className="flex items-center gap-3 md:text-xl">
              <Mail className="w-5 h-5 text-[#2A6C2D]" />
              <span className="text-gray-700">{vendor.email}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="text-sm bg-[#2A6C2D] hover:bg-[#235B26] text-white font-medium hover:gap-4 transition-all"
        >
          Visit Store
            <MoveRight className="w-4 h-4 mr-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}

