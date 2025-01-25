"use client";
// Packages

import { usePathname } from "next/navigation";

// Local imports


import DesktopNavbar from "./DesktopNavbar";
function Navbar() {
  const pathName = usePathname();

  return (
    <div
      
    >
      <header>
        
        <div className="hidden lg:block">
          <DesktopNavbar pathName={pathName} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
