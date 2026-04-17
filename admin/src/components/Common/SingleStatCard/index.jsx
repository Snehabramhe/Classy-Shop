import React from "react";

const SingleStatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between w-full">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* Icon */}
        <div
          className="text-3xl"
          style={{ color: color }}
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-xl font-semibold text-black">{value}</h3>
        </div>
      </div>

      {/* RIGHT GRAPH */}
      <div className="flex items-end gap-1 h-10">
        <span
          className="w-1.5 rounded"
          style={{ height: "40%", backgroundColor: color }}
        ></span>
        <span
          className="w-1.5 rounded"
          style={{ height: "70%", backgroundColor: color }}
        ></span>
        <span
          className="w-1.5 rounded"
          style={{ height: "55%", backgroundColor: color }}
        ></span>
        <span
          className="w-1.5 rounded"
          style={{ height: "85%", backgroundColor: color }}
        ></span>
      </div>
    </div>
  );
};

export default SingleStatCard;