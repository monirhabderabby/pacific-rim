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
    <div className="bg-primary-black">
      <div className="container">
        <div className="flex justify-end items-center py-1">
          <div className="mr-2">
            <Select>
              <SelectTrigger className="w-[80px] text-primary-light border-0 opacity-100">
                <SelectValue
                  placeholder="USD"
                  className="text-primary-light bg-white opacity-0"
                />
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
            <a href="#" className="text-sm/6 text-primary-light">
              Log in /
            </a>

            <a href="#" className="text-sm/6 text-primary-light ml-1">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
