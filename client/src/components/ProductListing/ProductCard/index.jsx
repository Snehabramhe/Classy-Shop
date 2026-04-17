import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { LuExpand } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";

const actionBtnStyle = {
    width: 35,
    height: 35,
    minWidth: 35,
    borderRadius: "50%",
    backgroundColor: "white",
    color: "black",
    transition: "all .3s ease",
    "& svg": {
        fontSize: 25,
        pointerEvents: "none",
    },
    "&:hover": {
        backgroundColor: "var(--color-primary)",
        color: "white",
        transform: "scale(1.2)"
    },

};

const ProductCard = ({ product, view, showModal }) => {
    const navigate = useNavigate();
    // 👉 LIST VIEW (1 column)
    if (view === 1) {
        return (
            <div onClick={() => navigate(`/product/${product.id}`)}
                className="bg-gray-100 rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer">

                {/* Image */}
                <div className="w-48 h-56 relative shadow-2xl rounded-lg">
                    <img
                        src={product.mainImage}
                        alt="product"
                        className="w-full h-full rounded-lg"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        10%
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="text-gray-500">{product.brand}</p>

                    <h2 className="text-lg font-semibold mt-1">
                        {product.title}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                        Sample product description like your UI screenshot...
                    </p>

                    {/* Rating */}
                    <div className="flex mt-2">
                        {"⭐⭐⭐⭐☆"}
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                        <span className="line-through text-gray-400 mr-2">₹80</span>
                        <span className="text-red-500 font-semibold">₹58</span>
                    </div>

                    {/* Button */}
                    <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    }

    // 👉 GRID VIEW (default)
    return (
        <div onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-lg overflow-hidden shadow-2xl hover:scale-102 duration-300 transition cursor-pointer group relative z-0">

            {/* Image */}
            <div className="relative h-64">
                <img
                    src={product.mainImage}
                    alt="product"
                    className="h-full w-full"
                />

                {/* Discount Badge */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    10%
                </span>

                <div className="actions absolute right-1 z-20 flex flex-col items-center gap-4 transition-all duration-500 -top-50 group-hover:top-2.5 opacity-0 group-hover:opacity-100">
                    <Button sx={actionBtnStyle}><FaRegHeart /></Button>
                    <Button sx={actionBtnStyle}><IoIosGitCompare /></Button>
                    <Button
                        sx={actionBtnStyle}
                        onClick={(e) => {
                            e.stopPropagation();
                            showModal(product);
                        }}
                    >
                        <LuExpand />
                    </Button>
                    <Button sx={actionBtnStyle}><BiLinkExternal /></Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-3">
                <p className="text-sm text-gray-500">{product.brand}</p>

                <h3 className="text-sm font-medium mt-1 line-clamp-2">
                    {product.title}
                </h3>

                {/* Rating */}
                <div className="flex mt-2">
                    {"⭐⭐⭐⭐☆"}
                </div>

                {/* Price */}
                <div className="mt-2">
                    <span className="line-through text-gray-400 mr-2">₹80</span>
                    <span className="text-red-500 font-semibold">₹58</span>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;