import React from 'react';
import { Button } from "@/components/ui/button";

import PopularBlogsCards from '../../cards/BlogsCards';
import SectionHeading from '../../SectionHeading/SectionHeading';
import { PopularBlogs } from '@/data/popularBlogs';


function PopularBlog() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-600 mb-2">Shop By Popular Blogs</h2>
                    <div className="font-bold">
                        <h3 className="text-xl text-green-600">Blog</h3>
                        <div className='mt-[-10px]'>
                            <SectionHeading heading={''} subheading={''} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {PopularBlogs.slice(0, 3).map(blog =>
                        <PopularBlogsCards key={blog.id} image={blog.image} title={blog.title} date={blog.date} author={blog.author} comments={blog.comments} href={blog.href} id={blog.id} />
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