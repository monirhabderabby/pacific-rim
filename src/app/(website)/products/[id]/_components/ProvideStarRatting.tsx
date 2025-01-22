import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";
import { StarRatingProps } from "./types";

export const ProvideStarRating: React.FC<StarRatingProps> = ({
  rating,
  onChange,
  maxRating = 5,
}) => {
  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  return (
    <div className="flex gap-1 items-center">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "w-6 h-6 focus:outline-none",
            index < rating
              ? "fill-amber-500 text-amber-500"
              : "fill-stone-300 text-stone-300"
          )}
          onClick={() => handleClick(index)}
          aria-label={`Rate ${index + 1} star${index + 1 > 1 ? "s" : ""}`}
        >
          <Star />
        </button>
      ))}
    </div>
  );
};
