import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
}

const SectionHeading = ({ heading, subheading }: Props) => {
  return (
    <div className="my-5  w-full mx-auto">
      <h1 className="text-center text-[25px] leading-[30px] lg:text-[36px] lg:leading-[43.2px] text-[#2A6C2D] font-semibold">
        {" "}
        {heading}{" "}
      </h1>
      <p className="text-center font-medium text-[16px] leading-[19.2px] lg:text-[20px] lg:leading-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#1D4C1F] to-[#44B249] my-2">
        {subheading}
      </p>

      <Image
        className="mx-auto"
        src="/assets/img/Line.png"
        width={80}
        height={80}
        alt="Picture of the author"
      />
    </div>
  );
};

export default SectionHeading;

// Use it where needed

// <SectionHeading subheading={"Shop By Popular categories"} heading={"Popular categories"} />
