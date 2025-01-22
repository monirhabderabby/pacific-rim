import { PageHeader } from "@/components/shared/sections/page-header";
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

      <div className="container py-[40px] md:py-[60px] lg:py-[80px]">
        <h1 className="heading text-center mb-8">
          Your Wishlist
        </h1>
        <WishlistContainer />
      </div>
    </div>
  );
}
