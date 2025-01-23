import MediaFilter from "./_components/media-filter";
import MediaHeader from "./_components/media-header";
import VendorMediaContainer from "./_components/vendor-media-container";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <MediaHeader />
      <MediaFilter />
      <VendorMediaContainer />
    </div>
  );
};

export default Page;
