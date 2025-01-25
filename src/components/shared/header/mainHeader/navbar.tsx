"use client";
// Packages



// Local imports


import DesktopNavbar from "./DesktopNavbar";
function Navbar() {

  return (
    <div>
      <header>
        
        <div className="hidden lg:block">
          <DesktopNavbar  />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
