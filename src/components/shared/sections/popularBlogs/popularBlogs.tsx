import React from 'react';
import { Button } from "@/components/ui/button";

import { PopularBlogs } from '@/data/popularBlogs';
import PopularBlogsCards from '../../cards/PopularBlogsCards';
import { Card } from '@/components/ui/card';


function PopularBlog() {
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
                    {PopularBlogs.map(blog => <Card key={blog.id} className="overflow-hidden bg-primary-light shadow-none border-0">
                        <PopularBlogsCards image={blog.title} title={blog.title} date={blog.date} author={blog.author} comments={0} href={blog.href} id={''} />
                    </Card>
                    )}
                </div>

                <div className="text-center">
                    <Button
                        variant="outline"
                        className=" w-[173px] h-[44px] text-white bg-primary-green hover:bg-primary-green-hover hover:text-white"
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

export default PopularBlog