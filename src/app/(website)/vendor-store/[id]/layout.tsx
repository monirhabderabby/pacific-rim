import { ReactNode } from "react";
import VendorStoreHeader from "./_components/vendor-store-header";

export default async function VendorStoreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <VendorStoreHeader />
      {children}
    </div>
  );
}
