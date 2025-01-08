'use client'

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/shared/sections/vendors/search-bar"
import { VendorCard } from "@/components/shared/cards/vendor-card"
import { vendors } from "@/data/vendors"

export default function VendorStore() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor =>
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.address.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-white ">
      <SearchBar
        onSearch={setSearchQuery}
        totalResults={filteredVendors.length}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {filteredVendors.slice(0, 6).map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  )
}

