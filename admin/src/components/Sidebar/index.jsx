import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { menuItems } from "./menuData";
import logo from "../../assets/images/logo.jpg";
import logo_img from "../../assets/images/logo-img.png";

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const linkClass = `flex items-center gap-3 ${
    isOpen ? "px-4 py-2" : "px-1 py-2 pl-3"
  } rounded-lg hover:bg-gray-100 transition cursor-pointer`;

  const activeClass = "bg-gray-200 font-semibold";

  return (
    <div className="bg-white h-screen p-4">

      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <img src={isOpen ? logo : logo_img} alt="logo" />
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            isOpen={isOpen}
            openMenu={openMenu}
            toggleMenu={toggleMenu}
            linkClass={linkClass}
            activeClass={activeClass}
          />
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;