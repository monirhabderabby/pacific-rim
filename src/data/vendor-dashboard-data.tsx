import { Icons } from "@/components/ui/icons";
import {
  Box,
  Gift,
  LayoutDashboard,
  Settings,
  ShoppingCart,
} from "lucide-react";

export type SidebarContentType = {
  id: number;
  name: string;
  icon: any;
  href: string;
};

// NOTE: Don't Remove this code used inside vendor-dashboard route
export const sidebarContents = [
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
    href: "/vendor-dashboard/live-auctions",
  },
  {
    id: 5,
    name: "Order",
    icon: <ShoppingCart className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/orders",
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
    href: "/vendor-dashboard/customers",
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
    href: "/vendor-dashboard/reviews",
  },
  {
    id: 9,
    name: "Membership",
    icon: Icons.userPlus,
    href: "/vendor-dashboard/membership",
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

export const getCurrentTab = (
  fullPath: string
): SidebarContentType | undefined => {
  return sidebarContents
    .slice() // Create a copy of the array to avoid mutating the original
    .sort((a, b) => b.href.length - a.href.length) // Sort by href length (longer paths first)
    .find((tab) => fullPath.startsWith(tab.href));
};
