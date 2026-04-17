import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const SortDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Name, A To Z");

  const dropdownRef = useRef(null);

  const options = [
    "Name, A To Z",
    "Name, Z To A",
    "Price, Low To High",
    "Price, High To Low",
  ];

  // 🔥 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      
      {/* Selected Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white border rounded-lg px-2 py-2 shadow-sm hover:bg-gray-50"
      >
        {selected}

        {/* Arrow */}
        <FiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-1 w-49 bg-white rounded-lg shadow-2xl z-50">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;