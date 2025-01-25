"use client";

// Packages
import { Bell, MessageCircleMore, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Local Imports
import { getCurrentTab } from "@/data/vendor-dashboard-data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DashNav = () => {
  const pathName = usePathname();

  const currentTab = getCurrentTab(pathName);
  return (
    <div className="w-full h-[94px] bg-white flex items-center px-[38px]">
      <div className="ml-[336px] flex justify-between w-full">
        <div className="flex items-center gap-x-[16px]">
          <div
            className={cn(
              "w-full h-[46px] rounded-[4px] pl-[16px] flex items-center gap-[12px] font-medium text-[18px] leading-[21.4px] transition-colors duration-300 bg-transparent text-[#152764] "
            )}
          >
            {currentTab?.icon} {currentTab?.name}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <SearchButton />
          <DashRightSide />
        </div>
      </div>
    </div>
  );
};

export default DashNav;

const SearchButton = () => {
  return (
    <form className="flex flex-1 gap-2 w-full lg:w-[329px] border-1 border-[#152764] outline-0 mb-1 lg:mb-0">
      <div className="flex-1 relative h-[34px] lg:h-full">
        <div className="flex items-center h-[44px]">
          <Search className="absolute left-2.5 top-2.4 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 rounded-[6px]  lg:h-full border-[1px] border-[#4857BD] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] leading-[21px] placeholder:text-gradient"
          />
        </div>
        <Button className="absolute right-0 top-0 mt-[4px] lg:mt-[0] h-[36px]  lg:h-full rounded-l-none text-sm font-semibold leading-[17px]">
          Search
        </Button>
      </div>
    </form>
  )
}

const DashRightSide = () => {
  return (
    <div className="flex items-center justify-end gap-x-[20px]">
      <Link
        href="/"
        className="h-[35px] w-[35px] bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:from-[#7091FF] hover:via-[#2F4697] hover:to-[#7485FB] transition-all duration-500 ease-in-out text-[#152764] flex justify-center items-center rounded-[24px]"
      >
        <MessageCircleMore className="h-[12px] w-[12px] text-white" />
      </Link>
      <Link
        href="/"
        className="h-[35px] w-[35px] border-[1px] border-[#152764] ] text-[#152764] flex justify-center items-center rounded-[24px] hover:bg-white/20 transition-colors duration-300"
      >
        <Bell className="h-[12px] w-[12px]" />
      </Link>

      <div className="flex items-center gap-x-[10px]">
        <Image
          src="/assets/img/profile_img.png"
          width={42}
          height={42}
          alt="profile"
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-[2px]">
          <h3 className="text-[16px] font-medium leading-[24px] text-gradient">
            Aliana
          </h3>
          <p className="text-[12px] leading-[14.53px] font-normal text-[#7ABFFF33]">
            Vendor
          </p>
        </div>
      </div>
    </div>
  );
};
