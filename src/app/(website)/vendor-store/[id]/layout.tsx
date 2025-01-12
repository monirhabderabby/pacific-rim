// package import 
import { ReactNode } from "react";
// local import 
import VendorContactInfo from "./_components/vendor-contact-info";
import VendorNavigationBar from "./_components/vendor-navigation-bar";
import VendorStoreHeader from "./_components/vendor-store-header";

export default async function VendorStoreLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <VendorStoreHeader />
      <div className=" container mx-auto flex flex-col md:flex-row mt-[40px] mb-[80px] gap-x-[30px]">
        {/* Sidebar */}
        <aside className=" md:w-[270px] space-y-[30px] ">
          <VendorNavigationBar id={params.id} />
          <VendorContactInfo />
        </aside>

        {/* Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
