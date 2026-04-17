import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const SidebarItem = ({ item, isOpen, openMenu, toggleMenu, linkClass, activeClass }) => {
  const hasChildren = item.children;

  if (!hasChildren) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        {item.icon}
        {isOpen && item.title}
      </NavLink>
    );
  }

  return (
    <div>
      {/* Parent */}
      <div onClick={() => toggleMenu(item.key)} className={linkClass}>
        {item.icon}
        {isOpen && item.title}

        {isOpen && (
          <FaChevronDown
            className={`ml-auto transition-transform ${
              openMenu === item.key ? "rotate-180" : ""
            }`}
            size={12}
          />
        )}
      </div>

      {/* Children */}
      {openMenu === item.key && isOpen && (
        <div className="ml-8 mt-2 space-y-2">
          {item.children.map((child, i) => (
            <NavLink
              key={i}
              to={child.path}
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm text-gray-600 hover:text-black ${
                  isActive ? "font-semibold text-black" : ""
                }`
              }
            >
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;