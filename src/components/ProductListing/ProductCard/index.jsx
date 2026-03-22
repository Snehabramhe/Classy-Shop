import React from "react";

const ProductCard = ({ product,grid }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:scale-102 duration-300 transition cursor-pointer">
      
      {/* Image */}
<div className={`relative ${grid===1 ? "h-128" : "h-64"}`}>
        <img
          src={product.image}
          alt="product"
          className="h-full w-full"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          10%
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-sm text-gray-500">{product.brand}</p>

        <h3 className="text-sm font-medium mt-1 line-clamp-2">
          {product.title}
        </h3>

        <p className="mt-2 font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;