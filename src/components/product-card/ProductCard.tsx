import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: number
//   rating: number
  imageUrl: string
}
const ProductCard = ({ name, price,  imageUrl }: ProductCardProps) => {
  return (
    <div className="relative rounded-lg border bg-white p-4">
      <button className="absolute right-4 top-4 rounded-full bg-white p-1.5 shadow-sm">
        <Heart className="h-5 w-5 text-gray-400" />
      </button>
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{name}</h3>
          <div className="flex text-yellow-400">
            {Array(5).fill(null).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">₫{price.toLocaleString()}</p>
        <Button className="w-full bg-green-700 hover:bg-green-800">
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard