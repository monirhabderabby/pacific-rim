import * as React from "react";
import { ContactItem } from "./ContactItem";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const contactData = [
  {
    icon: "/assets/img/location.png",
    title: "Address:",
    details: ["3517 W. Gray St. Utica, Pennsylvania 57867"],
    iconAlt: "Location icon"
  },
  {
    icon: "/assets/img/phone.png",
    title: "Phone:",
    details: ["(629) 555-0129", "(229) 555-0109"],
    iconAlt: "Phone icon"
  },
  {
    icon: "/assets/img/mail.png",
    title: "Email:",
    details: ["deanna.curtis@example.com", "deanna.curtis@example.com"],
    iconAlt: "Email icon"
  },
  {
    icon: "/assets/img/clock.png",
    title: "Available:",
    details: ["Mon- Fri:", "08:00 AM - 5:00 PM"],
    iconAlt: "Clock icon"
  }
];
const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col grow p-5 max-w-[470px] bg-[#EAF0EA] rounded-2xl min-h-[648px] max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
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
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <h2 className="text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
          Social Media
        </h2>
        <div className="flex gap-5 items-center self-start mt-6">
          <Link
            href="/"
            className="border rounded-full border-[#2A6C2D] hover:bg-[#2A6C2D] p-2"
          >
            <Facebook className="fill-[#2A6C2D] text-white " />
          </Link>
          <Link
            href="/"
            className="border rounded-full border-[#2A6C2D] hover:bg-[#2A6C2D] p-2"
          >
            <Linkedin className="fill-[#2A6C2D] text-white " />
          </Link>
          <Link
            href="/"
            className="border rounded-full border-[#2A6C2D] p-2  hover:bg-[#2A6C2D]"
          >
            <Twitter className="text-[#2A6C2D] hover:text-white" />
          </Link>
          <Link
            href="/"
            className="border rounded-full border-[#2A6C2D] p-2 hover:bg-[#2A6C2D]"
          >
            <Instagram className="text-[#2A6C2D] hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
