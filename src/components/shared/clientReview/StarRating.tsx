import * as React from "react";
import { Star } from "lucide-react";
        
// local import ------------
import { cn } from "@/lib/utils";
import { StarRatingProps } from "./types";

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className,
  activeColor = "fill-amber-500 text-amber-500", // default active color
  inactiveColor = "fill-stone-300 text-stone-300", // default inactive color
}) => {
  return (
    <div className="flex gap-1 items-start self-stretch my-auto">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? activeColor : inactiveColor,
            className
          )}
        />
      ))}
    </div>
  );
};