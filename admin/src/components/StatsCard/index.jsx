import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full mt-8">
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
        Total Users & Total Sales
      </h2>

      {/* Legend */}
      <div className="flex items-center gap-6">
        
        {/* Users */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <p className="text-gray-700 text-lg">Total Users</p>
        </div>

        {/* Sales */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <p className="text-gray-700 text-lg">Total Sales</p>
        </div>

      </div>
    </div>
  );
};

export default StatsCard;