import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

const MediaHeader = () => {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
        <span className="font-medium">All</span> (20) |
        <span className="text-[#2A6C2D]"> Published (30) | </span>
        <span className="text-[#2A6C2D]"> Draft (30) | </span>
        <span className="text-[#2A6C2D]"> Pending (30) | </span>
        <span className="text-[#2A6C2D]"> Archived (30) </span>
      </div>
      <div>
        <Button asChild>
          <Link href="/">
            Add New <Box />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MediaHeader;
