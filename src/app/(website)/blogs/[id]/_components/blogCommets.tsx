"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CommentsData } from "@/data/comment";
import Commentcard from "@/components/shared/cards/commentcard";
// import { useToast } from "@/components/ui/use-toast";

function BlogCommets() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const { toast } = useToast()

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // toast({
        //     title: "Comment submitted",
        //     description: "Your comment has been submitted successfully.",
        // })

        setIsSubmitting(false)
        event.currentTarget.reset()
    }
    return (
        <>
            <div className="py-4">
                <h3 className="text-2xl font-semibold mb-4 text-black">Leave us a comment</h3>
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
                            className="w-[285px] h-[56px] bg-[#2A6C2D] hover:bg-[#236423] text-white"
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
                        <Commentcard key={comment.id} author={comment.author} date={comment.date} content={comment.content} avatarUrl={comment.avatarUrl} id={comment.id} />
                    ))}
                </div>
                <button
                    className="gap-2.5 self-start px-6 py-3 mt-5 text-base font-medium leading-tight text-green-800 bg-white rounded-lg border border-green-800 border-solid max-md:px-5"
                    tabIndex={0}
                >
                    Read More
                </button>
            </div>
        </>
    )
}

export default BlogCommets