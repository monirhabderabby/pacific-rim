"use client";

import Commentcard from "@/components/shared/cards/commentcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CommentsData } from "@/data/comment";
import { useState } from "react";

function BlogCommets() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // show a toast meesage

    setIsSubmitting(false);
  }
  return (
    <>
      <div className="py-4">
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Leave us a comment
        </h3>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-[#444444] text-base">
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="Write your full name"
                required
                className="border-[1px] border-[#C5C5C5] p-6 text-primary-black placeholder:text-[#C5C5C5] focus-visible:ring-0 focus-visible:ring-offset-0;
"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#444444] text-base">
                Username or Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Write your user name or email"
                required
                className="border-[1px] border-[#C5C5C5] p-6 text-primary-black placeholder:text-[#C5C5C5] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment" className="text-[#444444] text-base">
              Comments
            </Label>
            <Textarea
              id="comment"
              placeholder="Write your comments here.."
              required
              className="min-h-[150px]  border-[1px] border-[#C5C5C5] p-6 text-primary-black placeholder:text-[#C5C5C5] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-[285px] h-[56px] "
            >
              {isSubmitting ? "Submitting..." : "Submit Comment"}
            </Button>
          </div>
        </form>
      </div>

      <div className="py-4">
        <div className="text-2xl font-medium leading-tight text-black">
          Comments
        </div>
        <div className="flex flex-col items-start mt-5 w-full max-md:max-w-full">
          {CommentsData.map((comment) => (
            <Commentcard
              key={comment.id}
              author={comment.author}
              date={comment.date}
              content={comment.content}
              avatarUrl={comment.avatarUrl}
              id={comment.id}
            />
          ))}
        </div>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </div>
    </>
  );
}

export default BlogCommets;
