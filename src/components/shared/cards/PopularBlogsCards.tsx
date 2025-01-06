import React from 'react';
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, MessageCircle, User } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import blogsImg from "@/../../public/assets/blogs/blogs.png";

function PopularBlogsCards({ title, date, author, comments, href }: any) {
    return (
        <>
            <CardHeader className="p-0">
                <Image
                    src={blogsImg}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                />
            </CardHeader>
            <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        By {author}
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {comments} Comments
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                    {title}
                </h3>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link
                    href={href}
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
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
        </>
    )
}

export default PopularBlogsCards