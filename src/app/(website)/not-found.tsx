import { Button } from "@/components/ui/button"
import Image from "next/image"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/img/404.png"
        width={729}
        height={486}
        alt="404 Page Not Found"
      />
      <div className="font-bold text-4xl md:text-5xl text-[#2A6C2D] mt-[70px]">Oops!</div>
      <div className="font-bold text-2xl md:text-3xl text-[#2A6C2D]">Page not Found</div>
      <div className="text-[#6D6D6D] text-lg md:text-xl pt-3 pb-3">Looks like you&apos;ve wandered off track.</div>
      <Button className="bg-primary-green hover:bg-primary-green-hover min-w-[25%] p-5">Go To Homepage</Button>
    </div>
  )
}

export default NotFound
