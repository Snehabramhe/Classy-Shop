import React from "react";
import ProductImages from "../ProductDetail/ProductImages";
import ProductInfo from "../ProductDetail/ProductInfo";
import { VscChromeClose } from "react-icons/vsc";

const ProductModal = ({ product, onClose }) => {

  // ✅ Don't render if no product selected
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // click outside closes modal
    >
      
      {/* Modal Box */}
      <div
        className="bg-white p-6 rounded-xl flex gap-8 relative max-w-[90vw] w-full"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold cursor-pointer hover:text-red-500"
        >
         <VscChromeClose/>
        </button>

        {/* ✅ Safe image fallback */}
        <ProductImages images={product.images || [product.images]} zoomType="click" />

        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductModal;