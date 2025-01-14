import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Box,
  Gift,
  LayoutDashboard,
  Settings,
  ShoppingCart,
} from "lucide-react";
import DashboardSidebarItem from "./dashboard-sidebar-item";

export type SidebarContentType = {
  id: number;
  name: string;
  icon: any;
  href: string;
};

const sidebarContents = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutDashboard className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard",
  },
  {
    id: 2,
    name: "Media",
    icon: Icons.media,
    href: "/vendor-dashboard/media",
  },
  {
    id: 3,
    name: "Auction/listing",
    icon: <Box className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/auctions",
  },
  {
    id: 4,
    name: "Auctions",
    icon: Icons.hammer,
    href: "/vendor-dashboard/live-auctions-listing",
  },
  {
    id: 5,
    name: "Order",
    icon: <ShoppingCart className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/cart",
  },
  {
    id: 6,
    name: "Cupons",
    icon: <Gift className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/cupons",
  },
  {
    id: 7,
    name: "Store Settings",
    icon: <Settings className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/settings",
  },
  {
    id: 7,
    name: "Customer",
    icon: Icons.userI,
    href: "/vendor-dashboard/customer",
  },
  {
    id: 8,
    name: "Refund",
    icon: Icons.refund,
    href: "/vendor-dashboard/refund",
  },
  {
    id: 8,
    name: "Reports",
    icon: Icons.reports,
    href: "/vendor-dashboard/reports",
  },
  {
    id: 9,
    name: "Reviews",
    icon: Icons.message,
    href: "/vendor-dashboard/message",
  },
  {
    id: 9,
    name: "Membership",
    icon: Icons.userPlus,
    href: "/vendor-dashboard/users",
  },
  {
    id: 9,
    name: "Staff",
    icon: Icons.userPencil,
    href: "/vendor-dashboard/staff",
  },
  {
    id: 10,
    name: "Group",
    icon: Icons.users,
    href: "/vendor-dashboard/staff",
  },
  {
    id: 11,
    name: "Followers",
    icon: Icons.happy,
    href: "/vendor-dashboard/staff",
  },
  {
    id: 12,
    name: "Supports",
    icon: Icons.headphone,
    href: "/vendor-dashboard/staff",
  },
] as SidebarContentType[];

const DashSidebar = () => {
  return (
    <div className="h-[calc(100vh-94px)] w-[336px] bg-[#2A6C2D] shadow-[0px_28px_20px_0px_#0000000D]">
      <ScrollArea className="h-full w-full">
        <div className="w-[265px] mx-auto space-y-[16px]">
          {sidebarContents.map((item) => (
            <DashboardSidebarItem key={item.id} item={item} />
          ))}
          <div>
            <button
              className={cn(
                " w-full h-[46px] rounded-[4px] pl-[16px] flex items-center gap-[12px] font-medium text-[18px] leading-[21.4px] transition-colors duration-300 bg-transparent text-white hover:bg-white/10 my-[80px]"
              )}
            >
              {Icons.logout} Logout
            </button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashSidebar;
