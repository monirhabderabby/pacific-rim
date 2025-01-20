import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import BlogCommets from "./_components/blogCommets";
import BlogDetails from "./_components/blogDetails";
import BlogSidebar from "./_components/blogSidebar";
import { PageHeader } from "@/components/shared/sections/page-header";

const Page = ({ }: { params: { id: string } }) => {
  return <div>
    <PageHeader
                title="Blog Details Page"
                items={[
                  {
                  label: "Home",
                  href: "/",
                },
                {
                label: "Blog> Details",
                href: "/blogs",
              },
            ]}
          />
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 text-[32px]">
        <SectionHeading heading={'Our Latest News From Blogs'} subheading={'Blog'} />
      </div>
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="md:w-2/3">
          <BlogDetails />
          <BlogCommets />
        </div>
        <div className="md:w-1/3">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
};

export default Page;
