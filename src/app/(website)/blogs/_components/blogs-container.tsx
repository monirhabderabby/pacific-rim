"use client";
import BlogsCards from "@/components/shared/cards/BlogsCards";
import PacificPagination from "@/components/ui/PacificPagination";
import { PopularBlogs } from "@/data/popularBlogs";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/components/animations/variant";

const BlogsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.div ref={ref}>
      <motion.div
        variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Start animation only when in view
          viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] m-12">
        {PopularBlogs.map((blog) => (
          <BlogsCards
            key={blog.id}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            comments={0}
            href={blog.href}
            id={blog.id}
          />
        ))}
      </motion.div>

      <div className="">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10}
        />
      </div>
    </motion.div>
  );
};

export default BlogsContainer;

