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

      <div className="container section mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl font-semibold text-[#2A6C2D] text-center mb-8">
          Your Wishlist
        </h1>
        <WishlistContainer />
      </div>
    </div>
  );
}
