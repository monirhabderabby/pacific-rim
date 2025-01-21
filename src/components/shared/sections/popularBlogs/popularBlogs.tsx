"use client";
import { PopularBlogs } from "@/data/popularBlogs";
import { ButtonArrow } from "../../button/ButtonArrow";
import PopularBlogsCards from "../../cards/BlogsCards";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/components/animations/variant";

function PopularBlog() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.div ref={ref}>
        <div className="container mx-auto pt-[56px]">
          <SectionHeading heading="Shop By Popular Blogs" subheading="Blog" />

          
          <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Start animation only when in view
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
          
        >
          
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
          </motion.div>
        <div className="text-center">
          <ButtonArrow href="/blogs" text="Explore More" />
        </div>
      </div>
    </motion.div>
  );
}

export default PopularBlog;
