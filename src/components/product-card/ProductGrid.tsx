import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
      // This would typically come from an API or database
  const products = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    name: "American Beauty",
    price: 7000.00,
    // rating: 4,
    imageUrl: "/placeholder.svg?height=200&width=200"
  }))
  return (
    <div className="space-y-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <div className="flex justify-center gap-2">
      {[1, 2, 3, '...', 47].map((page, i) => (
        <button
          key={i}
          className={`h-8 w-8 rounded ${
            page === 1 ? 'bg-green-700 text-white' : 'bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  </div>
  )
}

export default ProductGrid