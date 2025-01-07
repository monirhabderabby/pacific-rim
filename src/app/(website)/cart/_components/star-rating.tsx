import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div className={`flex ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

