import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import { ReactNode } from "react";
import AccountSidebar from "./_components/sidebar";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <PageHeader title="Account" items={[]} />
      <div className="section container flex gap-x-[30px]">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
}
