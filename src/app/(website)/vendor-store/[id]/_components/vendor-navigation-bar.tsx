"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLists = [
  {
    id: 1,
    name: "Products",
    href: "/account",
  },
  {
    id: 2,
    name: "Store About",
    href: "/account/order-history",
  },
  {
    id: 3,
    name: "Policies",
    href: "/wishlist",
  },
  {
    id: 4,
    name: "Reviews",
    href: "/cart",
  },
  {
    id: 5,
    name: "Business License",
    href: "/account/settings",
  },
];

const VendorNavigationBar = () => {
  const pathName = usePathname();
  return (
    <div className="border-[1px] rounded-[12px] border-[#C5C5C5] w-full  md:w-[270px] h-auto md:sticky ">
      <div className="h-[70px] w-full flex justify-start items-center border-b border-b-[#C5C5C5]">
        <h2 className="text-[32px] text-[#2A6C2D] font-semibold text-left pl-3">
          Navigation
        </h2>
      </div>
      <div className="h-auto flex flex-col">
        {navigationLists.map(({ id, name, href }) => {
          const isActive = pathName === href;

          return (
            <Link
              href={href}
              className={cn(
                "flex items-center h-[64px] gap-x-3 pl-[12px] border-b border-[#C5C5C5] hover:bg-[#EAF0EA] transition-colors duration-300 cursor-pointer",
                name === "Log out" && "text-[#E10E0E] hover:bg-[#E10E0E]/5",
                isActive && "bg-[#EAF0EA]",
                id === 5 && "border-b-0"
              )}
              key={id}
            >
              <span className="text-[20px] font-normal leading-[24px]">
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VendorNavigationBar;
