import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
}

const SectionHeading = ({ heading, subheading }: Props) => {
  return (
    <div className="my-5  w-full mx-auto">
      <h1 className="text-center  text-gradient heading">
        {" "}
        {heading}{" "}
      </h1>
      <p className="text-center font-medium text-[16px] leading-[19.2px] lg:text-[20px] lg:leading-[20px] text-transparent text-gradient my-2">
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
