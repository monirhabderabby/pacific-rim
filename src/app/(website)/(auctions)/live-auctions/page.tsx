// local import 
import { PageHeader } from "@/components/shared/sections/page-header";
import AllLiveAuctionContainer from "./_components/all-live-auction-container";

const Page = () => {
  return (
    <div>
      <PageHeader
        title="Live Auctions"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Live Auctions",
            href: "",
          },
        ]}
      />
      <AllLiveAuctionContainer />
    </div>
  );
};

export default Page;
