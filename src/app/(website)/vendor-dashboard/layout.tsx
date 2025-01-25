import { ReactNode } from "react";
import DashNav from "./_components/dashboard-navbar";
import DashSidebar from "./_components/dashboard-sidebar";

export default async function VendorDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-[#E6EEF6]">
      <DashNav />
      <div className="flex items-start h-full ">
        <DashSidebar />
        <div className="px-[30px] pt-[30px] w-full">{children}</div>
      </div>
    </div>
  );
}
