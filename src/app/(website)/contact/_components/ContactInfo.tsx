// Packages
import * as React from "react";

// Local imports
import SocialIcons from "@/components/shared/cards/social-icons";
import { ContactItem } from "./ContactItem";

const contactData = [
  {
    icon: "/assets/img/location.png",
    title: "Address:",
    details: ["3517 W. Gray St. Utica, Pennsylvania 57867"],
    iconAlt: "Location icon",
  },
  {
    icon: "/assets/img/phone.png",
    title: "Phone:",
    details: ["(629) 555-0129", "(229) 555-0109"],
    iconAlt: "Phone icon",
  },
  {
    icon: "/assets/img/mail.png",
    title: "Email:",
    details: ["deanna.curtis@example.com", "deanna.curtis@example.com"],
    iconAlt: "Email icon",
  },
  {
    icon: "/assets/img/clock.png",
    title: "Available:",
    details: ["Mon- Fri:", "08:00 AM - 5:00 PM"],
    iconAlt: "Clock icon",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col grow p-[20px] gap-[10px] max-w-[470px] bg-[#E6EEF6] rounded-2xl min-h-[648px] max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="text-[25px] lg:text-[32px] font-semibold leading-[38.4px] text-gradiend max-md:max-w-full">
          Customer Service
        </h1>
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          {contactData.map((item, index) => (
            <div key={index} className={index > 0 ? "mt-4" : ""}>
              <ContactItem {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full gap-[20px]">
        <h2 className="text-[32px] font-semibold leading-[38.4px] text-gradiend max-md:max-w-full">
          Social Media
        </h2>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInfo;
