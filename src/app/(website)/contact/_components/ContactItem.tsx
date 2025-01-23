// package import 
import Image from "next/image";
import * as React from "react";

export interface ContactItemProps {
    icon: string;
    title: string;
    details: string[];
    iconAlt: string;
  }

export const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details, iconAlt }) => {
  return (
    <div className="flex gap-3 items-start w-full max-md:max-w-full">
      <div className="flex gap-2.5 items-center p-3 w-11 h-11 bg-primary rounded-[30px]">
        <Image
          loading="lazy"
          src={icon}
          alt={iconAlt}
          className="object-contain self-stretch my-auto w-5 aspect-square"
          width="600" height="400" 
        />
      </div>
      <div className="flex flex-col flex-1 shrink justify-center leading-tight basis-6 min-w-[240px]">
        <div className="text-[20px] lg:text-[25px] font-semibold text-black leading-[30px]">{title}</div>
        <div className="flex flex-col mt-2 w-full text-[16px] lg:text-[20px] text-[#444444] leading-[24px]">
          {details.map((detail, index) => (
            <div key={index} className={index > 0 ? "mt-1" : ""}>
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};