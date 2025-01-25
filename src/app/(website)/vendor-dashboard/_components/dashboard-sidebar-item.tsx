"use client";
import { SidebarContentType } from "@/data/vendor-dashboard-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: SidebarContentType;
}
const DashboardSidebarItem = ({ item }: Props) => {
  const pathName = usePathname();

  const isActive = pathName === item.href;

  return (
    <div className="relative pl-[38px]">
      <Link className={`flex items-center gap-2 px-6 py-4 rounded-l-full text-lg font-medium leading-[21px] text-[#152764] ${isActive && "bg-[#E6EEF6]"}`} href={item.href}>{item?.icon} {item?.name}</Link>
      <span className={`absolute top-[-48px] right-0 w-12 h-12 bg-transparent rounded-full shadow-[35px_35px_0_10px_#E6EEF6] ${isActive ? "block" : "hidden bg-[#E6EEF6]"}`}></span>
      <span className={`absolute bottom-[-48px] right-0 w-12 h-12 bg-transparent rounded-full shadow-[35px_-35px_0_10px_#E6EEF6] ${isActive ? "block" : "hidden"}`}></span>
    </div>
  );
};

export default DashboardSidebarItem;
