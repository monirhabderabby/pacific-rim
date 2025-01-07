import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import BlogsContainer from "./_components/blogs-container";

const Page = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-green mb-2">
            Our Latest News From Blogs
          </h2>
          <div className="font-bold">
            <h3 className="text-xl text-primary-green">Blog</h3>
            <div className="mt-[-10px]">
              <SectionHeading heading={""} subheading={""} />
            </div>
          </div>
        </div>

        <BlogsContainer />
      </div>
    </section>
  );
};

export default Page;
