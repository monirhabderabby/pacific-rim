// package import 
import Image from "next/image";
import Link from "next/link";

// local import 
import { Button } from "@/components/ui/button";


const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <Image
        src="/assets/img/404.png"
        width={729}
        height={486}
        alt="404 Page Not Found"
      />
      <div className="font-bold text-4xl md:text-5xl text-[#2A6C2D] mt-[70px]">Oops!</div>
      <div className="font-bold text-2xl md:text-3xl text-[#2A6C2D]">Page not Found</div>
      <div className="text-[#6D6D6D] text-lg md:text-xl pt-3 pb-3">Looks like you&apos;ve wandered off track.</div>
      <div className="flex flex-col self-center max-w-full w-[500px] max-md:w-[343px] mx-auto">
      <Link href="/" passHref>
        <Button className="bg-primary-green hover:bg-primary-green-hover px-6 py-5 w-full text-base font-medium leading-tight text-white rounded-lg min-h-[56px] max-md:px-5">
          Go To Homepage
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
