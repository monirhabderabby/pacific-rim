import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import BlogsContainer from "./_components/blogs-container";

const Page = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
            <div className="mt-[-10px]">
              <SectionHeading heading={"Our Latest News From Blogs"} subheading={"Blog"} />
            </div>

        <BlogsContainer />
      </div>
    </section>
  );
};

export default Page;
