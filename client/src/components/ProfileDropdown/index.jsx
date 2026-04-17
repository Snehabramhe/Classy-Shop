import React, { useEffect, useRef } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

const ProfileDropdown = ({ isOpen, onClose, user }) => {

  const dropdownRef = useRef();
  const navigate = useNavigate();

  // 👉 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()} // ✅ ADD HERE
      className="absolute right-0 top-[120%] w-64 bg-white shadow-lg rounded-xl p-3 z-70"
    >
      {/* Menu */}
      <ul className="space-y-1">
        <li
          onClick={() => {
            onClose();
            navigate("/profile");
          }}

          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <IoPersonOutline size={18} />
          <span>My Account</span>
        </li>

        <li
          onClick={() => {
            onClose();
            navigate("/profile/address");
          }}

          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <SlLocationPin size={18} />
          <span>Address</span>
        </li>

        <li
          onClick={() => {
            onClose();
            navigate("/profile/orders");
          }}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <MdOutlineShoppingBag size={18} />
          <span>Orders</span>
        </li>

        <li
          onClick={() => {
            onClose();
            navigate("/profile/my-list");
          }} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <IoHeartOutline size={18} />
          <span>My List</span>
        </li>

        <li
          onClick={() => {
            onClose();
            navigate("/login");
          }}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <IoLogOutOutline size={18} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;