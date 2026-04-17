import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select option",
  fullWidth = true,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className={`${fullWidth ? "w-full" : ""}`} ref={dropdownRef}>
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      {/* Field */}
      <div
        onClick={() => setOpen(!open)}
        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center cursor-pointer bg-white hover:border-gray-400"
      >
        <span className="text-sm text-gray-700">
          {selected ? selected.label : placeholder}
        </span>

        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={12}
        />
      </div>

      {/* Dropdown */}
      <div className="relative">
        {open && (
          <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;