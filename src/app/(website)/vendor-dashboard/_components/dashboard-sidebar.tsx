import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarContents } from "@/data/vendor-dashboard-data";
import { cn } from "@/lib/utils";
import DashboardSidebarItem from "./dashboard-sidebar-item";

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
