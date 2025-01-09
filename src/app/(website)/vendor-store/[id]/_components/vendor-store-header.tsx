import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Image from "next/image";

const VendorStoreHeader = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(/assets/img/heroBg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          top: 0,
          left: 0,
          height: "300px",
        }}
        className="bg-cover animate-moveBackground"
      />
      <div className="container relative -top-[88px]">
        <Image
          src="https://utfs.io/f/HkyicnKv4pLkPTppIqbBiT8gFA2Wp9JkLtc5ZdKlhCyNY0vX"
          height={180}
          width={180}
          className="rounded-[12px] object-cover"
          alt="profile"
        />
        <h1 className="mt-[20px] text-[48px] font-semibold leading-[57.6px]">
          License Information
        </h1>
        <div className="flex items-center gap-x-3">
          <span className="text-[#3D3D3D] text-[16px] font-bold leading-[19.2px]">
            12Followers
          </span>
          <StarRating fill={4} outline={1} size={20} />
          <span className="text-[#3D3D3D] text-[16px] font-bold"> (4.0)</span>
        </div>

        <div className="mt-[20px] flex items-center gap-[15px]">
          <Button className="flex items-center gap-x-2 text-[16px] font-bold leading-[19.2px]">
            <Image
              src="/assets/svg/inbox.svg"
              alt="inbox"
              height={15}
              width={15}
            />
            Message
          </Button>
          <Button
            className="flex items-center gap-x-2 text-[16px] font-bold leading-[19.2px]"
            variant="outline"
          >
            <Image
              src="/assets/svg/user-plus.svg"
              alt="inbox"
              height={15}
              width={15}
            />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorStoreHeader;
