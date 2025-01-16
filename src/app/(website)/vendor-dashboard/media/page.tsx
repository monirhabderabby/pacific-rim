import MediaFilter from "./_components/media-filter";
import MediaHeader from "./_components/media-header";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <MediaHeader />
      <MediaFilter />
    </div>
  );
};

export default Page;
