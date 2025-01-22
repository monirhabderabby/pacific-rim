"use client";
// Packages
import { usePathname } from "next/navigation";

// Local imports
import { cn } from "@/lib/utils";
// import Dropdown, { AuctionMobileMenu } from "./demonav";
import Hideon from "@/provider/Hideon";
import dynamic from "next/dynamic";
import DesktopNavbar from "./DesktopNavbar";
const MobileTabletNavbar = dynamic(() => import("./MobileTabletNavbar"), {
  ssr: false,
});

function Navbar() {
  const loggedin = false;
  const pathName = usePathname();

  return (
    <Hideon
      routes={[
        "/age-alert",
        "/vendor-dashboard",
        "/login",
        "/registration",
        "/reset-password",
        "/forgot-password",
      ]}
      currentPath={pathName}
    >
      <header className={cn("bg-white", pathName !== "/" && "border-b-2")}>
        <div className="lg:hidden">
          {/* <MobileTabletNavbar loggedin={loggedin} /> */}
        </div>
        <div className="hidden lg:block">
          <DesktopNavbar pathName={pathName} loggedin={loggedin} />
        </div>
      </header>
    </Hideon>
  );
}

export default Navbar;
