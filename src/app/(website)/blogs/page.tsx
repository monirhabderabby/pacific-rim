import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import BlogsContainer from "./_components/blogs-container";
import { PageHeader } from "@/components/shared/sections/page-header";

const Page = () => {
  return (
    <>
      <PageHeader
            title="Blog Page"
            items={[
              {
              label: "Home",
              href: "/",
            },
            {
            label: "blogs",
            href: "/blogs",
          },
        ]}
      />
      <section className="py-16 px-4">

        <div className="container mx-auto">
              <div className="mt-[-10px]">
                <SectionHeading heading={"Our Latest News From Blogs"} subheading={"Blog"} />
              </div>

          <BlogsContainer />
        </div>
      </section>
    </>
  );
};

export default Page;
