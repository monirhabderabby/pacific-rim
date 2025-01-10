import Image from "next/image";
import { Button } from "../../../components/ui/button";
const FindFavourite = () => {
  return (
    <div className=" relative h-[344px] lg:h-[395px] max-w-[1125px] mx-auto  lg:py-24 overflow-hidden rounded-[16px] drop-shadow-[0px_4px_4px_#00000026]">
      {/* Background Image */}
      <Image
        src="/assets/img/popularBg.png"
        alt="Laboratory background"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center  p-8 lg:pl-[72px] text-white">
        <h1 className="text-[28px] lg:text-[36px] font-medium leading-[43.2px]">
          Find Your Favourite
        </h1>

        <p className="max-w-2xl text-[16px] font-light leading-[19.2px] mt-[15px]">
          Our platform ensures that all participants have valid Cannabis
          Business licenses and that those licenses are in good standing with
          the respective agencies or authorities. In this way, transactions
          comply with local and international laws, giving local businesses a
          secure and reliable environment to operate within.
        </p>

        <Button className="w-fit mt-[41px] text-[12px] md:text-[16px]">
          Join Our Workspace today
        </Button>
      </div>
    </div>
  );
};

export default FindFavourite;
