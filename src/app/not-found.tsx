import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <Image
        src="/assets/img/404.png"
        width={729}
        height={486}
        alt="404 Page Not Found"
        className="w-full max-w-[500px] h-auto"
      />
      <div className="font-bold text-4xl md:text-5xl text-[#2A6C2D] mt-10">
        Oops!
      </div>
      <div className="font-bold text-2xl md:text-3xl text-[#2A6C2D] mt-2">
        Page not Found
      </div>
      <div className="text-[#6D6D6D] text-lg md:text-xl text-center pt-2 pb-4">
        Looks like you've wandered off track.
      </div>
      <Button className="bg-primary-green hover:bg-primary-green-hover px-6 py-3 md:px-8 md:py-4">
        Go To Homepage
      </Button>
    </div>
  );
};

export default NotFound;
