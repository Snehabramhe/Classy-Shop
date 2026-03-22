import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Sidebar = () => {
  const [price, setPrice] = useState([100, 5000]);

  return (
    <div>
      {/* Category */}
      <h2 className="font-semibold mb-3">Shop by Category</h2>
      {["Fashion", "Electronics", "Bags", "Footwear", "Groceries", "Beauty"].map(
        (item, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="accent-primary"/>
            <label>{item}</label>
          </div>
        )
      )}

      {/* Availability */}
      <h2 className="font-semibold mt-6 mb-3">Availability</h2>
      {["Available (17)", "In Stock (10)", "Not Available (17)"].map(
        (item, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="accent-primary"/>
            <label>{item}</label>
          </div>
        )
      )}

      {/* Size */}
      <h2 className="font-semibold mt-6 mb-3">Size</h2>
      {["Small (17)", "Medium (10)", "Large (17)", "XL (17)", "XXL (17)"].map(
        (size, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="accent-primary"/>
            <label>{size}</label>
          </div>
        )
      )}

      {/* Price */}
      <h2 className="font-semibold mt-6 mb-3">Filter By Price</h2>

      <input
        type="range"
        min="100"
        max="5000"
        value={price[1]}
        onChange={(e) => setPrice([100, e.target.value])}
        className="w-full accent-red-500"
      />

      <div className="flex justify-between text-sm mt-2">
        <span>From: ₹{price[0]}</span>
        <span>To: ₹{price[1]}</span>
      </div>

      {/* Rating */}
<h2 className="font-semibold mt-6 mb-3">Filter By Rating</h2>

{[5, 4, 3, 2, 1].map((stars) => (
  <label
    key={stars}
    className="flex items-center gap-3 mb-3 cursor-pointer"
  >
    {/* Checkbox */}
    <input
      type="checkbox"
      className="accent-primary"
    />

    {/* Stars */}
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) =>
        i < stars ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      )}
    </div>
  </label>
))}
    </div>
  );
};

export default Sidebar;