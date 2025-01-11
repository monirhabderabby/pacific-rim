import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import WishlistContainer from "./_components/wishlist-container";

export default function WishlistPage() {
  return (
    <div>
      <PageHeader
        title="Wishlist"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Wishlist",
            href: "",
          },
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-[32px] font-semibold text-[#2A6C2D] text-center md:my-8 my-2">
          Your Wishlist
        </h1>
        <WishlistContainer />
      </div>
    </div>
  );
}
