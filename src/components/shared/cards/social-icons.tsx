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
        className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white  w-[40px] h-[40px] flex justify-center items-center"
      >
        <TfiFacebook />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white  w-[40px] h-[40px] flex justify-center items-center"
      >
        <TfiLinkedin />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] p-2 hover:text-white hover:bg-[#2A6C2D]"
      >
        <BsTwitterX />
      </Link>
      <Link
        href="/"
        className="border rounded-full text-[#2A6C2D]  border-[#2A6C2D] p-2 hover:bg-[#2A6C2D] hover:text-white w-[40px] h-[40px] flex justify-center items-center"
      >
        <GrInstagram />
      </Link>
    </div>
  );
}
