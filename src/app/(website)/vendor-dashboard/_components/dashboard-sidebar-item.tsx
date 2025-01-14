"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContentType } from "./dashboard-sidebar";

interface Props {
  item: SidebarContentType;
}
const DashboardSidebarItem = ({ item }: Props) => {
  const pathName = usePathname();

  const isActive = pathName === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        " w-full h-[46px] rounded-[4px] pl-[16px] flex items-center gap-[12px] font-medium text-[18px] leading-[21.4px] transition-colors duration-300",
        isActive
          ? "bg-white text-[#2A6C2D]"
          : "bg-transparent text-white hover:bg-white/10"
      )}
    >
      {item.icon} {item.name}
    </Link>
  );
};

export default DashboardSidebarItem;
