"use client";
// Packages

import { usePathname } from "next/navigation";

// Local imports
import { cn } from "@/lib/utils";
import Hideon from "@/provider/Hideon";
import DesktopNavbar from "./DesktopNavbar";


function Navbar() {
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
          <DesktopNavbar pathName={pathName} />
        </div>
      </header>
    </Hideon>
  );
}

export default Navbar;
