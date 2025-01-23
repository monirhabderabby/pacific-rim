import * as React from "react";
import { ProvideStarRating } from "./ProvideStarRatting";
import { Button } from "@/components/ui/button";
import { ReviewFormProps } from "./types";

export const ReviewForm: React.FC<ReviewFormProps> = () => {
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }
    console.log("Rating:", rating);
    console.log("Review:", review);
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg w-full"
    >
      <h2 className="text-lg font-semibold text-gradient">Add a review</h2>

      <div className="flex gap-2">
        <label htmlFor="rating" className="text-base text-neutral-700">
          Your rating <span className="text-red-600">*</span>
        </label>
        <span>
          <ProvideStarRating rating={rating} onChange={setRating} />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="review" className="text-base text-neutral-700">
          Your review <span className="text-red-600">*</span>
        </label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="p-3 border rounded-lg min-h-[120px] border-neutral-300 focus:border-green-600 focus:ring-green-600"
          placeholder="Write your review"
          required
          aria-required="true"
        />
      </div>

      <Button
        type="submit"
        className="self-start px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        Submit
      </Button>
    </form>
  );
};
