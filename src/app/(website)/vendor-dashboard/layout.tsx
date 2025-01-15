import { ReactNode } from "react";
import DashNav from "./_components/dashboard-navbar";
import DashSidebar from "./_components/dashboard-sidebar";

export default async function VendorDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <DashNav />
      <div className="flex items-start h-full">
        <DashSidebar />
        {children}
      </div>
    </div>
  );
}
