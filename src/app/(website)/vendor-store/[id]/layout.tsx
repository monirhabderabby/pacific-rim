import { ReactNode } from "react";
import VendorContactInfo from "./_components/vendor-contact-info";
import VendorNavigationBar from "./_components/vendor-navigation-bar";
import VendorStoreHeader from "./_components/vendor-store-header";

export default async function VendorStoreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <VendorStoreHeader />
      <div className=" container mx-auto flex flex-col md:flex-row mt-[40px] mb-[80px]">
        {/* Sidebar */}
        <aside className=" md:w-[270px] space-y-[30px]">
          <VendorNavigationBar />
          <VendorContactInfo />
        </aside>

        {/* Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
