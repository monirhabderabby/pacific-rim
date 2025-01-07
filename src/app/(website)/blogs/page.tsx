import React from 'react';


import { PopularBlogs } from '@/data/popularBlogs';
import BlogsCards from '@/components/shared/cards/BlogsCards';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

const Page = () => {
  return <section className="py-16 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary-green mb-2">Our Latest News From Blogs</h2>
        <div className="font-bold">
          <h3 className="text-xl text-primary-green">Blog</h3>
          <div className='mt-[-10px]'>
            <SectionHeading heading={''} subheading={''} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {PopularBlogs.map(blog =>
          <BlogsCards key={blog.id} image={blog.image} title={blog.title} date={blog.date} author={blog.author} comments={0} href={blog.href} id={blog.id} />

        )}
      </div>

      <div className="dark">
        <div className="py-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className="border border-primary-green-hover hover:bg-primary-green-hover">
                  <ChevronLeft className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-primary-green hover:bg-primary-green-hover border border-primary-green-hover text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-primary-green-hover hover:bg-primary-green-hover">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-primary-green-hover hover:bg-primary-green-hover">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="border border-primary-green-hover hover:bg-primary-green-hover" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-primary-green-hover hover:bg-primary-green-hover">
                  17
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-primary-green-hover hover:bg-primary-green-hover">
                  <ChevronRight className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  </section>;
};

export default Page;
