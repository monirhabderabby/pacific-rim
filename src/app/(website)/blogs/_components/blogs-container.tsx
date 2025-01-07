"use client";
import BlogsCards from "@/components/shared/cards/BlogsCards";
import PacificPagination from "@/components/ui/PacificPagination";
import { PopularBlogs } from "@/data/popularBlogs";
import { useState } from "react";

const BlogsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {PopularBlogs.map((blog) => (
          <BlogsCards
            key={blog.id}
            image={blog.title}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            comments={0}
            href={blog.href}
            id={blog.id}
          />
        ))}
      </div>

      <div className="py-4">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10}
        />
      </div>
    </div>
  );
};

export default BlogsContainer;
