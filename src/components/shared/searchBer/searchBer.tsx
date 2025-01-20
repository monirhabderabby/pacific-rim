import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchBer() {
  return (
    <form className="flex flex-1 gap-2 w-full lg:w-[772px] border-1 border-primary-green outline-0 mb-1 lg:mb-0">
      <div className="flex-1 relative h-[34px] lg:h-full">
        <div className="flex items-center h-[44px]">
          <Search className="absolute left-2.5 top-2.4 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 rounded-[6px]  lg:h-full border-[1px] border-[#2A6C2D] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] leading-[21px] placeholder:text-[#9C9C9C]"
          />
        </div>
        <Button className=" absolute right-0 top-0 mt-[4px] lg:mt-[0] h-[36px]  lg:h-full rounded-l-none">
          Search
        </Button>
      </div>
    </form>
  );
}

export default SearchBer;
