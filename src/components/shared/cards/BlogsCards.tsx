// package import 
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MessageCircle, User } from 'lucide-react';

// local import 
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";


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
                        className="w-full w-[370px], lg:h-[230px] h-[270px] object-cover"
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <div className="flex items-center gap-4 text-sm text-[#444444] mb-4">
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
                    <h3 className="font-medium mb-4 line-clamp-2 text-[18px] text-[#000000]">
                        {title}
                    </h3>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    
                    <Link
                        href={`/blogs/${id}`}
                        className="text-primary hover:text-primary font-medium inline-flex items-center gap-1"
                    >
                        Read More
                        <ArrowRight className='w-[25px] h-[22px] font-light'/>

                    </Link>
                    
                </CardFooter>
            </Card>
        </>
    )
}

export default BlogsCards