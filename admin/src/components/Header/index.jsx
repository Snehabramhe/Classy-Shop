import React from "react";
import { FaRegBell } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import ProfileDropdown from "../ProfileDropdown";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-3">
      
      {/* Left */}
      <button onClick={toggleSidebar} className="cursor-pointer">
        <RiMenu2Fill size={22} />
      </button>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <FaRegBell size={20} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            4
          </span>
        </div>
        
        <ProfileDropdown/>
      </div>
    </div>
  );
};

export default Header;