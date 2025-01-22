import { MapPinned, PhoneCall } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";

const VendorContactInfo = () => {
  return (
    <div className="border-[1px] rounded-[12px] border-[#C5C5C5] w-full  md:w-[270px] h-auto">
      <div className="h-[70px] w-full flex justify-start items-center border-b border-b-[#C5C5C5]">
        <h2 className="text-[32px] text-[#2A6C2D] font-semibold text-left pl-3">
          Get In Touch
        </h2>
      </div>

      <div className="flex flex-col h-auto ">
        <div className="p-[12px] flex items-start gap-[15px] text-[20px] leading-[24px] font-normal text-[#000000] border-b-[1px] border-b-[#C5C5C5]">
          <div className="w-[25px]">
            <MapPinned stroke="#2A6C2D" />
          </div>
          <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
        </div>
        <div className="p-[12px] flex items-start gap-[15px] text-[20px] leading-[24px] font-normal text-[#000000] border-b-[1px] border-b-[#C5C5C5]">
          <PhoneCall stroke="#2A6C2D" />
          <span>(229) 555-0109</span>
        </div>
        <div className="p-[12px] flex items-start gap-[15px] text-[20px] leading-[24px] font-normal text-[#000000] border-b-[1px] border-b-[#C5C5C5]">
          <div className="w-[25px]">
            <MapPinned stroke="#2A6C2D" />
          </div>
          <span>deanna.curtis@exam ple.com</span>
        </div>

        <div className="p-[20px] flex flex-col justify-center items-center w-full  gap-[15px] text-[20px] leading-[24px] font-normal text-[#000000]">
          <h3 className="text-center text-[25px] leading-[30px] font-medium w-full">
            Follow Me
          </h3>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default VendorContactInfo;

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-x-[20px] justify-center ">
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white  w-[30px] h-[30px] flex justify-center items-center"
      >
        <TfiFacebook size={18} />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white  w-[30px] h-[30px] flex justify-center items-center"
      >
        <TfiLinkedin size={18} />
      </Link>
      <Link
        href="/"
        className="border rounded-full flex justify-center items-center text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] p-2 hover:text-white hover:bg-[#2A6C2D] w-[30px] h-[30px]"
      >
        <BsTwitterX size={18} />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D]  border-[#2A6C2D] p-2 hover:bg-[#2A6C2D] hover:text-white w-[30px] h-[30px] flex justify-center items-center"
      >
        <GrInstagram size={18} />
      </Link>
    </div>
  );
};
