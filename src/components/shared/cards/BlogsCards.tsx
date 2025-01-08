import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, MessageCircle, User } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Blog } from '@/types/popularBlog';

function BlogsCards({ image, title, date, author, comments, id }: Blog) {
    return (
        <>
            <Card key={id} className="overflow-hidden bg-primary-light shadow-none border-0">
                <CardHeader className="p-0">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1 text-[12px]">
                            <CalendarDays className="w-4 h-4" />
                            {date}
                        </div>
                        <div className="flex items-center gap-1 text-[12px]">
                            <User className="w-4 h-4" />
                            By {author}
                        </div>
                        <div className="flex items-center gap-1 text-[12px]">
                            <MessageCircle className="w-4 h-4" />
                            {comments} Comments
                        </div>
                    </div>
                    <h3 className="font-semibold mb-4 line-clamp-2 text-[18px]">
                        {title}
                    </h3>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <Link
                        href={`/blogs/${id}`}
                        className="text-primary-green hover:text-primary-green-hover font-medium inline-flex items-center gap-2"
                    >
                        Read More
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />

                        </svg>

                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default BlogsCards