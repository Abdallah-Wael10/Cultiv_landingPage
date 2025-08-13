import React from "react";
import Image from "next/image";
import Logo from "../../../../public/BureauLogo.png";

const NavBar = () => {
  return (
    <nav className="w-full h-16 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={Logo}
              alt="Bureau Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation Links - You can add these later */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Add navigation links here if needed */} 
            </div>
          </div>

          {/* Mobile menu button - You can add this later */}
          <div className="md:hidden">
            {/* Add mobile menu button here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
