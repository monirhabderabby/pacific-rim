// package import 
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";



export default function SocialIcons() {
  return (
    <div className="flex items-center gap-x-[20px]">
      <Link
        href="/"
        className="border rounded-full text-bg-primary border-[#0057A8] hover:bg-primary hover:text-white w-[40px] lg:w-[44px] h-[40px] lg:h-[44px] flex justify-center items-center"
      >
        <GrInstagram className="w-[20px] h-[30px]"/>
      </Link>
      <Link
        href="/"
        className="border rounded-full text-bg-primary border-[#0057A8] hover:bg-primary hover:text-white  w-[40px] lg:w-[44px] h-[40px] lg:h-[44px] flex justify-center items-center"
      >
        <TfiFacebook className="w-[20px] h-[30px]" />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-bg-primary border-[#0057A8] hover:bg-primary hover:text-white  w-[40px] lg:w-[44px] h-[40px] lg:h-[44px] flex justify-center items-center"
      >
        <TfiLinkedin className="w-[20px] h-[30px]"/>
      </Link>
      <Link
        href="/"
        className="border rounded-full text-bg-primary border-[#0057A8] hover:bg-primary hover:text-white  w-[40px] lg:w-[44px] h-[40px] lg:h-[44px] flex justify-center items-center"
      >
        <BsTwitterX className="w-[20px] h-[30px]"/>
      </Link>
    </div>
  );
}
