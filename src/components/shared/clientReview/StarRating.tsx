import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";
import { StarRatingProps } from "./types";

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className,
}) => {
  return (
    <div className="flex gap-1 items-start self-stretch my-auto">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating
              ? "fill-amber-500 text-amber-500"
              : "fill-stone-300 text-stone-300",
            className
          )}
        />
      ))}
    </div>
  );
};
