"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Heart,
  LayoutDashboard,
  LogOut,
  RefreshCw,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogOutModal from "./logOutModal";

const navigationLists = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutDashboard className="fill-black ml-3" />,
    href: "/account",
  },
  {
    id: 2,
    name: "Order History",
    icon: <RefreshCw className="ml-3" />,
    href: "/account/order-history",
  },
  {
    id: 3,
    name: "Wishlist",
    icon: <Heart className="ml-3" />,
    href: "/wishlist",
  },
  {
    id: 4,
    name: "Shopping Cart",
    icon: <ShoppingCart className="ml-3" />,
    href: "/cart",
  },
  {
    id: 5,
    name: "Settings",
    icon: <Settings className="ml-3" />,
    href: "/account/settings",
  },

];

const AccountSidebar = () => {

  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const pathName = usePathname();



  const handleLogout = () => {
    setShowModal(true); // Show the modal when "Log out" is clicked
  };

  const confirmLogout = () => {
    // Perform logout action (e.g., clearing auth tokens or redirecting to the login page)
    console.log("User logged out");
    setShowModal(false); // Close the modal
    window.location.href = "/"; // Redirect to the home page or login page
  };

  const cancelLogout = () => {
    setShowModal(false); // Close the modal
  };


  return (
 <>
    <section className="space-y-[40px] md:sticky md:top-[50px]">
      <div className="border-[1px] rounded-[12px] border-[#C5C5C5] w-full  md:w-[270px] h-auto ">
        <div className="h-[70px] w-full flex justify-start items-center border-b border-b-[#C5C5C5]">
          <h2 className="text-[32px] text-[#2A6C2D] font-semibold text-left pl-3">
            Navigation
          </h2>
        </div>
        <div className="h-auto flex flex-col">
          {navigationLists.map(({ id, icon, name, href }) => {
            const isActive = pathName === href;

            return (
              <Link
           
                href={href}
                className={cn(
                  "flex items-center h-[64px] gap-x-3 border-b border-[#C5C5C5] hover:bg-[#EAF0EA] transition-colors duration-300 cursor-pointer",
                  name === "Log out" && "text-[#E10E0E] hover:bg-[#E10E0E]/5",
                  isActive && "bg-[#EAF0EA]",
                  id === 6 && "border-b-0"
                )}
                key={id}
              >
                {icon}
                <span className="text-[20px] font-normal leading-[24px]">
                  {name}
                </span>
              </Link>

            );
          })}
{/* LogOut Button  */}
           <button
              onClick={(e) => {
                 {
                  e.preventDefault(); // Prevent navigation for "Log out"
                  handleLogout(); // Handle logout logic
                 
                }
              }}
                className={cn(
                  "flex items-center h-[64px] gap-x-3 hover:bg-[#EAF0EA] transition-colors duration-300 cursor-pointer",
                    "text-[#E10E0E] hover:bg-[#E10E0E]/5",
                  
                )}
                
              >
               <LogOut className="ml-3" />
                <span className="text-[20px] font-normal leading-[24px]">
                  Log Out
                </span>
              </button>

       
        </div>
      </div>
      <div>
        <Button className="w-full" asChild>
          <Link href={`/vendor-dashboard`}>Go to Store Dashboard</Link>
        </Button>
      </div>
    </section>
    {
      showModal && (<LogOutModal cancelLogout={cancelLogout} confirmLogout={confirmLogout } />)
    }
 </>
  );
};

export default AccountSidebar;
