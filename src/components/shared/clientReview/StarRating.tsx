import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { StarRatingProps } from './types';

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex gap-1 items-start self-stretch my-auto">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? "fill-amber-500 text-amber-500" : "fill-stone-300 text-stone-300"
          )}
        />
      ))}
    </div>
  );
};