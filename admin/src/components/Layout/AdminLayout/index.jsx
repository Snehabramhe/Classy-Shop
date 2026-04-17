import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Header from "../../Header";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flex">

      {/* Sidebar */}
      <div className={`${isOpen ? "w-[20%]" : "w-[5%]"} transition-all`}>
        <Sidebar isOpen={isOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="p-5 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>

    </section>
  );
};

export default AdminLayout;