import ProductGrid from '@/components/product-card/ProductGrid'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
      <Sidebar />
      <ProductGrid />
    </div>
  </div>
  )
}

export default page