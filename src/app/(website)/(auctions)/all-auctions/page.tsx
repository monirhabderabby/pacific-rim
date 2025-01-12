// local import 
import { PageHeader } from "@/components/shared/sections/page-header";
import AllAuctionsContainer from "./_components/all-auction-container";

const Page = () => {
  return (
    <div>
      <PageHeader
        title="All Auctions"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "All Auctions",
            href: "",
          },
        ]}
      />
      <AllAuctionsContainer />
    </div>
  );
};

export default Page;
