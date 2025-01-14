import { AlignJustify } from "lucide-react";

const DashNav = () => {
  return (
    <div className="w-full h-[94px] bg-[#2A6C2D] flex items-center">
      <div className="ml-[336px] mr-[37px] flex justify-between">
        <div className="h-[36px] w-[36px] bg-white text-[#2A6C2D] flex justify-center items-center rounded-[4px]">
          <AlignJustify />
        </div>
      </div>
    </div>
  );
};

export default DashNav;
