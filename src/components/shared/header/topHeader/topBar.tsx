import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Topbar() {
  return (
    <div className="bg-[#333333] h-[40px]">
      <div className="container">
        <div className="flex justify-end items-center h-full">
          <div className="mr-2">
            <Select>
              <SelectTrigger className="w-[80px] text-[#B3B3B3] focus-visible:ring-0 border-0 opacity-100">
                <SelectValue placeholder="USD" className=" opacity-0" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <a href="#" className="text-sm/6 text-[#B3B3B3]">
              Log in /
            </a>

            <a href="#" className="text-sm/6 text-[#B3B3B3] ml-1">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
