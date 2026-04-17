import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="profile"
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-4 w-64 bg-white rounded-lg border border-gray-200 shadow-xl z-50">
          
          <div className="absolute right-4 -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>


          {/* User Info */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-300">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">
                Angelina Gotelli
              </h4>
              <p className="text-sm text-gray-500">
                admin-01@ecme.com
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            
            <button onClick={() => navigate("/profile")} className="w-full flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
              <FaUserCircle className="text-lg"/>
              Profile
            </button>

            <button onClick={() => navigate("/login")} className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700">
              <FiLogOut className="text-lg" />
              Sign Out
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;