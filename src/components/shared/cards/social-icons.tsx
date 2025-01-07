import { TfiLinkedin, TfiFacebook  } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
    <Link
      href="/"
      className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white p-2"
    >
      <TfiFacebook />
    </Link>
    <Link
      href="/"
      className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] hover:bg-[#2A6C2D] hover:text-white p-2"
    >
      <TfiLinkedin />
    </Link>
    <Link
      href="/"
      className="border rounded-full text-[#2A6C2D] text-bg-primary-hover border-[#2A6C2D] p-2 hover:text-white hover:bg-[#2A6C2D]"
    >
      <BsTwitterX/> 
    </Link>
    <Link
      href="/"
      className="border rounded-full text-[#2A6C2D]  border-[#2A6C2D] p-2 hover:bg-[#2A6C2D] hover:text-white"
    >
      <GrInstagram />
    </Link>
  </div>
  )
}
