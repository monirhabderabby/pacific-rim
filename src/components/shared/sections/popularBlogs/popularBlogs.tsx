"use client";
import { PopularBlogs } from "@/data/popularBlogs";
import { ButtonArrow } from "../../button/ButtonArrow";
import PopularBlogsCards from "../../cards/BlogsCards";
import SectionHeading from "../../SectionHeading/SectionHeading";

function PopularBlog() {
  return (
    <section>
      <div className="container mx-auto pt-[56px]">
        <SectionHeading heading="Shop By Popular Blogs" subheading="Blog" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12">
          {PopularBlogs.slice(0, 3).map((blog) => (
            <PopularBlogsCards
              key={blog.id}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              author={blog.author}
              comments={blog.comments}
              href={blog.href}
              id={blog.id}
            />
          ))}
        </div>

        <div className="text-center">
          <ButtonArrow href="/blogs" text="Explore More" />
        </div>
      </div>
    </section>
  );
}

export default PopularBlog;
