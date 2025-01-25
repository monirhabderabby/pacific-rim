"use client";
// Packages

import { usePathname } from "next/navigation";

// Local imports

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
      <header>
        
        <div className="hidden lg:block">
          <DesktopNavbar pathName={pathName} />
        </div>
      </header>
    </Hideon>
  );
}

export default Navbar;
