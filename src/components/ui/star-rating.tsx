import { Star, Star as StarFilled } from "lucide-react";

interface Props {
  fill: number;
  outline: number;
  size?: number;
}

const StarRating = ({ fill = 0, outline = 0, size = 16 }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      {/* Render filled stars */}
      {[...Array(fill)].map((_, index) => (
        <StarFilled
          key={`fill-${index}`}
          size={size}
          className="text-amber-500"
          fill="currentColor"
        />
      ))}
      {/* Render outlined stars */}
      {[...Array(outline)].map((_, index) => (
        <Star
          key={`outline-${index}`}
          size={size}
          className="fill-[#B0B0B0] text-[#B0B0B0]"
          fill="#B0B0B0"
        />
      ))}
    </div>
  );
};

export default StarRating;
