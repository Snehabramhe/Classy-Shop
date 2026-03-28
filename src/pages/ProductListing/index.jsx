import React, { useState } from "react";
import Sidebar from "../../components/ProductListing/Sidebar";
import ProductGrid from "../../components/ProductListing/ProductGrid";
import { HiBars3 } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import SortDropdown from "../../components/Common/SortDropdown";
import Pagination from "../../components/Common/Pagination";
import CustomBreadcrumbs from "../../components/BreadCrumb";

const breadcrumbData = [
    { label: "Home", href: "/" },
    { label: "Fashion" }, // last one (no link)
  ];

const ProductListing = () => {
  const [grid, setGrid] = useState(4); // default 4 columns
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="bg-white min-h-screen p-4">

      <CustomBreadcrumbs items={breadcrumbData}/>

      <div className="flex gap-4">

        {/* Sidebar */}
        <div className="w-64 bg-white p-4 rounded-lg">
          <Sidebar />
        </div>

        {/* Products Section */}
        <div className="flex-1">

          {/* Top Toolbar */}
          <div className="bg-gray-200 p-2 px-4 rounded-lg flex justify-between items-center mb-4">

            {/* Left Section */}
            <div className="flex items-center gap-1">

              {/* Hamburger → 1 column */}
              <button
                onClick={() => setGrid(1)}
                className={`p-2 rounded-full cursor-pointer ${grid === 1 ? "bg-gray-300 text-primary" : "hover:bg-gray-100"
                  }`}
              >
                <HiBars3 className="w-6 h-6" />
              </button>

              {/* Grid → 4 columns */}
              <button
                onClick={() => setGrid(4)}
                className={`p-2 rounded-full cursor-pointer ${grid === 4 ? "bg-gray-300 text-primary" : "hover:bg-gray-100"
                  }`}
              >
                <HiSquares2X2 className="w-6 h-6" />
              </button>

              <p className="text-gray-600 ml-2 font-medium">There are products.</p>
            </div>


            <div className="flex items-center gap-3 relative">
              <span className="text-gray-500">Sort By</span>
              <SortDropdown />
            </div>
          </div>

          <ProductGrid grid={grid} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;