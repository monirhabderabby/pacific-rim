import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, MessageCircle, User } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import blogsImg from "@/../../public/assets/blogs/blogs.png";

const blogs = [
    {
        id: 1,
        title: "Germany's Pioneering Cannabis Legislation: Setting a Precedent for the EU",
        date: "01 Nov,2025",
        author: "Admin",
        comments: 55,
        image: "/public/assets/blogs/blogs.png",
        href: "#"
    },
    {
        id: 2,
        title: "Germany's Pioneering Cannabis Legislation: Setting a Precedent for the EU",
        date: "01 Nov,2025",
        author: "Admin",
        comments: 55,
        image: "/placeholder.svg?height=400&width=600",
        href: "#"
    },
    {
        id: 3,
        title: "Germany's Pioneering Cannabis Legislation: Setting a Precedent for the EU",
        date: "01 Nov,2025",
        author: "Admin",
        comments: 55,
        image: "/placeholder.svg?height=400&width=600",
        href: "#"
    }
]

function PopularBlogs() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">Shop By Popular Blogs</h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-1 w-8 bg-green-600"></div>
                        <h3 className="text-xl text-green-600">Blog</h3>
                        <div className="h-1 w-8 bg-green-600"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {blogs.map((blog) => (
                        <Card key={blog.id} className="overflow-hidden">
                            <CardHeader className="p-0">
                                <Image
                                    src={blogsImg}
                                    alt={blog.title}
                                    width={600}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <CalendarDays className="w-4 h-4" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        By {blog.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-4 h-4" />
                                        {blog.comments} Comments
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                                    {blog.title}
                                </h3>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Link
                                    href={blog.href}
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
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                        Explore More
                        <svg
                            className="w-4 h-4 ml-2"
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
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default PopularBlogs