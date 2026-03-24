import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex-1 mt-10">
            <h1 className="text-2xl font-semibold mb-4">
                {product.title}
            </h1>

            <div className="flex gap-3 mb-4">
                <p className="text-gray-500">
                    Brand: {product.brand}
                </p>
                <div>⭐⭐⭐⭐⭐ (4 Reviews)</div>
            </div>

            <div className="flex gap-3 items-center">
                <div className="mb-4">
                    <span className="line-through text-gray-400 mr-2">
                        ₹{product.oldPrice}
                    </span>
                    <span className="text-red-500 text-xl font-semibold">
                        ₹{product.price}
                    </span>
                </div>

                <span className="inline-block mb-4 rounded-full text-sm">
                    Available In Stock: <span className="text-green-600 font-bold">147 Items</span>
                </span>
            </div>

            <p className="mb-6 text-gray-600 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                Non obcaecati ea quis delectus quo necessitatibus, cum mollitia maxime, <br />
                aspernatur accusantium pariatur commodi exercitationem inventore molestiae? <br />
                Earum aliquid libero consequatur tenetur.
            </p>

            {/* Size */}
            <div className="mb-6 flex gap-3">
                <p className="font-medium mt-1">Size:</p>
                <div className="flex gap-2 ">
                    {["S", "M", "L"].map((size) => (
                        <button
                            key={size}
                            className="border px-3 py-1 rounded hover:bg-gray-200"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-sm text-gray-700 mb-3">
                Free Shipping (Est. Delivery Time 2-3 days)
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center rounded">
                    <button
                        onClick={() => setQuantity(quantity - 1)}
                        className="px-4 py-1 rounded-full bg-gray-200 hover:bg-primary hover:text-white text-[24px] font-medium cursor-pointer"
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-1 rounded-full bg-gray-200 text-[24px] hover:bg-primary hover:text-white font-medium cursor-pointer"
                    >
                        +
                    </button>
                </div>

                <button className="bg-red-500 text-white px-6 py-2 gap-2 rounded-lg flex">
                    <MdOutlineShoppingCart size={24} /> Add To Cart
                </button>

                <div className="px-3 py-3 rounded-full bg-gray-200 cursor-pointer">
                    <IoMdHeartEmpty size={24} fill={"black"} />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;