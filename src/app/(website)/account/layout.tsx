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
      <div className="mt-10 container mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className=" md:w-[270px]">
          <AccountSidebar />
        </aside>

        {/* Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
